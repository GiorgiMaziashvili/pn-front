export const requestNotificationPermission = async () => {
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
};

export class PushSystemClass {
  registerWorker = async () => {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      await navigator.serviceWorker.register("/sw.js").then(async (register) => {
        console.log("Service Worker registered:", register);
       
        this.requestPermission(register);
      }).catch(err => {
        console.error("Service Worker registration failed:", err);
      });
    }
  }

  requestPermission = async (register:ServiceWorkerRegistration) =>{
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      await navigator.serviceWorker.ready;
      console.log("Notification permission granted.");
      this.subscribe(register);
    } else {
      console.warn("Notification permission denied.");
    }
  }

  subscribe = async (register:ServiceWorkerRegistration) =>{
    try {
      
      const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: "BOLbW36jelHonTWQ-FEk4s8SydCSauck1y1HIQ6GhrWHEgrONIdDrI-KapqyltyePVlrGGDggSwaqutJBRol-lw" 
      });
  
      console.log("Push Subscription:", JSON.stringify(subscription));
  
      await fetch("https://pn-back.onrender.com/subscribe", {
        method: "POST",
        body: JSON.stringify(subscription),
        headers: { "Content-Type": "application/json" },
      });
  
    } catch (error) {
      console.error("Push subscription failed:", error);
    }
  }
}

export const pushSystem = new PushSystemClass();