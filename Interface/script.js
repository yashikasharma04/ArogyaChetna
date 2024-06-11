const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("img-view");

inputFile.addEventListener("change", uploadImage);

function uploadImage() {
    let imgLink = URL.createObjectURL(inputFile.files[0]);
    imageView.style.backgroundImage = `url(${imgLink})`;  // Corrected this line
    imageView.textContent = "";
    imageView.style.border = "none";
}

dropArea.addEventListener("dragover", function(e) {  // Corrected this line
    e.preventDefault();
});

dropArea.addEventListener("drop", function(e) {
    e.preventDefault();
    inputFile.files = e.dataTransfer.files;
    uploadImage();
});