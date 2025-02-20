// self.addEventListener("push", (event) => {
//     const data = event.data ? event.data.json() : {};
//     console.log(data);
//     self.registration.showNotification(data.title, {
//       body: data.body,
//       icon: "/icon.png",
//       badge: "/icon.png",
//       vibrate: [200, 100, 200, 100, 200, 100, 200],
//       data: {
//         url: JSON.parse(event.message).url
//       }
//     });
//   });
self.addEventListener('push', (event) => {
  const data = event.data.json();
  const title = data.title;
  const options = {
    body: data.body,
    icon: "/icon.png",
    badge: "/icon.png",
    vibrate: [200, 100, 200, 100, 200, 100, 200],
    data: {
      url: data?.url
    }
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  const url = event.notification.data.url;

  event.waitUntil(
    clients.matchAll({ type: 'window' }).then((clientList) => {
      const client = clientList.find((client) => client.url === url && 'focus' in client);
      if (client) {
        client.focus();
      } else {
        clients.openWindow(url);
      }
    })
  );
});