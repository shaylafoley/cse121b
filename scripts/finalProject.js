/* Final Project: Programming Tasks */

/* Declare and initialize global variables */


const url = "https://jsonplaceholder.org/users";
let results = null;

/* async getUsers Function */
async function getUsers(url) {
    const response = await fetch(url)
    if (response.ok) {
        const data = await response.json();
displayUsers(data);
bdayMessage(data);
    }
}

// displayUsers function to create the list of employees
function displayUsers(data) {
    const bdayList = document.querySelector('ul');
    data.forEach(employee => {
        const li = document.createElement('li');
        li.textContent = `${employee.firstname} ${employee.lastname} | ${employee.birthDate}`;
        bdayList.appendChild(li);
            
    });
}

//display the users and message for birthdays
getUsers(url);

//function to create a birthday message for the employees whose birthday lie within the current month
function bdayMessage(data) {
    const currentMonth = new Date().getMonth();

    const birthdayOutput = document.getElementById('birthdayOutput');
    birthdayOutput.innerHTML = '';

    data.forEach(user => {
        const userBirthday = new Date(user.birthDate)
        const userBirthMonth = userBirthday.getMonth();

        if (userBirthMonth === currentMonth) {
            var message = `${user.firstname} ${user.lastname}'s birthday is this month!`;
            var messageNode = document.createElement('p');
            messageNode.textContent = message;
            birthdayOutput.appendChild(messageNode);
        }
        
    });
    
};


