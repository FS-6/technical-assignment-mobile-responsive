const URL = "https://6526b95b917d673fd76ce548.mockapi.io/users";

const form = document.getElementById("form-register");

form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmpassword").value;

    if (password !== confirmPassword) {
        alert("Kata sandi dan konfirmasi kata sandi tidak sesuai.");
        return;
    }

    const newUser = {
        email: email,
        password: password
    };

    try {
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        });

        if (response.ok) {
            alert('Pendaftaran berhasil. Anda dapat login sekarang.');
            window.location.href = "login.html";
        } else {
            alert('Pendaftaran gagal. Coba lagi.');
        }
    } catch (error) {
        console.error("Terjadi kesalahan:", error);
        alert('Terjadi kesalahan saat mendaftar. Coba lagi nanti.');
    }
});
