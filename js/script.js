// Meminta nama pengguna saat halaman dibuka
const userName = prompt("Siapa nama kamu?");
document.getElementById("user-name").textContent = userName;

// Fungsi untuk menampilkan waktu terkini
function updateCurrentTime() {
    const now = new Date();
    const waktu = now.toLocaleString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    // Update bagian current time
    const currentTimeEl = document.querySelector('#result p:nth-child(1)');
    if (currentTimeEl) {
        currentTimeEl.innerHTML = `<strong>Current time :</strong> ${waktu}`;
    }
}

// Tampilkan waktu saat halaman dibuka
window.onload = updateCurrentTime;

// Tangani pengiriman form
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    updateCurrentTime(); // update current time saat form dikirim

    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value || '-';
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    document.getElementById("result").innerHTML = `
        <p><strong>Current time :</strong> ${new Date().toLocaleString('id-ID')}</p>
        <p><strong>Nama :</strong> ${name}</p>
        <p><strong>Tanggal Lahir :</strong> ${dob}</p>
        <p><strong>Jenis Kelamin :</strong> ${gender}</p>
        <p><strong>Telepon :</strong> ${phone}</p>
        <p><strong>Pesan :</strong> ${message}</p>
    `;
});
