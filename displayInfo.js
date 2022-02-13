function displayInformation(){
    document.getElementById("salonInformation").innerHTML=`
        <p> ${salon.name}<p>
        <p> We are located at ${salon.address.street}, ${salon.address.number}<p>
        <p> Open from ${salon.hours.open} to ${salon.hours.close}<p>
    `;
}
displayInformation();

// function pets(){ 
//     alert("There are 4 pets");
// }
// displayAllPetsNames();