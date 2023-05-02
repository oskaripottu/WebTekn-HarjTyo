//Aletaan haistelemaan buttoneita klikkauksien varalta
document.getElementById("noteButton").addEventListener("click", addNote);

//Esitellään elementtejä
let listArea = document.getElementById("notes");
let noteAdder = document.getElementById("noteAdder");
let newNote = document.getElementById("newNote");
let importantNote = document.getElementById("importantNewNote");

let noteAreaVisible = false;

function makeNoteAreaVisible() {
    let noteArea = document.getElementById("notes");
    let opacity = 0;
    let fadeIn = setInterval(() => {
       if (opacity >= 1) {
          clearInterval(fadeIn);
       }
       noteArea.style.opacity = opacity;
       opacity += 0.01;
    }, 10);
}

function addNote() {

    //Tarkistetaan onko nimikenttä tyhjä
    if(newNote.value.length == 0) {
        alert("Viestikenttä on tyhjä!");
        throw Error();
    }

    //Tarkistetaan onko viestikenttä tyhjä
    if(noteAdder.value.length == 0) {
        alert("Nimikenttä on tyhjä!");
        throw Error();
    }
    
    //Luodaan uusia elementtejä
    let div = document.createElement("div");
    div.setAttribute("id", "note");
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

    if(noteAreaVisible === false) {
        makeNoteAreaVisible();
        noteAreaVisible = true;
    }

    noteAdder.value = "";
    newNote.value = "";
    importantNote.checked = false;
    noteAdder.focus();
}