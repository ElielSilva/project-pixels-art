// const inputBoardSize = document.getElementById('board-size').value;
const pixelBoard = document.getElementById('pixel-board');
const butaoLimpar = document.getElementById('generate-board');
const colorSelector = document.querySelector('#color-palette');
const cores = ['black', 'red', 'green', 'yellow'];

function generateColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function addPAletas() {
  colorSelector.style.height = '200px';
  for (let index = 0; index < 4; index += 1) {
    const div = document.createElement('div');
    div.className = index === 0 ? 'color selected' : 'color';
    div.style.backgroundColor = index === 0 ? 'black' : generateColor();
    div.style.width = '40px';
    div.style.height = '40px';
    div.style.display = 'inline-block';
    div.style.border = 'solid black';
    div.style.borderWidth = '1px';
    div.style.width = '100px';
    div.style.height = '100px';
    colorSelector.appendChild(div);
  }
}

function clearButton() {
  const button = document.getElementById('clear-board');
  button.addEventListener('click', () => {
    const pixelBox = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixelBox.length; index += 1) {
      pixelBox[index].style.backgroundColor = 'white';
    }
  });
}
// createButton()

function addQuadroPixels() {
  const sectiontwo = document.getElementById('pixel-board');
  for (let index = 0; index < 5; index += 1) {
    const divline = document.createElement('div');
    divline.style.display = 'block';
    divline.style.width = 'auto';
    divline.className = 'line-pixel';
    sectiontwo.appendChild(divline);
    for (let index = 0; index < 5; index++) {
      const divblock = document.createElement('div');
      divblock.className = 'pixel';
      divline.appendChild(divblock);
    }
  }
}
// addQuadroPixels()

function selectedPaleta() {
  const listPaleta = document.getElementsByClassName('color');
  for (let index = 0; index < listPaleta.length; index += 1) {
    listPaleta[index].addEventListener('click', (event) => {
      // console.log("foi")
      for (let index = 0; index < listPaleta.length; index += 1) {
        listPaleta[index].className = 'color';
      }
      event.target.className = 'color selected';
    });
  }
}
// selectedPaleta();

function ColorirPixel() {
  const pixelBox = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixelBox.length; index += 1) {
    pixelBox[index].addEventListener('click', (event) => {
      event.target.style.backgroundColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
    });
  }
}

function createStringPixel(qtd) {
  const tamanho = (500 / qtd) - 2;
  return tamanho.toString() + 'px';
}

function createQuadroPixelsN(qtd) {
  for (let index = 0; index < qtd; index++) {
    const divline = document.createElement('div');
    divline.style.display = 'block';
    divline.style.width = 'auto';
    divline.style.height = createStringPixel(qtd);
    divline.className = 'line-pixel';
    console.log(createStringPixel(qtd));
    pixelBoard.appendChild(divline);
    for (let indexSecond = 0; indexSecond < qtd; indexSecond++) {
      const divblock = document.createElement('div');
      divblock.className = 'pixel';
      divblock.style.display = 'inline-block';
      divblock.style.width = createStringPixel(qtd);
      divblock.style.height = createStringPixel(qtd);
      divblock.style.backgroundColor = 'white';
      divblock.style.border = 'solid black 1px';
      divline.appendChild(divblock);
    }
  }
}

butaoLimpar.addEventListener('click', () => {
  const boardSize = document.getElementById('board-size').value;
  console.log(document.getElementById('board-size').value);
  if (boardSize === '') {
    alert('Board inválido!');
    return;
  }
  let numberPixel = parseInt(boardSize, 10);
  if (numberPixel < 5) {
    numberPixel = 5;
  } else if (numberPixel > 50) {
    numberPixel = 50;
  }
  pixelBoard.innerHTML = '';
  createQuadroPixelsN(numberPixel);
  ColorirPixel();
});

window.onload = () => {
  addPAletas();
  // addQuadroPixels();
  createQuadroPixelsN(5);
  selectedPaleta();
  ColorirPixel();
  clearButton();
};
