//////////////////////////////////////PROJECT DATA/////////////////////////////////////////

const labelWelcomeofLog = document.querySelector('.welcome');
const labelDateasof = document.querySelector('.date');
const labelBalanceof0 = document.querySelector('.balance__value');
const labelSummaryOfIn = document.querySelector('.summary__value--in');
const labelSummaryOfOut = document.querySelector('.summary__value--out');
const labelSummaryOfInterest = document.querySelector(
  '.summary__value--interest'
);
const labelTimerBottom = document.querySelector('.timer');
const mainClassApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');
const loginButton = document.querySelector('.login__btn');
const buttonTransfer = document.querySelector('.form__btn--transfer');
const buttonLoan = document.querySelector('.form__btn--loan');
const buttonCloase = document.querySelector('.form__btn--close');
const buttonSort = document.querySelector('.btn--sort');
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

labelBalanceof0.addEventListener('click', function () {
  const movementUI = Array.from(document.querySelectorAll('.movements__value'));
  console.log(
    movementUI.map(function (mov) {
      return Number(mov.textContent.replace('Rs.', ''));
    })
  );
});

const account1 = {
  owner: 'Vijay Sharma',
  witdep: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2024-09-06T10:51:36.790Z',
  ],
  locale: 'pt-PT',
  currency: 'EUR',
};

const account2 = {
  owner: 'Rajiv Shukla',
  witdep: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  locale: 'en-US',
  currency: 'USD',
};

const account3 = {
  owner: 'Viyam Sanjay  Bhaskar',
  witdep: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  locale: 'en-GB',
  currency: 'EUR',
};

const account4 = {
  owner: 'Pavit Kaur Sra',
  witdep: [430, 1000, 700, 50, 90],
  interestRate: 1.0,
  pin: 4444,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  locale: 'de-DE',
  currency: 'EUR',
};

/*const local = navigator.language;
console.log(local);*/
const accounts = [account1, account2, account3, account4];
//console.log(accounts);


//create a timer
const startLogoutTimer = function () {
  //create a function to pass it in the setinterval function so that we can call it immediately before setinteval

  //set the tiome to 2 minutes
  let time = 120;

  const tick = function () {
    //create minutes and seconds
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    //in each call print the remaing time to the ui
    labelTimerBottom.textContent = `${min}:${sec}`;

    //when sec = 0 stop the timer and logout user
    if (time === 0) {
      clearInterval(timer);
      labelWelcomeofLog.textContent = `Log in to get Started`;
      mainClassApp.style.opacity = 100;
    }

    //decrease the time by 1s
    time--;
  };
  //calll the timer function
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

//with this function we created a property named as username using the for each
const createUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(firstName => /*return*/ firstName[0])
      .join('');
  });
};

createUserName(accounts);

//console.log(accounts);

//now we will work on displaying the whole movements and the in and out using find method by entring the pin and username
/*const findOwner = accounts.find(acc => {
  acc.owner === 'Pavit Kaur Sra' && acc.pin === '4444';
});
console.log(findOwner);*/
console.log(accounts);

//formatting currencies
const formatCur = function (value, cur, locale) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: cur,
  }).format(value);
};

//formating the datess
const formatMovementsDate = function (date, locale) {
  const calcdayspassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const dayspassed = calcdayspassed(new Date(), date);
  console.log(dayspassed);

  if (dayspassed === 0) return `Today`;
  if (dayspassed === 1) return `Yesterday`;
  if (dayspassed <= 7) return `${dayspassed} days ago`;
  else {
    /*
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();
    const hour = date.getHours();
    const min = date.getMinutes();
    return `${day}/${month}/${year}`;
    */
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

//display movements
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? acc.witdep.slice().sort((a, b) => a - b) : acc.witdep; //ascending order

  movs.forEach(function (mov, index) {
    const date = new Date(acc.movementsDates[index]);
    console.log(date);
    const displayDate = formatMovementsDate(date, acc.locale);
    const formattedMov = formatCur(mov, acc.currency, acc.locale);
    //we need to create this row at each iteration
    const typeofMovement = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `  <div class="movements__row">
              <div class="movements__type movements__type--${typeofMovement}">
              ${index + 1} ${typeofMovement.toUpperCase()}</div>
                <div class="movements__date">${displayDate}</div>
              <div class="movements__value"> ${formattedMov}</div>
            </div>`;
    //now we will add this to the movements element
    containerMovements.insertAdjacentHTML('afterbegin', html);
    // console.log(index + 1, mov);
  });
};

//now we will work on the balance summary part
//const labelBalanceof0 = document.querySelector('.balance__value');

const displayBalance = function (acc) {
  const balance = acc.witdep.reduce(function (acu, cur) {
    return acu + cur;
  }, 0);
  acc.balance = balance; //this creates a new property in all the accounts as a sum of all the in and outs
  console.log(balance);
  labelBalanceof0.textContent = formatCur(
    acc.balance,
    acc.currency,
    acc.locale
  );
};

const displaySummary = function (acc) {
  //now we will work on displaying the IN that is deposits
  //const labelSummaryOfIn = document.querySelector('.summary__value--in');
  const displayBalanceOfIn = acc.witdep
    .filter(function (mov) {
      return mov >= 0;
    })
    .reduce(function (acu, mov) {
      return acu + mov;
    }, 0);
  console.log(displayBalanceOfIn);
  labelSummaryOfIn.textContent = formatCur(
    displayBalanceOfIn,
    acc.currency,
    acc.locale
  );

  //now we will work on displaying the OUT that is withdrawls
  //const labelSummaryOfOut = document.querySelector('.summary__value--out');
  //Math.abs() is for converting negative to positive
  const displayBalanceOfOut = acc.witdep
    .filter(function (mov) {
      return mov < 0;
    })
    .reduce(function (acu, mov) {
      return acu + mov;
    }, 0);
  console.log(displayBalanceOfOut);
  labelSummaryOfOut.textContent = formatCur(
    Math.abs(displayBalanceOfOut),
    acc.currency,
    acc.locale
  );

  //now we will display the interest of deposits with 1.2%
  //const labelSummaryOfInterest = document.querySelector('.summary__value--interest');
  //the bank intriduced a rule which tell if the intrest is aleast 1 than only it will be added
  const deisplayInterst = acc.witdep
    .filter(function (mov) {
      return mov >= 0;
    })
    .map(function (deposit) {
      return (deposit * acc.interestRate) / 100;
    })
    .filter(function (int) {
      return int >= 1;
    })
    .reduce(function (acc, interest) {
      return acc + interest;
    }, 0);
  console.log(deisplayInterst);
  labelSummaryOfInterest.textContent = formatCur(
    deisplayInterst,
    acc.currency,
    acc.locale
  );
};

const updatedUI = function (acc) {
  //display movements
  displayMovements(acc);

  //display balance
  displayBalance(acc);

  //display summary
  displaySummary(acc);
};

let currentAccount, timer;

loginButton.addEventListener('click', function (e) {
  e.preventDefault(); //this will remove the effect of submit
  //console.log('done');

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  //here we will check if the pin is correct
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //console.log('the pin is correct');

    //restart the timer here for the second login
    if (timer) clearInterval(timer);
    timer = startLogoutTimer();

    //display ui text message of welcome
    labelWelcomeofLog.textContent = `Welcome Back ${currentAccount.owner}`;

    //clear input fields
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    inputLoginPin.blur();

    //put the opacity back to 0 so when the user will log in set the opacity to 100
    mainClassApp.style.opacity = 100;

    //create the current date and time when logged in
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long',
    };
    const locale = navigator.language;
    labelDateasof.textContent = new Intl.DateTimeFormat(locale, options).format(
      now
    );
    /*
    const day = `${now.getDate()}`.padStart(2, 0);
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear();
    const hour = `${now.getHours()}`.padStart(2, 0);
    const min = `${now.getMinutes()}`.padStart(2, 0);
    labelDateasof.textContent = `${day}/${month}/${year}, ${hour}:${min}`;
*/

    //updating ui
    updatedUI(currentAccount);
  }
});

//the transfer money
buttonTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);

  const recieverAcc = accounts.find(function (acc) {
    return acc.username === inputTransferTo.value;
  }); //this returns the account to which the amount will be added

  console.log(amount, recieverAcc);

  if (
    amount > 0 &&
    recieverAcc &&
    currentAccount.balance >= amount &&
    recieverAcc?.username !== currentAccount.username
  ) {
    console.log('everything is perfect');
    //doing the transfer
    currentAccount.witdep.push(-amount);
    recieverAcc.witdep.push(amount);

    //adding the current date when transfered
    //.toisostring will convert it to the format we have written the previous dates in the object
    currentAccount.movementsDates.push(new Date().toISOString());
    recieverAcc.movementsDates.push(new Date().toISOString());

    //restart the timer
    clearInterval(timer);
    timer = startLogoutTimer();

    //updating tehe ui
    updatedUI(currentAccount);
  } else {
    alert('Not Enough Amount');
  }

  //clearing input fields again
  inputTransferAmount.value = '';
  inputTransferTo.value = '';
  inputTransferAmount.blur();
});

buttonCloase.addEventListener('click', function (e) {
  e.preventDefault();

  const user = inputCloseUsername.value;
  const pinofuser = Number(inputClosePin.value);

  //check if credentials are correct or not
  if (user === currentAccount.username && pinofuser === currentAccount.pin) {
    //find theindex value of the current account
    const index = accounts.findIndex(function (acc) {
      return acc.username === currentAccount.username; //if this condition is true than the index of the element will be returned
    });
    console.log(index);
    //console.log('perfect');
    accounts.splice(index, 1);
    mainClassApp.style.opacity = 0;
  }

  inputClosePin.value = '';
  inputCloseUsername.value = '';
  inputClosePin.blur();
});

buttonLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const loanAmount = Number(inputLoanAmount.value);
  console.log(loanAmount);

  if (
    loanAmount > 0 &&
    currentAccount.witdep.some(function (mov) {
      return mov >= loanAmount * 0.1;
    })
  ) {
    setTimeout(() => {
      //the amount of the loan will be added to the movement
      currentAccount.witdep.push(loanAmount);

      //adding the current date when loan
      currentAccount.movementsDates.push(new Date().toISOString());

      //restater the timer
      clearInterval(timer);
      timer = startLogoutTimer();

      //updating ui
      updatedUI(currentAccount);
    }, 3000);
  }
  inputLoanAmount.value = '';
});

let sorted = false;
//we set it to false becuase in the begining of the array it is not sorted otherwise it will always be true
buttonSort.addEventListener('click', function (e) {
  e.preventDefault();

  displayMovements(currentAccount, !sorted);
  //this function will be executed each time we click on the sort button
  sorted = !sorted;
});
