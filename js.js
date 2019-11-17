/* Task 1  */

console.log("Create function which will return function with callback in arguments");

let list = [5, 2, 18, -2];
console.log("array: " + list);

let min = function (array) {
  let minimum = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < minimum) {
      minimum = array[i];
    }
  }
  return minimum;
}

console.log('min: ' + min(list));

let max = function (array) {
  let maximum = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maximum) {
      maximum = array[i];
    }
  }
  return maximum;
}

console.log('max: ' + max(list));

let sum = function(array) {
  let total = null;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

console.log('sum: ' + sum(list));

let replace = function (array) {
  let minimum = min(array);
  let maximum = max(array);
  let minId = array.indexOf(minimum);
  let maxId = array.indexOf(maximum);
  array[minId] = maximum;
  array[maxId] = minimum;
}

replace(list);
console.log('after replacement: ' + list);

/* Task 2 */

console.log('Create function which will return function with callback in arguments');

function func (anotherFunc) {
  console.log('function 1!');
  anotherFunc();
}

function func2 () {
  console.log('function 2!');
}

func(func2);

/* Task 3 */ 

console.log('Create a function that will replace all number dividing three with ‘foo’, dividing seven with ‘bar’' + 
'and dividing three and seven with ‘foobar’. Function with n params.')

function task3 () {
  for (let i = 0; i < arguments.length; i++) {
    if (((arguments[i] % 3) == 0) && ((arguments[i] % 7) == 0)) {
      arguments[i] = 'foobar';
    } else if ((arguments[i] % 3) == 0) {
      arguments[i] = 'foo';
    } else if ((arguments[i] % 7) == 0) {
      arguments[i] = 'bar';
    }
  }
  return arguments;
}

console.log(task3(1, 2, 3, 7, 21, 10));

/* Task 4 */
function task4 (str1, str2) {
  console.log(str1);
  console.log(str2);
  let commonletters = [];
  let arr1 = str1.split('');
  let arr2 = str2.split('');
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      commonletters.push(arr1[i]);
      arr2[i] = ''; 
    }
  }
  console.log('common: ' + commonletters);
  return (commonletters.length / (str1.length + str2.length)) * 100 + "%"
}

console.log(task4('tokoko', 'sokt'));

/* Task 5 */ 

let calcText = ""
function calculate (value) {
  calcText += value;
  document.getElementById("calculator_text").textContent = calcText;
}

function reset () {
  calcText = "";
  document.getElementById("calculator_text").textContent = calcText;
}

function result () {
  calcText = eval(calcText);
  document.getElementById("calculator_text").textContent = calcText;
}
