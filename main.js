import { addNotesToList, search } from "./notesModule.js";
import { notesList, notesListContainer, pinnedNotesList, pinnedNotesListContainer, desktopSearchForm, mMenuToggleBtn, menuClose, mobileSearchBtn, menu, main, mobileSearch } from "./Constants.js";


// Get notes from local storages and add them to the list
// ==========================================================

if(notesListContainer) {
    addNotesToList(notesList, notesListContainer, "notes");
}

// Get pinned notes from local storage and add them to the list
// ==========================================================

if(pinnedNotesListContainer) {
    addNotesToList(pinnedNotesList, pinnedNotesListContainer, "pinned");
}

// Search function
// ==========================================================
desktopSearchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    search(desktopSearchForm);
})

// Mobile menu functions and listeners
// ==========================================================

mMenuToggleBtn?.addEventListener("click", () => {
    menu.classList.toggle("menu_open");
    main.classList.toggle("main_menu_open");
})

menuClose?.addEventListener("click", () => {
    menu.classList.remove("menu_open");
    main.classList.remove("main_menu_open");
});

// Mobile show search form button

mobileSearchBtn.addEventListener("click", () => {
    document.querySelector(".mHeader").classList.toggle("mHeader_search_open");
})


// Mobile search
mobileSearch.addEventListener("submit", (e) => {
    e.preventDefault();
    search(mobileSearch);
})


// Add function to toggle_notes_lis
document.querySelector(".toggle_notes_lis")?.addEventListener("click", () => {
    document.querySelector(".notes").classList.toggle("notes--open");
})