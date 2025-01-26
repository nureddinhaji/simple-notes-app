import { notesList, pinnedNotesList} from "../Constants.js";

// Display the note content when a note is clicked
// ==========================================================

const currentNoteTitle = document.querySelector(".note_title");
const currentNoteMeta = document.querySelector(".note_meta");
const currentNoteContent = document.querySelector(".note_content");

window.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);

    // Get number not id from url, the id params will be as pinned1 or notes1
    const noteId = urlParams.get("id");
    const noteType = urlParams.get("type");

    if (noteId) {
        const note = noteType === "pinned" ? pinnedNotesList[noteId - 1] : notesList[noteId - 1];
        currentNoteTitle.textContent = note.title;
        currentNoteMeta.textContent = `${note.date} / By ${note.author}`;
        currentNoteContent.innerHTML = note.content;
    }
});
