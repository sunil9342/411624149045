const fetchBtn = document.getElementById("fetchBtn");
const status = document.getElementById("status");
const usersDiv = document.getElementById("users");

fetchBtn.addEventListener("click", () => {

    status.textContent = "Loading...";
    usersDiv.innerHTML = "";

    setTimeout(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => {

                users.forEach(user => {

                    const card = document.createElement("div");
                    card.classList.add("user-card");

                    card.innerHTML = `
                        <h3>${user.name}</h3>
                        <p><strong>Email:</strong> ${user.email}</p>
                        <p><strong>Phone:</strong> ${user.phone}</p>
                    `;

                    usersDiv.appendChild(card);
                });

                status.textContent = "Loaded successfully";
            })
            .catch(error => {
                status.textContent = "Error loading data";
                console.error(error);
            });

    }, 2000);

});