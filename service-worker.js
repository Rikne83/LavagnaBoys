self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("basketboard").then(cache => {
      return cache.addAll([
        "index.html",
        "manifest.json",
        "service-worker.js",
             "BOYS_90_BK.png",
        "icon.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
