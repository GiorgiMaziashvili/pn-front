export const registerServiceWorker = async () => {
    if ("serviceWorker" in navigator) {
        try {
            const registration = await navigator.serviceWorker.register("/sw.js");
            console.log("Service Worker Registered:", registration);
        } catch (err) {
            console.error("Service Worker Registration Failed", err);
        }
    }
};