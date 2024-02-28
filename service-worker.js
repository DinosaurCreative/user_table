/* eslint-disable no-restricted-globals */

// This service worker can be customized!
// See https://developers.google.com/web/tools/workbox/modules
// for the list of available Workbox modules, or add any other
// code you'd like.
// You can also remove this file if you'd prefer not to use a
// service worker, and the Workbox build step will be skipped.

import { clientsClaim } from "workbox-core";
import { ExpirationPlugin } from "workbox-expiration";
import { precacheAndRoute, createHandlerBoundToURL } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import {
  NetworkFirst,
  StaleWhileRevalidate,
  CacheFirst,
} from "workbox-strategies";
import { CacheableResponsePlugin } from "workbox-cacheable-response";
import {
  STATUS_CODE,
  IMG_MAX_VALUE_FOR_CACHE,
  TIMES,
} from "./constants/common";

clientsClaim();

// Precache all of the assets generated by your build process.
// Their URLs are injected into the manifest variable below.
// This variable must be present somewhere in your service worker file,
// even if you decide not to use precaching. See https://cra.link/PWA
precacheAndRoute(self.__WB_MANIFEST);

// Set up App Shell-style routing, so that all navigation requests
// are fulfilled with your index.html shell. Learn more at
// https://developers.google.com/web/fundamentals/architecture/app-shell
const fileExtensionRegexp = new RegExp("/[^/?]+\\.[^/]+$");
registerRoute(
  // Return false to exempt requests from being fulfilled by index.html.
  ({ request, url }) => {
    // If this isn't a navigation, skip.
    if (request.mode !== "navigate") {
      return false;
    } // If this is a URL that starts with /_, skip.

    if (url.pathname.startsWith("/_")) {
      return false;
    } // If this looks like a URL for a resource, because it contains // a file extension, skip.

    if (url.pathname.match(fileExtensionRegexp)) {
      return false;
    } // Return true to signal that we want to use the handler.

    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + "/index.html")
);

// Кэшируем страницы (`HTML`) с помощью стратегии `Network First` (сначала сеть)
registerRoute(
  // проверяем, что запрос - это переход на новую страницу
  ({ request }) => request.mode === "navigate",
  new NetworkFirst({
    // помещаем все файлы в кэш с названием 'pages'
    cacheName: "pages",
    plugins: [
      // кэшируем только результаты со статусом 200
      new CacheableResponsePlugin({
        statuses: [STATUS_CODE.OK],
      }),
    ],
  })
);

// Кэшируем запросы на получение `CSS`, `JS` и веб-воркеров с помощью стратегии `Stale While Revalidate` (считается устаревшим после запроса)
registerRoute(
  // проверяем, что цель запроса - это таблица стилей, скрипт или воркер
  ({ request }) =>
    request.destination === "style" ||
    request.destination === "script" ||
    request.destination === "worker",
  new StaleWhileRevalidate({
    // помещаем файлы в кэш с названием 'assets'
    cacheName: "assets",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [STATUS_CODE.OK],
      }),
    ],
  })
);

// Кэшируем изображения с помощью стратегии `Cache First` (сначала кэш)
registerRoute(
  // проверяем, что цель запроса - изображение
  ({ request }) => request.destination === "image",
  new CacheFirst({
    // помещаем файлы в кэш с названием 'images'
    cacheName: "images",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [STATUS_CODE.OK],
      }),
      // кэшируем до 50 изображений в течение 30 дней
      new ExpirationPlugin({
        maxEntries: IMG_MAX_VALUE_FOR_CACHE,
        maxAgeSeconds: TIMES.SECONDS_IN_MONTH,
      }),
    ],
  })
);

// This allows the web app to trigger skipWaiting via
// registration.waiting.postMessage({type: 'SKIP_WAITING'})
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});