console.clear();
// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. 
console.log('1.');
var a = 2;
var b = 3;
if (a === b) {
  console.log('A = B');
} else if (a > b) {
  console.log('A > B');
} else if (a < b) {
  console.log('A < B');
}

// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. 
console.clear();
console.log('2.');
for (let i = 0; i < 10; i++) {
    console.log(i+1);
  }

// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10.
console.clear();
console.log('3.');
for (let i = 1; i <= 5; i ++) {
    console.log(i*2);
  }

// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje.
console.clear();
console.log('4.');
for (let i = 0; i < 5; i++) {
    let num = Math.floor(Math.random() * 10) + 1;
    console.log(num);
  }
// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5.
console.clear();
console.log('5.');
let number;
while (number !== 5) {
  number = Math.floor(Math.random() * 10) + 1;
  console.log(number);
}
// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
console.clear();
console.log('6.');
let arr = [];
let biggest = -Infinity;
let length = Math.floor(Math.random() * (30 - 20) + 20);

for (let i = 0; i < length; i++) {
  let num = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
  arr.push(num);
}
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > biggest) {
    biggest = arr[i];
  }
}
console.log(arr);
console.log('Didziausia reiksme:', biggest);
// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
console.clear();
console.log('7.');

const obj = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
};

const letterArray = [];
const firstLetter = 1;
const lastLetter = 4;

for (let i = 0; i < 100; i++) {
  let letterIndex = Math.floor(Math.random() * (lastLetter - firstLetter + 1)) + firstLetter;
  let letter = Object.keys(obj)[letterIndex - 1];
  letterArray.push(letter);
}

const frequency = {};
for (let i = 0; i < 100; i++) {
  const letter = letterArray[i];
  if (frequency[letter]) {
    frequency[letter]++;
  } else {
    frequency[letter] = 1;
  }
}


console.log(letterArray);
console.log(frequency);
// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
console.clear();
console.log('8.');

function lygineSuma(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    let sumNum = a + b;
    if (sumNum % 2 !== 0) {
      return 'Suma nelyginė';
    } else {
      return a + b;
    }
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    return a.length + b.length;
  }

  return 'Abu kintamieji turi būti arba skaičiai arba masyvai';
}

// Testavimas
console.log(lygineSuma(2, 4));
console.log(lygineSuma([1, 2, 3], [4, 5]));
console.log(lygineSuma(3, [1, 2, 3]));
console.log(lygineSuma([1, 2], 4)); 
console.log(lygineSuma([1, 2, 3], [4, 5, 6])); 

// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
// skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
console.clear();
console.log('9.');
function pirminis(num9) {
    if (typeof num9 !== 'number') {
      return 'Not a number';
    }
    if (num9 <= 1) {
      return 'Nei pirminis nei antrinis.';
    }
    for (let i = 2; i < num9; i++) {
      if (num9 % i === 0) {
        return 'Antrinis';
      }
    }
    return 'Pirminis';
  }
  
  console.log(pirminis(7));
  console.log(pirminis(12));
  console.log(pirminis(1));
  console.log(pirminis(0)); 
  console.log(pirminis('a'));
  

// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
// "(XXX) XXX-XXXX". (10 taškų)
//pabaigt liko

console.clear();
console.log('10.');

function telefonoNumeris(masyvas) {
    if (!Array.isArray(masyvas)) {
      return 'Nera masyvas';
    }
    if (masyvas.length !== 10) {
      return 'Masyvo ilgis nelygus 10';
    }
    const sutvarkytasskaicius = masyvas.join('')
      .replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    return sutvarkytasskaicius;
  }
  
  console.log(telefonoNumeris([1, 2, 2, 2, 5, 5, 2, 8, 9, 2]));
  console.log(telefonoNumeris([9, 8, 7, 6, 4, 4, 1, 2, 1, 0])); 
  console.log(telefonoNumeris([1, 2, 3, 4, 5, 6, 7, 23]));
  console.log(telefonoNumeris("1234567890")); 
  console.log(telefonoNumeris([1, 2, 3, "X", 5, 6, 7, {}, 9, 0]));
  
  