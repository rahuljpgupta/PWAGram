self.addEventListener('install', (event) => {
    console.log('sw install', event);
})

self.addEventListener('activate', (event) => {
    console.log('sw activate', event);
    return self.clients.claim();
})

//fetch is triggred everytime app loads some resource. 
//Doesn't work with Axios, ajax
self.addEventListener('fetch', (event) => {
    console.log('SW fetching sometihng...', event);
    event.respondWith(fetch(event.request));
})