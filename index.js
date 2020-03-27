import BulmaNotification from './bulma-notifications.js';

let notif;
let notif1;

window.onload = () => {
    notif = new BulmaNotification();
    document.querySelector('#submit').addEventListener('click', showNotification);
};

// Display a notification
function showNotification(){
    notif.show("Notification Title", "Notification message", "primary", 2000);
}
