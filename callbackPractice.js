/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });


and what you should write is the sayHi function that makes the code above work,


   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });


*/



  //Code Here for first

function first(arr, callback) {
	callback(arr[0]);
  }

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ' + firstName);
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




function last(arr, callback) {
  var lastArray = arr[arr.length - 1];
  callback(lastArray);
}

last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */






  //Code Here for multiply
function multiply(num1, num2, callback) {
   callback(num1 * num2);
 }

multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */



  //Code Here for contains
function contains(arr, name, callback) {
  if (arr.indexOf(name) !== -1) {
      callback(true);
    }
    else {
      callback(false);
    }
  }


contains(names, 'Colt', function(result){
    if(result === true){
      console.log('Colt is in the array');
    } else {
      console.log('Colt is not in the array');
    }
});


/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

    //Code Here for uniq
    // MY FUNCTION
function uniq(names, callback) {
  var uniqArr = [];
  for (var i = 0; i < names.length; i++) {
    if (uniqArr.indexOf(names[i]) === -1) {
      uniqArr.push(names[i]);
    }
  }
  return callback(uniqArr);
}

uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

    //Code Here for each

function each(array, callback, arrInd) {
  var thing = array[arrInd];
  for (var i = 0; i < array.length; i++) {
    callback(array[i], i);
  }
}

each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item);
});


/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */


var getUserById = function (userArr, searchID, cb){
  for(var i = 0; i < userArr.length; i++){
    if (userArr[i].id === searchID){
      cb(userArr[i]);
    }
  }
};

 //code here for getUserById
 function getUserById(arrayInput, idInput, callback) {
   for (var i = 0; i < arrayInput.length; i++) {
     if (arrayInput[i].id === idInput) {
       callback(arrayInput[i]);
     }
   }
}

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address);
});
