function toggleMateri(id) {
    const materi = document.getElementById("materi" + id);

    if (materi.style.display === "block") {
        materi.style.display = "none";
    } else {
        materi.style.display = "block";
    }
}
