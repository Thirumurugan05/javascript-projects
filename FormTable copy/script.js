let selectedRow = null;

// FORM SUBMIT
function onFormSubmit(event) {

    event.preventDefault();

    let formData = readFormData();

      if (
        formData.fullName === "" ||
        formData.empCode === "" ||
        formData.salary === "" ||
        formData.city === ""
    ) {
        alert("Please fill all values");
        return; 
    }

    if (selectedRow == null) {
        insertFormData(formData);
    } 
    else {
        updateFormData(formData);
    }

    resetForm();
}

// READ FORM DATA
function readFormData() {
    let formData = {};
    formData["fullName"] = document.getElementById("fullname").value;
    formData["empCode"] = document.getElementById("empcode").value;
    formData["salary"] = document.getElementById("salary").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}

// INSERT DATA
function insertFormData(data) {
    let table = document.querySelector(".list tbody");
    let newRow = table.insertRow(table.length);

    newRow.insertCell(0).innerHTML = data.fullName;
    newRow.insertCell(1).innerHTML = data.empCode;
    newRow.insertCell(2).innerHTML = data.salary;
    newRow.insertCell(3).innerHTML = data.city;
    newRow.insertCell(4).innerHTML = `
        <button onclick="onEdit(this)">Edit</button>
        <button onclick="onDelete(this)">Delete</button>
    `;
}

// EDIT DATA
function onEdit(e) {
    selectedRow = e.parentElement.parentElement;

    document.getElementById("fullname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("empcode").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}

// UPDATE DATA
function updateFormData(data) {
    selectedRow.cells[0].innerHTML = data.fullName;
    selectedRow.cells[1].innerHTML = data.empCode;
    selectedRow.cells[2].innerHTML = data.salary;
    selectedRow.cells[3].innerHTML = data.city;
}

// DELETE DATA
function onDelete(k) {
    if (confirm("Are you sure to delete this record?")) {
        let row = k.parentElement.parentElement;
        document.querySelector(".list tbody").deleteRow(row.rowIndex - 1);
        resetForm();
    }
}

// RESET FORM
function resetForm() {
    document.getElementById("fullname").value = "";
    document.getElementById("empcode").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}
