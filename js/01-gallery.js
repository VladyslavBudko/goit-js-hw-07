import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector("gallery");

const list = document.createElement("ul");
list.classList.add("gallery__list");
console.log(list);

galleryEl.append(list);

function createListGalleryItem(items) {
  return items
    .map(
      (item) => `
  <li class='gallery__item' > 
  ${item.preview} </li>`
    )
    .join("");
}

const listGalleryItem = createListGalleryItem(galleryItems);

// gallery.addEventListener('click', onClickGallery);

// function onClickGallery(event) {
//     if (event.target.nodeName !== "IMG") {
//         return;
//     }
//     console.log(event.target.nodeName);
// }
