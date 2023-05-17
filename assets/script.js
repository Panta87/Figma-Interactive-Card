const cardHolderNameInput = document.querySelector('#cardholderName');
const cardNumberInput = document.querySelector('#cardNumber');
const expMonthInput = document.querySelector('#expMonth');
const expYearInput = document.querySelector('#expYear');
const cvcCodeInput = document.querySelector('#cvcCode');
const confirmBtn = document.querySelector('#formConfirm');
const form = document.querySelector('#cardForm');
const continueBtn = document.querySelector('#continue');
const thankYouSection = document.querySelector("#thank-you");
const thankYou = document.getElementById("thank-you-header");

// Display on card
const cardHolderNameDisplay = document.querySelector('#cardholderNameDisplay');
const cardNumberDisplay = document.querySelector('#cardNumberDisplay');
const expMonthDisplay = document.querySelector('#expMonthDisplay');
const expYearDisplay = document.querySelector('#expYearDisplay');
const cvcCodeDisplay = document.querySelector('#cvcCodeDisplay');

// Errors
const cardNameError = document.querySelector(".card-name-error");
const cardNumberError = document.querySelector(".card-number-error");
const monthError = document.querySelector(".month-error");
const yearError = document.querySelector(".year-error");
const cvcError = document.querySelector(".cvc-error");

cardHolderNameInput.addEventListener('input', function(e) {
    const inputValue = e.target.value;

    let keyLetters = inputValue.match(/^[A-za-z ]*$/);

    if (inputValue.length === 0) {
        cardNameError.innerHTML =  'Please enter your name!';
    } else if (keyLetters) {
        cardHolderNameDisplay.innerHTML = inputValue;
        cardNameError.innerHTML = '';
    } else {
        cardNameError.innerHTML = 'Please use only letters!';
    }

    if (inputValue.length === 0 ) {
        cardHolderNameDisplay.innerHTML = 'Jane Appleseed'; 
    }
});

cardNumberInput.addEventListener('input', function(e) {
    const inputValue = e.target.value;
   
    let keyNumbers = inputValue.match(/^[0-9 ]*$/);
   
    const editedInputValue = inputValue.match(/.{1,4}/g);
    
    if (inputValue.length === 0) {
        cardNumberError.innerHTML = 'Please enter your card number!';
    } else if (keyNumbers) {
        cardNumberDisplay.innerText = editedInputValue.join(' '); 
        cardNumberError.innerHTML = '';
    } else  {
        cardNumberError.innerHTML = 'Please use only numbers!';
    }
     if (inputValue.length === 0) {
        cardNumberDisplay.innerText = '0000 0000 0000 0000';
    }
})

expMonthInput.addEventListener('input', function(e) {
    const inputValue = e.target.value;

    let keyNumbers = inputValue.match(/^[0-9 ]*$/);


  if (inputValue.length === 0 ) {
        monthError.innerHTML = 'Please enter month';
    } else if (Number(expMonthInput.value) <= 0 || Number(expMonthInput.value) > 12) {
        monthError.innerHTML = 'Month must be between 1-12.';
    } else if (keyNumbers) {
        expMonthDisplay.innerHTML = inputValue;
        monthError.innerHTML = '';
    } else {
        monthError.innerHTML = 'Please use only numbers!';
    }

   if (inputValue.length === 0) {
        expMonthDisplay.innerText = '00';
    }
})

expYearInput.addEventListener('input', function(e) {
    const inputValue = e.target.value;

    let keyNumbers = inputValue.match(/^[0-9 ]*$/);

    if (inputValue.length === 0) {
        yearError.innerHTML = 'Please enter year.';
    } else if (keyNumbers) {
        expYearDisplay.innerHTML = inputValue;
        yearError.innerHTML = '';
    } else {
        yearError.innerHTML = 'Please use only numbers!';
    }
     if (inputValue.length === 0) {
        expYearDisplay.innerText = '00';
    }
})

cvcCodeInput.addEventListener('input', function(e) {
    const inputValue = e.target.value;
    
    let keyNumbers = inputValue.match(/^[0-9 ]*$/);

    if (inputValue.length === 0) {
        cvcError.innerHTML = "Can't be blank";
    } else if (keyNumbers) {
        cvcCodeDisplay.innerHTML = inputValue;
        cvcError.innerHTML = '';
    } else {
        cvcError.innerHTML = 'Please use only numbers!';
    }

    if (inputValue.length === 0) {
        cvcCodeDisplay.innerText = '000';
    }
})

confirmBtn.addEventListener('click', function(e) {
    e.preventDefault();
    if (cardHolderNameInput.value.length <= 0) {
        cardNameError.innerHTML = "Please enter your name!";
      } else if (cardNumberInput.value.length <= 0) {
        cardNumberError.innerHTML = "Please enter your card number!";
      } else if (expMonthInput.value.length <= 0) {
        monthError.innerHTML = "Please enter month!";
      } else if (expYearInput.value.length <= 0) {
        yearError.innerHTML = "Please enter year!";
      } else if (cvcCodeInput.value.length <= 0) {
        cvcError.innerHTML = "Please enter your cvc!";
      } else {

        form.classList.add("hidden");
        thankYouSection.classList.remove("hidden");
        thankYou.innerHTML = `Thank You ${cardHolderNameInput.value}`;

      }

})

continueBtn.addEventListener("click", function (e) {
    e.preventDefault();
    thankYouSection.classList.add("hidden");
    form.classList.remove("hidden");
    cardHolderNameDisplay.innerHTML = 'Jane Appleseed';
    cardNumberDisplay.innerHTML = '0000 0000 0000 0000';
    expMonthDisplay.innerHTML = '00';
    expYearDisplay.innerHTML = '0000';
    cvcCodeDisplay.innerHTML = '000';
    cardHolderNameInput.value = '';
    cardNumberInput.value = '';
    expMonthInput.value = '';
    expYearInput.value = '';
    cvcCodeInput.value = '';
  });

