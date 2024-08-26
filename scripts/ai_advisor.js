// Basic chatbot script, this can be expanded with AI capabilities
function openChat() {
    // Code to open chat window
    alert("How can I assist you with Prolectronics?");
}

// Example code to attach this function to a button click
document.addEventListener("DOMContentLoaded", function() {
    const chatButton = document.createElement("button");
    chatButton.innerHTML = "Need Help?";
    chatButton.style.position = "fixed";
    chatButton.style.bottom = "10px";
    chatButton.style.right = "10px";
    chatButton.onclick = openChat;
    document.body.appendChild(chatButton);
});
