import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector("[class=gallery]");

function createListGalleryItem(items) {
  return items
    .map(
      (item) => `
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>`
    )
    .join("");
}

const listGalleryItem = createListGalleryItem(galleryItems);
galleryEl.innerHTML = listGalleryItem;

// v2 для тренировки

// function createListGalleryItem(items) {
//   const elements = [];

//   items.map((item) => {
//     const imgEl = document.createElement("img");
//     imgEl.classList.add("gallery__image");
//     imgEl.setAttribute("src", item.preview);
//     imgEl.setAttribute("alt", item.description);

//     elements.push(imgEl);
//   });
//   galleryEl.append(...elements);
// }

galleryEl.addEventListener("click", onClickGalleryItem);

function onClickGalleryItem(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();
}
