//Popup for the first page instuction

function onOpenPopup() {
  const popup = document.getElementById("popup1");
  popup.classList.toggle("show");
}

function onClosePopup() {
  const popup = document.getElementById("popup1");
  popup.classList.remove("show");
}