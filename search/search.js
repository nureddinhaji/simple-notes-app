import { notesList, pinnedNotesList } from "../Constants.js";
import { addListenerToDeleteBtns, deleteNote, getNoteHtml } from "../notesModule.js";

// Get search param
// ===============================

const urlParams = new URLSearchParams(window.location.search);
const searchParam = urlParams.get("q");

// Get search result
// ===============================
const searchResult = [];

// get search results from notes lists
notesList.forEach((note, index) => {
    if (note.title.toLowerCase().includes(searchParam.toLowerCase()) || note.content.toLowerCase().includes(searchParam.toLowerCase())) {
        searchResult.push({note, index, type: "notes"});
    }
});

// get search results from pinned notes lists
pinnedNotesList.forEach((note, index) => {
    if (note.title.toLowerCase().includes(searchParam.toLowerCase()) || note.content.toLowerCase().includes(searchParam.toLowerCase())) {
        searchResult.push({note, index, type: "pinned"});
    }
});

// Display search result
// ===============================
const resultContainer = document.getElementById("search_result");
if(searchResult.length > 0) {
    resultContainer.innerHTML = searchResult.map((note) => {
        return getNoteHtml(note.note, note.index, note.type)
    }).join("");
    addListenerToDeleteBtns(resultContainer)
} else {
    resultContainer.innerHTML = `<li class="notes_item no_result"><span>No result found</span></li>`
}