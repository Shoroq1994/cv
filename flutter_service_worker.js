'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "493da99ef4064f27a181bdccf6479a67",
"assets/assets/images/bella/0.png": "0a44675ea1a5824cbaae6f1f34afba9f",
"assets/assets/images/bella/1.jfif": "71a2914d136e20d49651bc85b5a31008",
"assets/assets/images/bella/2.jfif": "475e417c1fa1704d1b10210532713865",
"assets/assets/images/bella/3.jfif": "f42cd11016a613f2585a90f27efd25b6",
"assets/assets/images/contact.png": "2cb1267bfb2dc6f2dcd2d9a510a01727",
"assets/assets/images/dana/0.jpeg": "a4fb617ebf877dcba5512280844e73e6",
"assets/assets/images/dana/1.jfif": "6b06b75a2b0a35f3b99a7649894dfd74",
"assets/assets/images/dana/10.jfif": "38f60d31e77d30f98cdffea8064c867b",
"assets/assets/images/dana/11.jfif": "bc0a457fc261d90cb78bdbb8a539c837",
"assets/assets/images/dana/12.jfif": "7ab266f1e735264ce40cfa93c138ed2a",
"assets/assets/images/dana/13.jfif": "790a6f7ea8e8c1950ca744502a06318d",
"assets/assets/images/dana/14.jfif": "c914a4f33c3d5a18c6ce535eb39d7228",
"assets/assets/images/dana/15.jfif": "dd45ea668ad0aec0d6113986e1f70f17",
"assets/assets/images/dana/2.jfif": "abe5a5377bc1df2a85c08ac863521d99",
"assets/assets/images/dana/3.jfif": "a665a92b9a96d8c783bf5d7176a08eea",
"assets/assets/images/dana/4.jfif": "e6de36badfa1dad43b95f4dee763ea18",
"assets/assets/images/dana/5.jfif": "3d5a6feb038a59e4bcb7f70dd12ad82a",
"assets/assets/images/dana/6.jfif": "b588e49d302145b73226f1a7768a7afd",
"assets/assets/images/dana/7.jfif": "225facc77cbe39d2cdfb576ae61ed116",
"assets/assets/images/dana/8.jfif": "c2146f8236e3b0ee2fb11c7771f6fa0b",
"assets/assets/images/dana/9.jfif": "c4b66d8ff9d70f1b33caac27f3547cff",
"assets/assets/images/experience.png": "655ac4d3705f6cecd2e30255eb197943",
"assets/assets/images/jerry/0.png": "4d376f4b868fc5297d1b94375ae7a4ba",
"assets/assets/images/jerry/1.jpg": "a17ce43cf4a6241b28710ac608de8fb3",
"assets/assets/images/jerry/10.jpg": "2df6b002fe68a72d1715a83e88e6d9dd",
"assets/assets/images/jerry/11.jpg": "4c063e49049a73aaeb26c59a58f16f92",
"assets/assets/images/jerry/12.jpg": "6d91ae976643480f8fa04a328118a4a7",
"assets/assets/images/jerry/13.jpg": "0a44b13765b162b30e8fcbf162b724a6",
"assets/assets/images/jerry/14.jpg": "7533df8daf0859b453152ae820a470b7",
"assets/assets/images/jerry/15.jpg": "608ec68ebf1c5cb2f28bdd8d1e363f90",
"assets/assets/images/jerry/16.jpg": "b9445287f170ea6dd5edfba1fbf61821",
"assets/assets/images/jerry/17.jpg": "fb7062c0ce7db7ce5e32d803fb994c24",
"assets/assets/images/jerry/18.jpg": "b3d999b6068fdd7228b9a092864bf593",
"assets/assets/images/jerry/2.jpg": "7dfdef97991147df44eac3a770b3307a",
"assets/assets/images/jerry/3.jpg": "622c29aff2c3d652e065347be5b4ec3b",
"assets/assets/images/jerry/4.jpg": "438c3b48d7e847b42ce992cd127703e2",
"assets/assets/images/jerry/5.jpg": "a6253488e7569ac470c2373b4ebb7ec5",
"assets/assets/images/jerry/6.jpg": "3845b6ec27d643876ef0bb42d5131d52",
"assets/assets/images/jerry/7.jpg": "bd30143f8613ba3574908477caf3304e",
"assets/assets/images/jerry/8.jpg": "47d35f334c3cddcccc8d6aff7f12d182",
"assets/assets/images/jerry/9.jpg": "4cac13a73c0eaebe22d21580af769f23",
"assets/assets/images/portfolio.png": "9d9d90a0c88a97b1da80176ec0e5ce8e",
"assets/assets/images/profile.jpeg": "a1f7d46d57f199fe5b46cda92e16456d",
"assets/assets/images/salmyia.jpg": "ade8a90f5fd74b21c5bae4ffb462ee3a",
"assets/assets/images/university.jpg": "1b4a5acb88b2274eab8301b41f6ca9ed",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "610810437dccabaf6bebd4404ccac9fa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "f00de1f742223b7cf4cec1c2a0cd9764",
"canvaskit/canvaskit.wasm": "efe4a5da0205bb8d8c5aca7dad981abd",
"canvaskit/profiling/canvaskit.js": "411ee45f5abb57975ee5243310c6953e",
"canvaskit/profiling/canvaskit.wasm": "c6681b1a749ad902eefcba11fed1cb3f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9e531722da577270c5ba85e13fc95995",
"/": "9e531722da577270c5ba85e13fc95995",
"main.dart.js": "07864d804c11d64468f30e5304abb5c4",
"manifest.json": "3f5cc1422384871cb04bfcbe05618047",
"version.json": "753a77ab84c26f016b75729c469df551"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
