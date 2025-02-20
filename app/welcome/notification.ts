export const requestNotificationPermission = async () => {
    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
      console.warn("Permission denied");
      return;
    }
  
    const registration = await navigator.serviceWorker.ready;
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: "BOLbW36jelHonTWQ-FEk4s8SydCSauck1y1HIQ6GhrWHEgrONIdDrI-KapqyltyePVlrGGDggSwaqutJBRol-lw", 
    }).catch((error) => {alert(error.message)});
  
    console.log("Push Subscription:", JSON.stringify(subscription));
  
    await fetch("https://pn-back.onrender.com/subscribe", {
      method: "POST",
      body: JSON.stringify(subscription),
      headers: { "Content-Type": "application/json" },
    });
};