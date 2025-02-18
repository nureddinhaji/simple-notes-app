
const addNoteBtns = document.querySelectorAll(".add_note_btn");
const addNoteForm = document.getElementById("add_note_form");
const addNoteTitle = document.getElementById("note_title");
const addNoteAuthor = document.getElementById("note_author");
const addNoteContent = document.getElementById("note_content");

// Function to get date
function getDate() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.toLocaleString('default', { month: 'short' });
    const year = currentDate.getFullYear();
    return `${month} ${day}, ${year}`;
}

// Function to edite note content
function getContent() {
    return addNoteContent.value.replace(/\n/g, '<br />')
}

// Function to get note 
function getNote() {
    return {
        title: addNoteTitle.value,
        author: addNoteAuthor.value,
        content: getContent(),
        date: getDate()
    }
}

// Function to add note
function addNote(noteType) {
    const notesList = JSON.parse(localStorage.getItem(noteType)) || [];
    const note = getNote();

    notesList.push(note);
    localStorage.setItem(noteType, JSON.stringify(notesList));
    window.location.href = `note.html?id=${notesList.length}&type=${noteType}`;
}


// Add event listener to add note buttons
addNoteBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const noteType = e.target.getAttribute("data-type");
        addNote(noteType);
    })
})

// add menu_list_item--active 
if(window.location.pathname === "/addnote.html") {
    document.querySelector(".menu_list_item--active").classList.remove("menu_list_item--active");
    document.querySelector(".menu_list_item--addnote").classList.add("menu_list_item--active");
}