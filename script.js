'use strict';
/*
//slice method
let arr = ['a', 'b', 'c', 'd', 'e'];
const newarr = arr.slice(2);
console.log(newarr);

const newarr1 = arr.slice(-1);
console.log(newarr1);

const newarr2 = arr.slice(2, 4);
console.log(newarr2);

const newarr3 = arr.slice(2, -1);
console.log(newarr3);

console.log(arr);


//splice method
const arr = ['a', 'b', 'c', 'd', 'e'];
arr.splice(2);
console.log(arr);

const newarr = ['a', 'b', 'c', 'd', 'e'];
newarr.splice(-1);
console.log(newarr);

const newarr2 = ['a', 'b', 'c', 'd', 'e'];
newarr2.splice(2, 4);
console.log(newarr2);

const newarr3 = ['a', 'b', 'c', 'd', 'e'];
newarr3.splice(1, 2);
console.log(newarr3);


//reverse method
const arr = ['a', 'b', 'c', 'd', 'e'];
const arr1 = ['j', 'i', 'h', 'g', 'f'];
arr1.reverse();
console.log(arr1);

const letters = arr.concat(arr1);
console.log(letters);

console.log(letters.join('__'));


const arr = [23, 41, 11];
console.log(arr[0]);
console.log(arr.at(0));

console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('jonas'.at(0));
console.log('jonas'.at(-1));
*/
/*
//forEach loop

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) console.log(`You deposited ${movement}`);
  else console.log(`You withdrew ${Math.abs(movement)}`);
}

console.log('-------------forEach()--------------');

movements.forEach(function (movement, index, array) {
  if (movement > 0)
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  else console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);

  console.log(array);
});


//forEach on maps
const currencies = new Map([
  ['USD', 'United States Dollar'],
  ['EUR', 'Euros'],
  ['GBP', 'Pound Stering'],
]);

currencies.forEach(function (currentVal, indexVal, map) {
  console.log(`${indexVal} : ${currentVal}`);
});

//forEach on sets
const newSet = new Set(['USD', 'EUR', 'GBP', 'EUR']);

newSet.forEach(function (value, key, set) {
  console.log(`${key}: ${value}`);
});

Coding Challenge #1
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners 
about their dog's age, and stored the data into an array (one array for each). For 
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years 
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages 
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have 
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat 
ages from that copied array (because it's a bad practice to mutate function 
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 
�
")
4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]


const juliasData = [9, 16, 6, 8, 3];
const katesData = [10, 5, 6, 1, 4];

juliasData.splice(-2);
juliasData.splice(0, 1);
//console.log(juliasData);

const checkDogs = function (juliaData, kateData) {
  const data = juliaData.concat(kateData);
  console.log(data);
  data.forEach(function (age, i) {
    age >= 3
      ? console.log(
          `Dog number ${i + 1} is an adult, and is of ${age} years old`
        )
      : console.log(
          `Dog number ${i + 1} is a puppy, and is of ${age} years old`
        );
    //console.log(`${i + 1}.`, age);
  });
};
checkDogs(juliasData, katesData);

//THE MAP METHOD
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurotoUsd = 1.1;
const newArr = movements.map(function (mov) {
  return mov * eurotoUsd;
});
console.log(newArr);


//THE FILTER METHOD
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
const withdrawals = movements.filter(function (mov) {
  return mov < 0;
});
console.log(deposits, withdrawals);

//REDUCE METHOD
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const balance = movements.reduce(function (acu, cur, i) {
  console.log(`iteration number ${i} is ${acu}`);
  return acu + cur;
}, 0);
console.log(balance);
*/

//CODING CHALLENGE #2
/*Coding Challenge #2
Let's go back to Julia and Kate's study about dogs. This time, they want to convert 
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's 
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is 
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, 
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as 
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know 
from other challenges how we calculate averages �)
4. Run the function for both test datasets
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4] 

const juliasData = [9, 16, 6, 8, 3];
const katesData = [10, 5, 6, 1, 4];

juliasData.splice(-2);
juliasData.splice(0, 1);
//console.log(juliasData);

const checkDogs = function (juliaData, kateData) {
  const data = juliaData.concat(kateData);
  console.log(data);
  data.forEach(function (age, i) {
    age >= 3
      ? console.log(
          `Dog number ${i + 1} is an adult, and is of ${age} years old`
        )
      : console.log(
          `Dog number ${i + 1} is a puppy, and is of ${age} years old`
        );
    //console.log(`${i + 1}.`, age);
  });
};

1. Calculate the dog age in human years using the following formula: if the dog is 
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, 
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as 
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know 
from other challenges how we calculate averages �)
4. Run the function for both test datasets
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4] 
checkDogs(juliasData, katesData);

const theCalculatorFunction = function (dogs) {
  const humanAges = dogs.map(function (age) {
    const humanAge = age > 2 ? 16 + age * 4 : 2 * age;
    return humanAge;
  });
  console.log(humanAges);

  const dogsIncluded = humanAges.filter(function (ageofdog) {
    return ageofdog > 18;
  });
  console.log(dogsIncluded);

  const calcAverageHumanAge = dogsIncluded.reduce(function (acu, age) {
    return (acu + age) / dogsIncluded.length;
  });
  console.log(`Average of Human Ages is ${calcAverageHumanAge}`);
};

theCalculatorFunction([5, 2, 4, 1, 15, 8, 3]);
theCalculatorFunction([16, 6, 10, 5, 6, 1, 4]);

/*
const z = Array.from({ length: 7 }, function (cur, i) {
  return Math.trunc(Math.random() * 101);
});
console.log(z);
*/
/*
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
//recommendedFood = weight ** 0.75 * 28

dogs.forEach(mov => (mov.recommendedFood = mov.weight ** 0.75 * 28));
console.log(dogs);

/*Find Sarah's dog and log to the console whether it's eating too much or too 
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in 
the owners array, and so this one is a bit tricky (on purpose) � */
/*
const sarahsdog = dogs.find(mov => mov.owners.includes('Sarah'));
console.log(sarahsdog);
console.log(
  sarahsdog.curFood > sarahsdog.recommendedFood
    ? 'The dog is eating too much'
    : 'The dog is eating less than the recommendation'
);
*/
/*Create an array containing all owners of dogs who eat too much 
('ownersEatTooMuch') and an array with all owners of dogs who eat too little 
('ownersEatTooLittle'). */
/*
const ttomuchfoodowners = dogs
  .filter(cur => cur.curFood > cur.recommendedFood)
  .map(mov => mov.owners)
  .flat();

console.log(ttomuchfoodowners);

const toolessfoodowners = dogs
  .filter(cur => cur.curFood < cur.recommendedFood)
  .map(mov => mov.owners)
  .flat();
console.log(toolessfoodowners);

/*Log a string to the console for each array created in 3., like this: "Matilda and 
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat 
too little! */
/*
console.log(`${ttomuchfoodowners.join(' and ')} eat too much`);
console.log(`${toolessfoodowners.join(' and ')} eat too less`);
*/
/*Log to the console whether there is any dog eating exactly the amount of food 
that is recommended (just true or false)
6. Log to the console whether there is any dog eating an okay amount of food 
(just true or false)
7. Create an array containing the dogs that are eating an okay amount of food (try 
to reuse the condition used in 6.)
8. Create a shallow copy of the 'dogs' array and sort it by recommended food 
portion in an ascending order (keep in mind that the portions are inside the 
array's objects �) 

console.log(dogs.some(cur => cur.recommendedFood === cur.curFood));

console.log(
  dogs.some(
    dog =>
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
  )
);

const okayfooddogs = dogs.filter(
  dog =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);
console.log(okayfooddogs);

const sorte = dogs.sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(sorte);
*/
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

/*
const allaccountstotal = accounts
  .flatMap(function (mov) {
    return mov.witdep;
  })
  .filter(function (mov) {
    return mov > 0;
  })
  .reduce(function (acc, mov) {
    return acc + mov;
  }, 0);
console.log(allaccountstotal);

const count = accounts
  .flatMap(function (mov) {
    return mov.witdep;
  })
  .filter(mov => mov <= 1000);
console.log(count);
*/

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
