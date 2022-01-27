let chatWidget = document.querySelector(".chat-widget");
let chatWidgetInput = document.querySelector("#chat-widget__input");
const messages = document.querySelector(".chat-widget__messages");

chatWidget.onclick = () => {
  chatWidget.classList.add("chat-widget_active");
};

chatWidget.addEventListener("keydown", (event) => {
  if (event.key == "Enter" && chatWidgetInput.value != "") {
    messages.innerHTML += `
        <div class="message">
            <div class="message__time">09:21</div>
            <div class="message__text">${chatWidgetInput.value}</div>
        </div>
        `;
  }
});
