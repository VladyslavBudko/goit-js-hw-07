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

galleryEl.addEventListener("click", onClickGalleryItem);

function onClickGalleryItem(event) {
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  event.preventDefault();
//   console.log(event.target);

  showModalImg(event.target);
}
//   Modal from "basiclightbox";

function showModalImg(eventTarget) {
  const instance = basicLightbox.create(`
    <img src="${eventTarget.dataset.source}" >
`);

  instance.show();

}

