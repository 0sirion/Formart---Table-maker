// 'use strict';


let main = document.getElementById('mainContent');

let h1 = document.createElement('h');
h1.innerText = 'Creatore di Tabelle!';
h1.style.display = 'flex';
h1.style.justifyContent = 'center';



let div1 = document.createElement('div');
let div2 = document.createElement('div');



let label1 = document.createElement('label');
label1.setAttribute('for', 'righeId');
label1.innerText = 'Immettere il numero di righe'


let label2 = document.createElement('label');
label2.setAttribute('for', 'colonneId');
label2.innerText = 'Immettere il numero di colonne'

let inputColonne = document.createElement('input');
inputColonne.id = "colonneId";
inputColonne.setAttribute('type', 'number')
inputColonne.className = 'inputField';
inputColonne.min = 0;
inputColonne.setAttribute('onchange', 'check()');


let inputRighe = document.createElement('input');
inputRighe.id = "righeId";
inputRighe.className = 'inputField';
inputRighe.setAttribute('type', 'number');
inputRighe.min = 0;
inputRighe.setAttribute('onchange', 'check()');



function check() {
  let x = document.getElementById("righeId");
    let y = document.getElementById("colonneId");
    if ((x.value != '' && x.value > 0) && (y.value != '' && y.value > 0)) {
        btnMakeTable.disabled = false;

    } else {
        btnMakeTable.disabled = true;

    }
}





let btnMakeTable = document.createElement('input');
btnMakeTable.setAttribute('type', 'button');
btnMakeTable.value = 'Make Table!';
btnMakeTable.setAttribute('onclick', 'makeTableFn()')
btnMakeTable.disabled= true;



let hideTable = document.createElement('input');
hideTable.setAttribute('type', 'button');
hideTable.setAttribute('value', 'Hide Table');

let tableSample = document.createElement('table');
tableSample.id = "tableId"
tableSample.setAttribute('hidden', 'true')



function makeTableFn(n, m) {
  n = inputRighe.value;
  m = inputColonne.value;
  tableSample.innerHTML = "";
  tableSample.style.border = 'solid';
  document.getElementById("tableId").hidden = false;

  if (n != '' && m != '') {
    
    for (i = 1; i <= m; i++) {
      th1 = document.createElement('th');
      tableSample.appendChild(th1)
      th1.innerHTML = `header ${i}`;
      th1.style.backgroundColor = "rgba(0, 255, 64, 0.159)";
    }

    
    for (i = 1; i <= n; i++) {
      let row = document.createElement('tr');
      tableSample.appendChild(row);

        for (j = 1; j <= m; j++) {
          let col = document.createElement('td');
          tableSample.appendChild(col);
          col.innerHTML = `"cell in row ${i}, column ${j}"`
        }
    }
     
  }
  
}

function appendMain(element) {
  return main.appendChild(element);
  
}


// function preventNonNumericalInput(e) {
//   e = e || window.event;
//   var charCode = (typeof e.which == "undefined") ? e.keyCode : e.which;
//   var charStr = String.fromCharCode(charCode);

//   if (!charStr.match(/^[0-9]+$/))
//     e.preventDefault();
// }


function pageLoading() {
  appendMain(h1);
  appendMain(div1);
  appendMain(div2);

  div1.appendChild(label1);
  div1.appendChild(inputRighe);
  div1.appendChild(label2);
  div1.appendChild(inputColonne);
  div1.appendChild(btnMakeTable)
  div2.appendChild(tableSample)
  

}