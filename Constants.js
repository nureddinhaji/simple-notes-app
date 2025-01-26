// Constants for use them entirely
// ==========================================================
const notesList = JSON.parse(localStorage.getItem("notes")) || [];
const notesListContainer = document.getElementById("notes_list");

const pinnedNotesList = JSON.parse(localStorage.getItem("pinned")) || [];
const pinnedNotesListContainer = document.getElementById("pinned_list");

const desktopSearchForm = document.getElementById("desktop_search");
const mobileSearch = document.getElementById("mobile_search");

const mMenuToggleBtn = document.querySelector(".mMenu_menu_button");
const menu = document.querySelector(".menu");
const main = document.querySelector(".main");
const menuClose = document.querySelector(".menu_close");
const mobileSearchBtn = document.querySelector(".mMenu_menu_search")


export { notesList, notesListContainer, pinnedNotesList, pinnedNotesListContainer, desktopSearchForm, mobileSearch, mMenuToggleBtn, menu, main, menuClose, mobileSearchBtn };