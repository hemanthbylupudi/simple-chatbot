let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];
let chatContainer = document.getElementById("chatContainer");
let userInput = document.getElementById("userInput");
let sendMsgBtn = document.getElementById("sendMsgBtn");

function sendMsg() {
    let userInputValue = userInput.value;

    let messageContainer1 = document.createElement("div");
    messageContainer1.classList.add("msg-to-chatbot-container");
    chatContainer.appendChild(messageContainer1);

    let msg1 = document.createElement("span");
    msg1.classList.add("msg-to-chatbot");
    msg1.textContent = userInputValue;
    messageContainer1.appendChild(msg1);
    getReply()
    userInput.value = "";
}

function getReply() {
    let length = chatbotMsgList.length;
    let reply = chatbotMsgList[Math.ceil(Math.random() * length) - 1]

    let messageContainer2 = document.createElement("div");
    messageContainer2.classList.add("msg-from-chatbot-container");
    chatContainer.appendChild(messageContainer2);

    let msg2 = document.createElement("span");
    msg2.classList.add("msg-from-chatbot");
    msg2.textContent = reply;
    messageContainer2.appendChild(msg2);
}
sendMsgBtn.onclick = function() {
    sendMsg()
}