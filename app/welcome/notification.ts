// export const requestNotificationPermission = async () => {
//     if ("vibrate" in navigator) {
//         navigator.vibrate([200, 100, 200, 100, 200, 100, 200]); 
//     }

//     const permission = await Notification.requestPermission();
//     if (permission !== "granted") {
//       console.warn("Permission denied");
//       return;
//     }
  
//     const registration = await navigator.serviceWorker.ready;
//     const subscription = await registration.pushManager.subscribe({
//       userVisibleOnly: true,
//       applicationServerKey: "BOLbW36jelHonTWQ-FEk4s8SydCSauck1y1HIQ6GhrWHEgrONIdDrI-KapqyltyePVlrGGDggSwaqutJBRol-lw", 
//     }).catch((error) => {alert(error.message)});
  
//     // await fetch("https://pn-back.onrender.com/subscribe", {
//     //   method: "POST",
//     //   body: JSON.stringify(subscription),
//     //   headers: { "Content-Type": "application/json" },
//     // });
  
//     await fetch("http://localhost:4000/subscribe", {
//       method: "POST",
//       body: JSON.stringify(subscription),
//       headers: { "Content-Type": "application/json" },
//     });
// };


export const requestNotificationPermission = () => {
    if (!("Notification" in window)) {
    // Check if the browser supports notifications
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    // Check whether notification permissions have already been granted;
    // if so, create a notification
    const notification = new Notification("Hi there!");
    alert('granted');
    // …
  } else if (Notification.permission !== "denied") {
    // We need to ask the user for permission
    Notification.requestPermission().then((permission) => {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        const notification = new Notification("Hi there!");
        // …
      }
    });
  
    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them anymore.
  }
  
}

// export const requestNotificationPermission = async () => {
//   alert(JSON.stringify(ServiceWorker))
//   await Notification.requestPermission().then((perm) => {
//       if(perm === 'granted') {
//           const notification = new Notification('Turn on', {
//               body: 'Turn on the service worker to get the best experience',
//               icon: 'dsa'
//           })

//           notification.addEventListener('show',()=> {
//             if ("vibrate" in navigator) {
//               navigator.vibrate([200, 100, 200, 100, 200, 100, 200]); 
//             }
//           })
//       }
//   })
// }