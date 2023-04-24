//Aletaan haistelemaan buttoneita klikkauksien varalta
document.getElementById("noteButton").addEventListener("click", addNote);

//Esitellään elementtejä
let listArea = document.getElementById("notes");
let noteAdder = document.getElementById("noteAdder");
let newNote = document.getElementById("newNote");
let importantNote = document.getElementById("importantNewNote");

function addNote() {

    //Tarkistetaan onko nimikenttä tyhjä
    if(newNote.value.length == 0) {
        throw Error();
    }

    //Tarkistetaan onko viestikenttä tyhjä
    if(noteAdder.value.length == 0) {
        throw Error();
    }
    
    //Luodaan uusia elementtejä
    let div = document.createElement("div");
    let h5 = document.createElement("h5");
    let p = document.createElement("p");
    let p2 = document.createElement("p");

    //Kattellaan päivämäärä ja kelloaika
    let today = new Date();
    let currentDate = today.toLocaleDateString("fi-FI");
    let currentTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    
    //Luodaan tekstisisältö
    h5.textContent = newNote.value;
    p.textContent = noteAdder.value + " -- " + currentTime + "  " + currentDate;
    
    //Tarkistetaan tärkeystäppä ja tehdään tyylimuutoksia
    if(importantNote.checked) {
        div.classList.add("importantNote");
    } else {
        div.classList.add("noteBorder");
    }
    
    //Lisätään div elementti
    listArea.append(div);
    //Lisätään div elementin sisään pari lisää
    div.append(h5, p);

    //Tuodaan viestialue näkösälle
    let noteArea = document.querySelector("#notes");
    noteArea.style.display = "block";

}

function magicHappens() {
    alert("Jeejee!");
}