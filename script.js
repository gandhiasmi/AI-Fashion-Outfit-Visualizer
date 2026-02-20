
let upload = document.getElementById("upload");
let userImage = document.getElementById("userImage");
let outfitImage = document.getElementById("outfitImage");
let resizeSlider = document.getElementById("resize");
let suggestionText = document.getElementById("suggestion");

upload.addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            userImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

function selectOutfit(element) {
    outfitImage.src = element.src;
    suggestMatch(element.dataset.color);
}

resizeSlider.addEventListener("input", function() {
    outfitImage.style.width = resizeSlider.value + "px";
});

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

function suggestMatch(color) {
    if (color === "red") {
        suggestionText.innerText = "Suggested: Black heels & silver clutch.";
    } else if (color === "blue") {
        suggestionText.innerText = "Suggested: White jeans & sneakers.";
    } else if (color === "black") {
        suggestionText.innerText = "Suggested: Gold accessories & boots.";
    }
}


