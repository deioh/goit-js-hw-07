import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// ul Gallery
const gallery = document.querySelector(".gallery");

// Loop through gallery items and create a list item for each

galleryItems.forEach((item) => {
  /*  
    let li = `    
    <li class="gallery__item">
    <!-- Gallery item -->
    <a class="gallery__link" href="javascript:void(0);">
      <!-- Link to open the image in lightbox -->
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
      <!-- Image for the gallery -->
    </a>
    <!-- Link container -->
  </li>
    `;
*/
  let li = `
      <li class="gallery__item">
        <a class="gallery__link" href="javascript:void(0)">
          <img
            class="gallery__image"
            src="${item.preview}"        
            alt="${item.description}"
          />
        </a>
      </li>
      `;
  gallery.innerHTML += li;
});

// Event delegation to detect clicks on the image
gallery.onclick = (event) => {
  //console.log("hello");

  // If the target is an image
  if (event.target.tagName === "IMG") {
    // Get the original image source
    let origImage = event.target.getAttribute("data-source");

    // Create a new instance of basicLightbox
    const instance = basicLightbox.create(`
    <img src="${origImage}" width="800" height="600">
    `);
    // Show the image in the lightbox
    instance.show();
  }
};
