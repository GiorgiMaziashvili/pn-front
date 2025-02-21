export const registerServiceWorker = async () => {
    if ("serviceWorker" in navigator) {
        try {
            const registration = await navigator.serviceWorker.register("/sw.js");
            console.log("Service Worker Registered:", registration);
        } catch (err) {
            console.error("Service Worker Registration Failed", err);
            alert("error")
        }
    }
};





    // if ("vibrate" in navigator) {
    //     navigator.vibrate([200, 100, 200, 100, 200, 100, 200]); 
    // }

    // const permission = await Notification.requestPermission();
    // if (permission !== "granted") {
    //   console.warn("Permission denied");
    //   return;
    // }
  
    // const registration = await navigator.serviceWorker.ready;
    // const subscription = await registration.pushManager.subscribe({
    //   userVisibleOnly: true,
    //   applicationServerKey: "BOLbW36jelHonTWQ-FEk4s8SydCSauck1y1HIQ6GhrWHEgrONIdDrI-KapqyltyePVlrGGDggSwaqutJBRol-lw", 
    // }).catch((error) => {alert(error.message)});
  
    // // await fetch("https://pn-back.onrender.com/subscribe", {
    // //   method: "POST",
    // //   body: JSON.stringify(subscription),
    // //   headers: { "Content-Type": "application/json" },
    // // });
  
    // await fetch("http://localhost:4000/subscribe", {
    //   method: "POST",
    //   body: JSON.stringify(subscription),
    //   headers: { "Content-Type": "application/json" },
    // });