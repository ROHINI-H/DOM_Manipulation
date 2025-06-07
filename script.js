// Get the data from the form
const name = document.querySelector(".name");
const id = document.querySelector("#id");
const email = document.querySelector("#email");
const contact = document.querySelector("#contact");
console.log(name.value);

// Get the button and display area elements
const button = document.querySelector(".btn");
const displayArea = document.querySelector(".displayArea");
const table = document.querySelector("#table");

// Add row when the button is clicked
button.addEventListener('click', addEntry(name, id, email, contact));

// Add entry to the table
function addEntry(name, id, email, contact) {
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${name.value}</td>
    <td>${id.value}</td>
    <td>${email}</td>
    <td>${contact}</td>
    <td>
    <button>Delete</button>
    </td>`;
    table.appendChild(row);
}