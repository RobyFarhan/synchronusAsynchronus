// const titleDisplay = document.getElementById('title');
// const ganjilDisplay = document.getElementById('ganjil'); //hasil ganjil
// const genapDisplay = document.getElementById('genap'); //hasil genap


function ganjil(number) {
  if (number % 2 == 1) {
    return true;
  } else {
    return false;
  }
}

function genap(number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

function asynchronus() {
  
  let range = document.getElementById('number').value;
  titleDisplay.innerText = '';
  //   Ganjil
  let i = 1;
  setInterval(() => {
    if (i <= range) {
      if (ganjil(i)) {
        console.log('Ganjil : ' + i);
        document.getElementById("ganjil").innerHTML += i + ',' + ' ';
      
      }
    }
    i++;
  }, 500);

  //   Genap
  let j = 1;
  setInterval(() => {
    if (j <= range) {
      if (genap(j)) {
        console.log('Genap : ' + j);
        document.getElementById("genap").innerHTML += j + ',' + ' ';
       
      }
    }
    j++;
  }, 500);
}

function synchronus() {
  
  let range = document.getElementById('number').value;
  titleDisplay.innerText = '';
  //   Ganjil
  for (let i = 1; i <= range; i++) {
    if (ganjil(i)) {
      console.log('Ganjil : ' + i);
      ganjilDisplay.innerText += i + ',' + ' ';
    }
  }

  //   Genap
  for (let j = 1; j <= range; j++) {
    if (genap(j)) {
      console.log('Genap : ' + j);
      genapDisplay.innerText += j + ',' + ' ';
    }
  }
}

