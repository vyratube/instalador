/* VyraTube no celular: so existe para o celular deixar "instalar" a pagina.
   Nada fica guardado: tudo vem da internet na hora (o andamento muda a cada segundo). */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
