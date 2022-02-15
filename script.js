var body = document.getElementsByTagName('body')[0];


function addH1 () {
  // let body = document.getElementsByTagName('body')[0];
  let elementH1 = document.createElement('h1');
  elementH1.id = 'title';
  elementH1.innerText = 'Paleta de Cores';
  body.appendChild(elementH1);
}
addH1();
// exercicio 2
function addPaleta () {
  let sectionOne = document.createElement('section');
  sectionOne.id = 'color-palette';
  sectionOne.style.width = '600px';
  sectionOne.style.height = '600px';
  body.appendChild(sectionOne);
  
}
addPaleta()

function addPAletas () {
  let cores = ['black','red','green','yellow'];
  let sectionOne = document.querySelector('#color-palette');
  sectionOne.style.height = '200px';
  for (let index = 0 ; index < 4; index +=1) {
    let div = document.createElement('div');
    if (cores[index] === "black"){
      div.className = "color selected"
    }else {
      div.className = "color";
    }
    div.style.backgroundColor = cores[index];
    div.style.width = '40px';
    div.style.height = '40px';
    div.style.display = 'inline-block';
    div.style.border = 'solid black';
    div.style.borderWidth = '1px';
    div.style.width = '100px';
    div.style.height = '100px';
    
    sectionOne.appendChild(div);
  }
}
addPAletas()

function addQuadroPixels () {
  let sectiontwo = document.createElement('section');
  sectiontwo.id ='pixel-board';
  body.appendChild(sectiontwo)
  for (let index = 0; index < 5; index+=1) {
    let divline = document.createElement('div');
    divline.style.display = 'block';
    divline.style.width = "800px"
    sectiontwo.appendChild(divline);
    
    for (let index = 0; index < 5; index++) {
      let divblock = document.createElement ('div');
      divblock.className = 'pixel';
      divblock.style.display = "inline-block";
      divblock.style.width = '40px';
      divblock.style.height = '40px';
      divblock.style.backgroundColor = 'white';
      divblock.style.border  = 'solid black';
      divblock.style.borderWidth =  '1px'
      divline.appendChild(divblock);
    }
    // let tagBr = document.createElement('br');
    // sectiontwo.appendChild(tagBr);
  }
}
addQuadroPixels()


function selectedPaleta ()  {
  let listPaleta = document.getElementsByClassName('color')
  for (let index = 0; index < listPaleta.length; index+=1) {
    listPaleta[index].addEventListener('click', function  (event)  {
      for (let index = 0; index < listPaleta.length; index+=1) {
        listPaleta[index].className = "color";
      }
      event.target.className = 'color selected';
    })
    
  }
}
selectedPaleta ();

function ColorirPixel ()  {
  let pixelBox = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixelBox.length; index+=1) {
    pixelBox[index].addEventListener('click', function  (event)  {
      event.target.style.backgroundColor =  document.getElementsByClassName('selected')[0].style.backgroundColor
    })
  }
}
ColorirPixel()