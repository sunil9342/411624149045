const input = document.getElementById("messageInput");
const charCount = document.getElementById("charCount");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const status = document.getElementById("status");
const messageSection = document.getElementById("messageSection");

let messages = [];
input.addEventListener("input", () => {
    charCount.textContent =
        "Character Count: " + input.value.length;
});

function displayMessages() {

    const oldMessages =
        messageSection.querySelectorAll(".message");

    oldMessages.forEach(msg => msg.remove());

    messages.forEach((message) => {

        const div = document.createElement("div");
        div.className = "message";
        div.textContent = message;

        messageSection.appendChild(div);
        setTimeout(() => {

            div.remove();

            messages = messages.filter(
                msg => msg !== message
            );

            status.textContent = "Message Expired";

        }, 10000);
    });
}

addBtn.addEventListener("click", () => {

    const message = input.value.trim();

    const promise = new Promise((resolve, reject) => {

        if (message.length >= 3) {
            resolve(message);
        } else {
            reject(
                "Message must contain at least 3 characters"
            );
        }

    });

    promise
        .then((msg) => {

            status.textContent =
                "Message Added Successfully";

            messages.push(msg);

            displayMessages();

            input.value = "";
            charCount.textContent =
                "Character Count: 0";
        })

        .catch((error) => {
            status.textContent = error;
        });
});
clearBtn.addEventListener("click", () => {

    messages = [];

    const allMessages =
        messageSection.querySelectorAll(".message");

    allMessages.forEach(msg => msg.remove());

    status.textContent = "All Messages Cleared";
});