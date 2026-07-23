self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("basketboard").then(cache => {
      return cache.addAll([
        "index.html",
        "manifest.json",
        "service-worker.js",
        "campo_fiba.png",
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
});
