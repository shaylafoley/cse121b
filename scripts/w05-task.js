/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        let article = document.createElement('article');
        
        let templeName = document.createElement('h3');
        templeName.textContent = temple.templeName;

        let templeImage = document.createElement('img');
        templeImage.src = temple.imageUrl;
        templeImage.alt = temple.location;

        article.appendChild(templeName);
        article.appendChild(templeImage);
        templesElement.appendChild(article);


    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response =  await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        templeList = await response.json();
    displayTemples(templeList);
    }
}

/* reset Function */
const reset = function() {
    templesElement.innerHTML = "";
};
/* filterTemples Function */
const filterTemples = (temples) => {
    reset();
    let filter = document.getElementById('filtered').value;
    switch(filter){
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.includes("Utah"))); 
            break;
        case 'notutah':
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case 'all':
            displayTemples(temples);
            break;
    
        
     }
};


getTemples();  

/* Event Listener */
document.querySelector('#filtered').addEventListener('change', () => {filterTemples(templeList);
});

document.getclass