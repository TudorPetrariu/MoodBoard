let arrayOfSelectedDips = [];
let divs = document.querySelectorAll('.card-image > img');

let pinImage = document.querySelectorAll('.images-container');
const button = document.querySelector('.btn');
let pin = ['./images/img_control_pushpin.png'];

const p2 = document.querySelector('.p2');
const p1 = document.querySelector('.p1');
const show = () => {
   const container = document.getElementsByClassName('images-container')[0];
   container.innerHTML = '';
   arrayOfSelectedDips.forEach(select => {
      container.append(select);
      let pins = document.createElement('img');
      pins.classList.add('pin');
      p1.classList.add('p2');
      p2.classList.remove('p2');
      pins.src = pin;
      select.appendChild(pins);
      container.classList.remove('images-container');
      container.classList.add('grid');
   });
};

button.addEventListener('click', show);

const addToSelectedDips = node => {
   if (arrayOfSelectedDips.length < 4) arrayOfSelectedDips.push(node);
};

const removeFromSelectedDips = node => {
   var index = arrayOfSelectedDips.indexOf(node);
   if (index > -1) {
      arrayOfSelectedDips.splice(index, 1);
   }
};

const selectDip = ev => {
   const img = ev.target;
   const cardImg = img.parentElement;
   const cardAction = img.parentElement.childNodes[3];

   if (cardAction.classList.contains('hidden')) {
      if (arrayOfSelectedDips.length < 4) {
         cardAction.classList.remove('hidden');
         addToSelectedDips(cardImg);
         console.log(arrayOfSelectedDips);
      } else {
         console.log(`you can't select more dips`);
      }
   } else {
      cardAction.classList.add('hidden');
      removeFromSelectedDips(cardImg);
   }
};

divs.forEach(div => div.addEventListener('click', selectDip));
