//on install - the application shell cached
self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open('sw-cache').then(function(cache){
            //Static files that make up the application shell are cached 
            return cache.addAll([
                '/app/index.html',
                '/app/category.html',
                '/app/cart.html',
                '/app/product.html',
                '/app/products.html',
                '/app/productsection.html',
                '/app/build.html',
                '/app/maintenance.html',
                '/app/style.css',
                '/app/loader.css',
                '/app/cache-260eb.css',
                '/app/cache-3006b.css',
                '/app/cache-2edd85.css',
                '/app/cache-rabbit-module.css',
                '/app/cache-rabbit.css',
                '/app/cache-tile.css',
                '/app/fontawesome-all.min.css',
                '/app/cache-bootstrap.css',
                '/app/cache-tile.css',
                '/app/bootstrap.js',
                '/app/custom.js',
                '/app/webfonts/fa-brands-400.woff2',
                '/app/webfonts/fa-solid-900.woff2',
                '/app/Images/'
              ]);
            
        })
    )
})

//with request network
self.addEventListener('fetch', function(event){
 event.respondWith(
     //Try the cache
     caches.match(event.request).then(function(response){
         // return it if there is a response, or else fetch again
         return response || fetch (event.request)
     })
 )
})