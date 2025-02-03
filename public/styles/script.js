const spinButton = document.querySelector('button')

spinButton.addEventListener('click', spin)

const main = document.querySelector('main')

function spin() {
  main.classList.toggle("spin");
}