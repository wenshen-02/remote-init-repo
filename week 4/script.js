function transformUpperCase() {
    let a = document.getElementaryById("namaPengguna");
    a.value = a.value.toUpperCase
}

let elUsername = document.getElementById("namapengguna");
elUsername.addEventListener("keyup", transformUpperCase);
