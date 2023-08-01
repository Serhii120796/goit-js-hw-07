import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', onClick);

gallery.insertAdjacentHTML('beforeend', createMarcup(galleryItems));

function createMarcup(arr) {
return arr.map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image"
              src="${preview}" 
              data-source="${original}"
              alt="${description}"/>
        </a>
       </li>`,
  )
  .join('');
}

function onClick(evt) {
if (evt.target === evt.currentTarget) {
    return;
}
  
  evt.preventDefault();

  const currentLink = evt.target.closest('.gallery__link');
  
  const modalWindow = basicLightbox.create(`
    <img src="${currentLink.href}" width="800" height="600">
`)
  modalWindow.show()
  
 document.addEventListener('keydown', closeModalWindow);

  function closeModalWindow(evt) {
  if (evt.code === "Escape") {
    modalWindow.close();
    }
  }
}
  
 
