// Selectors
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal__content');
const btnClose = document.querySelector('.modal__btn-close');
const btnYes = document.querySelector('.modal__btn-yes');
const btnNo = document.querySelector('.modal__btn-no');

// Open Modal
openModal(modal);

// Close btn functionality
btnClose.addEventListener('click', () => {
    alert("Nice try, go back!");
});

// No btn functionality - when clicked move it around
btnNo.addEventListener('click', () => {
    let randomInt = getRandomInt(10);
    let offsetTop = 150 + randomInt * 10;
    let offsetLeft = 300 + randomInt * 5;
    btnNo.style.top = `${offsetTop}px`;
    btnNo.style.left = `${offsetLeft}px`;
});

btnYes.addEventListener('click', () => {
    modalContent.innerHTML = renderMessage();

    // Close modal
    const btnCloseModal = document.querySelector('.close-modal');
    btnCloseModal.addEventListener('click', () => {
        closeModal(modal);
    });
});


function renderMessage() {
    return `
        <h1 style="margin-top: 150px;">I knew it!</h1>
        <button data-close-button class="close-modal">
            Close it now dummy!
        </button>
    `;
}

// Generate a random integer
function getRandomInt(max) {
    // Random number from 0 - max
    let randomNum = Math.floor(Math.random() * max);
    // This will make number negative 50% of cases
    randomNum *= Math.round(Math.random()) ? 1 : -1;

    return randomNum;
}

// Opens modal
function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('modal__active');
    overlay.classList.add('overlay__active');
}

// Closes Modal
function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('modal__active');
    overlay.classList.remove('overlay__active');
}
