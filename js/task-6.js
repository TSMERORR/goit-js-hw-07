function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function createBoxes(amount) {
  if (amount < 1 || amount > 100) {
    return;
  }

  const fragment = document.createDocumentFragment(); 

  let size = 30;
  const boxes = []; 

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = size + 'px';
    box.style.height = size + 'px';
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box); 
    size += 10;
  }

  boxes.forEach(box => fragment.appendChild(box));

  boxesContainer.appendChild(fragment); 
  input.value = '';
}

createButton.addEventListener('click', function() {
  const amount = Number(input.value);
  destroyBoxes(); 
  createBoxes(amount); 
});

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
destroyButton.addEventListener('click', destroyBoxes);
