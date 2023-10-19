const URL = "https://6526b95b917d673fd76ce548.mockapi.io/users";

const form = document.getElementById("form-login");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    async function getAllUsers() {
        const response = await fetch(URL);
        const users = await response.json();
        console.log(users)

        // users.forEach(item => {
        //     console.log(item)
        // });

        const userFound = users.find(user => user.email === email && user.password === password);

        if (userFound) {
            alert('Login berhasil');
            window.location.href = "../page/dashboard.html";
        } else {
            alert('Login gagal. Periksa kembali email dan password.');
        }
    }

    getAllUsers();
});