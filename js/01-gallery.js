import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector("[class=gallery]");

function createListGalleryItem(items) {
  return items.map( item => `
  <img class='gallery__item'
  src = "${item.preview}"
  alt = "${item.description}"
  width = 340px
   />`
    )
    .join("");
}

const listGalleryItem = createListGalleryItem(galleryItems);
galleryEl.innerHTML = listGalleryItem;

// v2

// function createListGalleryItem(items) {
//   const elements = [];

//   items.map((item) => {
//     const imgEl = document.createElement("img");
//     imgEl.classList.add("gallery__item");

//     imgEl.setAttribute("src", item.preview);
//     imgEl.setAttribute("alt", item.description);

//     elements.push(imgEl);
//   });

//   galleryEl.append(...elements);
// }
