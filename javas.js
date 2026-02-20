let upload = document.getElementById("upload");
let userImage = document.getElementById("userImage");
let outfitImage = document.getElementById("outfitImage");
let resizeSlider = document.getElementById("resize");
let suggestionText = document.getElementById("suggestion");


// Upload user image
upload.addEventListener("change", function(e) {
    let reader = new FileReader();
    reader.onload = function() {
        userImage.src = reader.result;
    }
    reader.readAsDataURL(e.target.files[0]);
});


// Select outfit
function selectOutfit(element) {
    outfitImage.src = element.src;
    suggestMatch(element.dataset.color);
}


// Resize outfit
resizeSlider.addEventListener("input", function() {
    outfitImage.style.width = resizeSlider.value + "px";
});


// Drag functionality
let isDragging = false;
let offsetX, offsetY;

outfitImage.addEventListener("mousedown", function(e) {
    isDragging = true;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
});

document.addEventListener("mousemove", function(e) {
    if (isDragging) {
        let containerRect = document.getElementById("previewContainer").getBoundingClientRect();
        outfitImage.style.left = (e.clientX - containerRect.left - offsetX) + "px";
        outfitImage.style.top = (e.clientY - containerRect.top - offsetY) + "px";
    }
});

document.addEventListener("mouseup", function() {
    isDragging = false;
});


// AI-style suggestion logic
function suggestMatch(color) {
    if (color === "red") {
        suggestionText.innerText = "Suggested: Black heels & silver clutch.";
    } else if (color === "blue") {
        suggestionText.innerText = "Suggested: White jeans & sneakers.";
    } else if (color === "black") {
        suggestionText.innerText = "Suggested: Gold accessories & boots.";
    }
}


// Download final image
function downloadImage() {
    html2canvas(document.querySelector("#previewContainer")).then(canvas => {
        let link = document.createElement("a");
        link.download = "virtual-look.png";
        link.href = canvas.toDataURL();
        link.click();
    });
}