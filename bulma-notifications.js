// Initialize the notification structure
document.addEventListener("DOMContentLoaded", () => Note.init());

// Creating the notification
Note = {
    init() {
      this.hideTimeout = null;

      // Creating the notification container div
      this.container = document.createElement("div");
      this.container.className = "notification note";

      // Adding the notification title node
      this.title = document.createElement('p');
      this.title.className = "note-title";
      
      // Adding the notification message content node
      this.message = document.createElement('p');
      this.message.className = "note-content";
      
      // Adding a little button on the notification
      this.closeButton = document.createElement('button');
      this.closeButton.className = "delete";
      this.closeButton.addEventListener('click', closeNotification);
      
      // Appending the container with all the elements newly created
      this.container.appendChild(this.closeButton);
      this.container.appendChild(this.title);
      this.container.appendChild(this.message);

      // Inserting the notification to the page body
      document.body.appendChild(this.container);
    },

    // Showing the notification with given parameters
    show(title, message, state, delay) {
      clearTimeout(this.hideTimeout);
      this.container.classList.add("note-visible");

      // Setting a title to the notification
      if(title!=undefined)
        this.title.textContent = title;
      else
        this.title.textContent = "Notification Title"

      // Setting a message to the notification
      if(message!=undefined)
        this.message.textContent = message;

      // Applying BULMA notification style/theme
      if (state) {
        this.container.classList.add(`is-${state}`);
      }else{
        this.container.classList.add('is-info');
      }

      // Default delay
      if(delay==undefined)
        delay=1500;

      // Waiting a given amout of time  
      if(delay!=-1){
        this.hideTimeout = setTimeout(() => {
          this.container.classList.remove("note-visible");
        }, delay);
      }
    }
};

// Display a notification
function showNotification(){
    Note.show("Notification Title","Created with Bulma-notifications.js","primary",-1);
}

// Close/hide the notification
function closeNotification(){
  Note.container.classList.remove("note-visible");
}