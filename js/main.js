let form = document.querySelector('form')
let inpUserName = document.querySelector("#name");
let inpNumber = document.querySelector("#number");
let inpImage = document.querySelector("#img");
let list = document.querySelector("ul");

//! createeee
createContacts();
function createContacts() {
  if (!localStorage.getItem("contacts-data")) {
    localStorage.setItem("contacts-data", "[]");
  }
  let data = JSON.parse(localStorage.getItem("contacts-data"));
  console.log(data);
  list.innerHTML = "";
  data.forEach((elem, index) => {
    list.innerHTML += `
    <div id = "contact-block">
    <span>Image:</span> <img src='${elem.imageUrl}'> 
    <br>
    <li><span>Name:</span> ${elem.name}</li>
    <li><span>Number:</span> ${elem.number}</li>
    <br>
    <button onclick ='deleteContact(${index})'>Delete</button>
    <button onclick ='editTask(${index})'>Edit</button>
    </div>
    `;
  });
}

//! add eveeent
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (
    !inpUserName.value.trim() ||
    !inpNumber.value.trim() ||
    !inpImage.value.trim()
  ) {
    alert("Заполните поле !!!");
    return;
  }
  let obj = {
    name: inpUserName.value,
    number: inpNumber.value,
    imageUrl: inpImage.value,
  };
  let data = JSON.parse(localStorage.getItem("contacts-data"));
  data.push(obj);
  localStorage.setItem("contacts-data", JSON.stringify(data));
  inpUserName.value = "";
  inpNumber.value = "";
  inpImage.value = "";
  createContacts();
});

//! deleeeeeete
function deleteContact(index) {
  let data = JSON.parse(localStorage.getItem("contacts-data"));
  data.splice(index, 1);
  localStorage.setItem("contacts-data", JSON.stringify(data));
  createContacts();
}

//! eddiiiiitt
let modal = document.querySelector("#big-modal");
let inpEditName = document.querySelector("#modal-nameInp");
let inpEditNum = document.querySelector("#modal-numberInp");
let inpEditUrl = document.querySelector("#modal-urlInp");
let btnSave = document.querySelector("#btnSave");
let closeModal = document.querySelector("#modal-close");

function editTask(index) {
  modal.style.display = "block";
  let data = JSON.parse(localStorage.getItem("contacts-data"));

  inpEditName.value = data[index].name;
  inpEditName.setAttribute("id", index);

  inpEditNum.value = data[index].number;
  inpEditNum.setAttribute("id", index);

  inpEditUrl.value = data[index].imageUrl;
  inpEditUrl.setAttribute("id", index);
}

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

console.log(inpEditName.id);
btnSave.addEventListener("click", () => {
    let index = inpEditName.id
  let na = inpEditName.na;
  let nu = inpEditNum.nu;
  let url = inpEditUrl.url;
  let data = JSON.parse(localStorage.getItem("contacts-data"));
  let newObj = {
    name: inpEditName.value,
    number: inpEditNum.value,
    imageUrl: inpEditUrl.value,
  };
  data.splice(index, 1, newObj);
  data.splice(index, 1, newObj);
  data.splice(index, 1, newObj);

  localStorage.setItem("contacts-data", JSON.stringify(data));
  modal.style.display = "none";
  createContacts();
});