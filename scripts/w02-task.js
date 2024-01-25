/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Shayla Foley";
const currentYear = new Date().getFullYear();
const profilePicture = "images/profile.jpg";


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');



/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile Image of ${fullName}`);




/* Step 5 - Array */
let favFoods = ["Chicken", "Potatoes", "Broccoli", "Ice Cream", "Cheesecake"];
foodElement.innerHTML = favFoods;
let newFood = "Soup";
favFoods.push(newFood);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;





