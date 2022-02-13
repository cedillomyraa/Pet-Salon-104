let salon={
    name:"The Fashion Pet",
    address:{
        street:"Av. University",
        ZIPcode:"22414",
        number:"262-K"
    },
    hours:{
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[]
}
function displayPetNames(){
    alert(`You have ${salon.pets.lenght} pets.`);
    for(let i=0; i<salon.pets.lenght;i++){
        console.log(salon.pets[i]);
    }
}
//constructors
function Pet(name,age,gender,breed,service,owner,contact){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.owner=owner;
    this.contact=contact;
}

// //object
// let Lola=new Pet("Lola", 12, "Female","Dachshund","Nails","Maira Quinones", 999-999-9999);
// salon.pets.push(Lola);//pushes the elemnt ito the array
// let Sushi=new Pet("Sushi", 8, "Bulldog", "Male", "Grooming", "Anna Cedillo", 888-888-8888);
// salon.pets.push(Sushi);
// let Taco=new Pet("Taco", 7, "Chihuahua","Oral Cleaning","Jo Shmo", 777-777-7777)
// salon.pets.push(Taco);

//inputs from HTML
let petName = document.getElementById("txtName");
let petAge = document.getElementById("txtAge");
let petGender = document.getElementById("txtGender");
let petBreed = document.getElementById("txtBreed");
let petService = document.getElementById("selService");
let petOwner = document.getElementById("txtOwner");
let petContact = document.getElementById("txtContact");

function register(){
    console.log("Register");
    //object
    let thePet= new Pet(petName.value , petAge.value , petGender.value , petBreed.value , petService.value , petOwner.value , petContact.value);
    //push the object into the array
    console.log(thePet);
    salon.pets.push(thePet);
    //display the array
    console.log(salon.pets);
    //alert
    showPetsCards();
    alert("You have registered a new pet!");
}

function showPetsCards(){
        document.getElementById('btnClear').hidden = true;
        document.getElementById('headerList').innerHTML = "Pets List";
        //clear the field
        document.getElementById("petList").innerHTML="";
        // travel the array in a loop
        for (let index = 0; index < salon.pets.length; index++) {
           
            // console.log(createCard(salon.pets[i]));

            // //create the tmp & append the tmp into HTML
            document.getElementById("petlist").innerHTML += createCard(salon.pets[i], i);
        }
    }

function removePet(index){
    if(index < salon.pets.length){
        salon.pets.splice(index, 1);
    }
    showPetsCards();
}

function searchPet(){
    document.getElementById("btnClear").hidden = false;
    let name = document.getElementById('txtSearch').value;
    document.getElementById('headerList').innerHTML = "Search Result";
    //clear the field now
    document.getElementById("petList").innerHTML="";
    //travel the array
    for (let i=0; i<salon.pets.length; i++){
        //create the card and append to HTML:
        if(name.toLowerCase()==salon.pets[i].name.toLowerCase()){
            document.getElementById('petList').innerHTML += createCard(salon.pets[i], i);
        }
    }

}
function createCard(pet, index){
    return`
        <div class="per-card">
            <h3>${pet.name}</h3>
            <p> Age: ${pet.age}</p>
            <p> Gender: ${pet.gender}</p>
            <p> Breed: ${pet.breed}</p>
            <p> Service: ${pet.service}</p>
            <p> Owner: ${pet.owner}</p>
            <p> Contact: ${pet.contact}</p>
            <button onclick="removepet"(${index});">Remove</button>
         </div>
    `;
}

function init(){
    let Lola=new Pet("Lola", 12, "Female","Dachshund","Nail Trim","Maira Quinones", 999-999-9999);
        salon.pets.push(Lola);//pushes the elemnt ito the array
    let Sushi=new Pet("Sushi", 8, "Bulldog", "Male", "Grooming", "Anna Cedillo", 888-888-8888);
        salon.pets.push(Sushi);
    let Taco=new Pet("Taco", 7, "Chihuahua","Oral Cleaning","Jo Shmo", 777-777-7777)
        salon.pets.push(Taco);
    showPetsCards();
}
window.onload=init;











//console.log(salon.pets);
// salon.pets[0].age // You can change the array index from zero up to the length of the array. If array has 3 objects, then the length of the array starts from 0 and ends at 2

// for (let i = 0; i < salon.pets.length; i++) {
//     const petsAge = salon.pets[i].age;
//     console.log('Index of array is ', i , ' And age of pets is ', petsAge);
    
// }

// const displayAllPetsNames = function () {
//     for (let i= 0; i<salon.pets.length; i++) {
//     console.log(salon.pets[i].name);
//     }
// }

