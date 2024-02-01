/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Shayla Foley",
    photo: {
        src: "images/profile.jpg",
        alt: "Profile Picture"
    },
    favoriteFoods: ["Chicken", "Tacos", "Ice Cream", "Hamburgers"],
    hobbies: ["Singing", "Tennis", "Piano", "Volleyball"],
    placesLived: [],
};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Logan, UT',
        length: '6 years'
    },
    {
        place: 'Parowan, UT',
        length: '6 years'
    },
    {
        place: 'Plainfield, IN',
        length: '8 years'

    }

);



/* DOM Manipulation - Output */

/* Name */

document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo.src;
document.querySelector('#photo').alt = myProfile.photo.alt;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
})

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
})

/* Places Lived DataList */
let d1Element = document.getElementById('places-lived');
myProfile.placesLived.forEach(item => {
   let dt = document.createElement("dt"); 
   dt.innerHTML = item.place;
   let dd = document.createElement("dd");
   dd.textContent = item.length;
   d1Element.appendChild(dt);
   d1Element.appendChild(dd);

})
