// REFATORANDO
function addPAletas () {
  //  onde achei https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
  function gerar_cor(opacidade = 1) {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    
    return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
  }
  let cores = ['black',gerar_cor(),gerar_cor(),gerar_cor()];
  let sectionOne = document.querySelectorAll('.color');
  for (let index = 0 ; index < 4; index +=1) {
    if (cores[index] === "black"){
      sectionOne[index].className = "color selected"
    }
    sectionOne[index].style.backgroundColor = cores[index];
  }
}addPAletas()

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

function addQuadroPixels () {
  let sectiontwo = document.getElementById('pixel-board')
  for (let index = 0; index < 5; index+=1) {
    let divline = document.createElement('div');
    divline.style.display = 'block';
    sectiontwo.appendChild(divline);
    
    for (let index = 0; index < 5; index++) {
      let divblock = document.createElement ('div');
      divblock.className = 'pixel';
      divblock.style.display = "inline-block";
      divblock.style.width = '40px';
      divblock.style.height = '40px';
      divblock.style.backgroundColor = 'white';
      divblock.style.border  = 'solid black';
      divblock.style.borderWidth =  '1px';
      divline.appendChild(divblock);
    }
  }
}
addQuadroPixels()

ColorirPixel()



function createQuadroPixelsN () {
  let section  = document.getElementById('pixel-board');
  let button = document.getElementById('generate-board')

  button.addEventListener('click',  function  ()  {

    let numberPixel =(document.querySelector('#board-size').value);
    
    if (numberPixel==="") {
      return  alert('Board inválido!')
    }
    else if (numberPixel > 50){
      numberPixel = 50;
    }
    else if (numberPixel < 5){
      numberPixel = 5;
    }
    if (document.getElementById('pixel-board').children.length!=0) {
      let children = document.getElementById('pixel-board').children
      while (children[0]) {
        children[0].remove()
      }
    }
    for (let index = 0; index < numberPixel; index++) {
      let divline = document.createElement('div');
      divline.style.display = 'block';
      divline.style.width = "auto";
      section.appendChild(divline);
      for (let index = 0; index < numberPixel; index++) {
        let divblock = document.createElement ('div');
        divblock.className = 'pixel';
        divblock.style.display = "inline-block";
        divblock.style.width = '40px';
        divblock.style.height = '40px';
        divblock.style.backgroundColor = 'white';
        divblock.style.border  = 'solid black';
        divblock.style.borderWidth =  '1px';
        divline.appendChild(divblock);
      }
    }
  })
}
createQuadroPixelsN()

function createButton ()  {
  let button = document.getElementById('clear-board');
  button.addEventListener('click',  function  ()  {
    let pixelBox = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixelBox.length; index+=1) {
      pixelBox[index].style.backgroundColor = 'white';
      
    }
  })
}
createButton()

/// -----------------------------------------------////



// var body = document.getElementsByTagName('body')[0];


// function addH1 () {
//   // let body = document.getElementsByTagName('body')[0];
//   let elementH1 = document.createElement('h1');
//   elementH1.id = 'title';
//   elementH1.innerText = 'Paleta de Cores';
//   body.appendChild(elementH1);
// }
// addH1();
// // exercicio 2
// function addPaleta () {
//   let sectionOne = document.createElement('section');
//   sectionOne.id = 'color-palette';
//   sectionOne.style.width = '600px';
//   sectionOne.style.height = '600px';
//   body.appendChild(sectionOne);
  
// }
// addPaleta()

// function addPAletas () {
  
//   let cores = ['black','red','green','yellow'];
//   let sectionOne = document.querySelector('#color-palette');
//   sectionOne.style.height = '200px';
//   for (let index = 0 ; index < 4; index +=1) {
//     let div = document.createElement('div');
//     if (cores[index] === "black"){
//       div.className = "color selected"
//     }else {
//       div.className = "color";
//     }
//     div.style.backgroundColor = cores[index];
//     div.style.width = '40px';
//     div.style.height = '40px';
//     div.style.display = 'inline-block';
//     div.style.border = 'solid black';
//     div.style.borderWidth = '1px';
//     div.style.width = '100px';
//     div.style.height = '100px';
    
//     sectionOne.appendChild(div);
//   }
// }
// addPAletas()

// var input = document.createElement('input');
// input.type = 'number'
// input.min = "1";
// input.id  = 'board-size';
// body.appendChild(input)
// var button = document.createElement('button');
// button.id = 'generate-board';
// button.innerText  = 'VQV';
// body.appendChild(button)

// function createButton ()  {
//   let button = document.createElement('button');
//   button.id = 'clear-board';
//   button.innerText = 'Limpar';
//   body.appendChild(button)
//   button.addEventListener('click',  function  ()  {
//     let pixelBox = document.getElementsByClassName('pixel');
//     for (let index = 0; index < pixelBox.length; index+=1) {
//       pixelBox[index].style.backgroundColor = 'white';
      
//     }
//   })
// }
// createButton()

// function addQuadroPixels () {
//   let sectiontwo = document.createElement('section');
//   sectiontwo.id ='pixel-board';
//   body.appendChild(sectiontwo)
//   for (let index = 0; index < 5; index+=1) {
//     let divline = document.createElement('div');
//     divline.style.display = 'block';
//     divline.style.width = "800px"
//     sectiontwo.appendChild(divline);
    
//     for (let index = 0; index < 5; index++) {
//       let divblock = document.createElement ('div');
//       divblock.className = 'pixel';
//       divblock.style.display = "inline-block";
//       divblock.style.width = '40px';
//       divblock.style.height = '40px';
//       divblock.style.backgroundColor = 'white';
//       divblock.style.border  = 'solid black';
//       divblock.style.borderWidth =  '1px'
//       divline.appendChild(divblock);
//     }
    // let tagBr = document.createElement('br');
    // sectiontwo.appendChild(tagBr);
//   }
// }
// addQuadroPixels()


// function selectedPaleta ()  {
//   let listPaleta = document.getElementsByClassName('color')
//   for (let index = 0; index < listPaleta.length; index+=1) {
//     listPaleta[index].addEventListener('click', function  (event)  {
//       for (let index = 0; index < listPaleta.length; index+=1) {
//         listPaleta[index].className = "color";
//       }
//       event.target.className = 'color selected';
//     })
    
//   }
// }
// selectedPaleta ();

// function ColorirPixel ()  {
//   let pixelBox = document.getElementsByClassName('pixel');
//   for (let index = 0; index < pixelBox.length; index+=1) {
//     pixelBox[index].addEventListener('click', function  (event)  {
//       event.target.style.backgroundColor =  document.getElementsByClassName('selected')[0].style.backgroundColor
//     })
//   }
// }
// ColorirPixel()

// function createQuadroPixelsN () {

  
  
//   let sectionthree  = document.createElement('section');
//   sectionthree.className = 'sectionthree'
//   body.appendChild(sectionthree);
  

//   button.addEventListener('click',  function  ()  {
//     if (document.querySelector('sectionthree') === 0)  {
//       // sectionthree.removeChild(div);
//     }
//     let numberPixel = parseInt((document.querySelector('#board-size').value));
//     console.log(numberPixel);
//     if (numberPixel===NaN) {
//       alert('Board inválido!')
//     }
//     else if (numberPixel > 50){
//       numberPixel = 50;
//     }
//     for (let index = 0; index < numberPixel-1; index++) {
//       let divline = document.createElement('div');
//       divline.style.display = 'block';
//       divline.style.width = "auto";
//       sectionthree.appendChild(divline);
      
//       for (let index = 0; index < numberPixel-1; index++) {
//         let divblock = document.createElement('div');
//         divblock.style.display =  'inline-block'
//         divblock.style.width = '40px';
//         divblock.style.height = '40px';
//         divblock.style.backgroundColor = 'white';
//         divblock.style.border  = 'solid black';
//         divline.appendChild(divblock);
//       }
        
//     }
//   })


  
  
  
// }
// createQuadroPixelsN()