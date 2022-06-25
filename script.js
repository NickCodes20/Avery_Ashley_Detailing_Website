// modal needs to open
// open on click
// close
// close on x button, close on overlay click

// const modal = document.querySelectorAll(".modal");
// const openModal = document.querySelectorAll(".open-modal");
// const closeModal = document.querySelectorAll(".close-modal");
// const overlay = document.querySelectorAll(".overlay");

import createModal from "./createGallery.js"
createModal()

class Modal {
  constructor(modal) {
    this.modal = modal
    this.attachEventListeners()
  }

  openModal() {
    this.modal.removeAttribute("hidden")
    this.modal.classList.add("active")
  }

  closeModal() {
    this.modal.setAttribute("hidden", "true")
    this.modal.classList.remove("active")
  }

  attachEventListeners() {
    this.modal.addEventListener("click", (e) => {
      e.target === e.currentTarget ||
      e.target.classList.container("modal__close")
        ? this.closeModal()
        : null
    })
  }
}
const modalContainer = document.querySelector(".modal-container")
const modal = new Modal(modalContainer)

// console.log(modal);

// event listeners
function openImageGalleryEventListeners() {
  document.querySelectorAll('[data-modal="true"]').forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.openModal()
    })
  })
}
openImageGalleryEventListeners()
// not working, troubleshoot
