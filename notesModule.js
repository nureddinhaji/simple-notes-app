import { notesList, pinnedNotesList } from "./Constants.js";

// Delete a note function
// ==========================================================
export function deleteNote(noteIndex, type) {
    if(confirm("Are you sure you want to delete this note?")) {
        const currentList = type === "notes" ? notesList : pinnedNotesList;
        currentList.splice(noteIndex, 1);
        localStorage.setItem(type, JSON.stringify(currentList));
        window.location.href = "/";
    }
}

export function addListenerToDeleteBtns(container) {
    const deleteButtons = container.querySelectorAll('.notes_item_delete');
    deleteButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const noteIndex = e.target.getAttribute('data-index');
            const noteType = e.target.getAttribute('data-type');
            deleteNote(noteIndex, noteType);
        });
    });
}

// Function to return note html
// =============================
export function getNoteHtml(note, index, type) {
    const notSummary = note.content.split(" ").slice(0, 18).join(" ");
    return `
    <li class="notes_item">
        <a class="notes_item_title" href="note.html?id=${index + 1}&type=${type}">${note.title}</a>
        <p class="notes_item_desc">${notSummary}...</p>
        <div class="notes_item_footer">
            <span class="notes_item_date">${note.date}</span>
            <button class="notes_item_delete" data-index="${index}" data-type="${type}">Delete</button>
        </div>
    </li>`;
}

// Function to add notes to the list with delete button function
// =================================================================
export function addNotesToList(notelist, container, type) {
    if(notelist.length > 0) {
        const notesListHtml = notelist.map((note, index) => {
            return getNoteHtml(note, index, type);
        });
        container.innerHTML = notesListHtml.join("");

        // Attach event listeners to delete buttons
        addListenerToDeleteBtns(container);
    } else {
        container.innerHTML = `<li class="notes_item no_result"><span>Add new ${type === "note" ? "note" : "pinned note"} to show it here</span></li>`;
    }
}

// Notes search function
export function search(searchForm) {
    let searchInput = searchForm.querySelector(".menu_search_input");
    let searchValue = searchInput.value;
    if (searchValue) {
        window.location.href = `search.html?q=${searchValue}`;
    }
}