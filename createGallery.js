// modal needs to open
// open on click
// close
// close on x button, close on overlay click

// const modal = document.querySelectorAll(".modal");
// const openModal = document.querySelectorAll(".open-modal");
// const closeModal = document.querySelectorAll(".close-modal");
// const overlay = document.querySelectorAll(".overlay");

export default function createModal() {
  document.querySelector("body").insertAdjacentHTML(
    "beforeend",
    `
    <div class="modal-container" aria-modal="true" role="dialog" hidden="true">
      <div class="modal">
        <div class="modal__overlay">
          <div class="modal__button-container">
            <button class="modal__btn modal__arrow modal__arrow-left" id="left" aria-label="Previous Image">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.25 8.75L9.75 12L13.25 15.25"/>
              </svg>                
            </button>
            <button class="modal__btn modal__close" aria-label="Close Gallery">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 6.75L6.75 17.25"></path>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 6.75L17.25 17.25"></path>
              </svg>         
            </button>
            <button class="modal__btn modal__arrow modal__arrow-right" id="right" aria-label="Next Image">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.75 8.75L14.25 12L10.75 15.25"></path>
              </svg>               
            </button>
          </div>
          <div class="modal__indicator-container">
            <button class="modal__indicator active"></button>
            <button class="modal__indicator"></button>
            <button class="modal__indicator"></button>
            <button class="modal__indicator"></button>
          </div>
        </div>
        <div class="modal__image-container">
        <img src="/img/Boats After//Sea Ray/9.jpg" alt="Boat" class="modal__image"/>
        <img src="/img/Boats After//Sea Ray/8.jpg" alt="Boat" class="modal__image"/>
        <img src="/img/Boats After//Sea Ray/7.jpg" alt="Boat" class="modal__image"/>
        <img src="/img/Boats After//Sea Ray/6.jpg" alt="Boat" class="modal__image"/>
        <img src="/img/Boats After//Sea Ray/5.jpg" alt="Boat" class="modal__image"/>
        </div>
      </div>
    </div>
    `
  )
}

// come back and shorten code in closeModal and Overlay event listeners by creating closeModal Function
// figure out why the modal wont open
