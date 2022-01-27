let chatWidget = document.querySelector(".chat-widget");
let chatWidgetInput = document.querySelector("#chat-widget__input");
const messages = document.querySelector(".chat-widget__messages");

chatWidget.onclick = () => {
  chatWidget.classList.add("chat-widget_active");
};

chatWidget.addEventListener("keydown", (event) => {
  if (event.key == "Enter" && chatWidgetInput.value != "") {
    messages.innerHTML += `
        <div class="message_client">
            <div class="message__time">${timestamp()}</div>
            <div class="message__text">${chatWidgetInput.value}</div>
        </div>
        `;
    messages.innerHTML += `
        <div class="message">
            <div class="message__time">${timestamp()}</div>
            <div class="message__text">${botMessages[Math.floor(Math.random()*botMessages.length)]}</div>
        </div>`
  }
});

const timestamp = () => {
    let now = new Date()
    return now.getHours() + ":" + now.getMinutes()
}

let botMessages = [
    "Добрейшего вечера!",
    "Ваш звонок очень важен для нас",
    "Прекрасная погода",
    "Я не должен бояться, страх это маленькая смерть",
]