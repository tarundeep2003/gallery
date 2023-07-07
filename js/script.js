// JavaScript Object for each gallery item
const jbl = [
  {
    full: "images/flowers-pink-large.jpg",
    thumbnail: "images/flowers-pink-small.jpg",
    caption: "Sunflowers in the Dernekamp hamlet, Kirchspiel, Dülmen, North Rhine-Westphalia, Germany",
  },
  {
    full: "images/flowers-purple-large.jpg",
    thumbnail: "images/flowers-purple-small.jpg",
    caption: "Poppies in cornfield, Dülmen, North Rhine-Westphalia, Germany",
  },
  {
    full: "images/flowers-red-large.jpg",
    thumbnail: "images/flowers-red-small.jpg",
    caption: "Daffodils in Sentmaring park, Münster, North Rhine-Westphalia, Germany",
  },
  {
    full: "images/flowers-white-large.jpg",
    thumbnail: "images/flowers-white-small.jpg",
    caption: "Sentmaring Park, Münster, North Rhine-Westphalia, Germany",
  },
  {
    full: "images/flowers-yellow-large.jpg",
    thumbnail: "images/flowers-yellow-small.jpg",
    caption: "Flower stall at the market in Münster, North Rhine-Westphalia, Germany",
  },
];

// Function to display the full-sized image and caption
function showImg(index) {
  const featuredImage = document.getElementById("featured");
  const caption = document.getElementById("caption");
  featuredImage.src = jbl[index].full;
  caption.textContent = jbl[index].caption;
}

// Function to handle thumbnail click events
function handleThumbnailClick(event) {
  if (event.target.tagName === "IMG") {
    const thumbnailIndex = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);
    showImg(thumbnailIndex);
  }
}

// Dynamically build the thumbnail list from the jbl array
function ninja() {
  const thumbnailList = document.getElementById("thumbnail-list");
  thumbnailList.innerHTML = "";
  for (let i = 0; i < jbl.length; i++) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = jbl[i].thumbnail;
    img.alt = "Thumbnail " + (i + 1);
    li.appendChild(img);
    thumbnailList.appendChild(li);
  }
}

// Initial setup
document.addEventListener("DOMContentLoaded", function () {
  ninja();

  const thumbnailList = document.getElementById("thumbnail-list");
  thumbnailList.addEventListener("click", handleThumbnailClick);
});
