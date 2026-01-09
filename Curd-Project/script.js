
var selectedRow=null;
function onFormSubmit(e){
    e.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }else{
        updateRecord(formData);
    }
    resetForm();
    //Prevent the form from submitting

}

//Retrive data from form and store in object
//and return the object
function readFormData(){
    var formData={};
    formData["productCode"]=document.getElementById("productCode").value;
    formData["productName"]=document.getElementById("Product").value;
    formData["productPrice"]=document.getElementById("PerPrice").value;
    formData["productQuantity"]=document.getElementById("ProductQuantity").value;   
    return formData;
}

//Insert the data into the table

function insertNewRecord(data){
    var table =document.getElementById("store-list").getElementsByTagName('tbody')[0];
    var newRow=table.insertRow(table.length);
    var cell1=newRow.insertCell(0);
       cell1.innerHTML=data.productCode;
    var cell2=newRow.insertCell(1);
    cell2.innerHTML=data.productName;
    var cell3=newRow.insertCell(2);
    cell3.innerHTML=data.productPrice;
    var cell4=newRow.insertCell(3);
    cell4.innerHTML=data.productQuantity;
    var cell5=newRow.insertCell(4);
    cell5.innerHTML=`<button onClick='onEdit(this)'>Edit</button>
                     <button  onClick='onDelete(this)'>Delete</button>`;
}

//Edit the data in the table
function onEdit(event){
    selectedRow=event.parentElement.parentElement;
    document.getElementById("productCode").value=selectedRow.cells[0].innerHTML;
    document.getElementById("Product").value=selectedRow.cells[1].innerHTML;
    document.getElementById("PerPrice").value=selectedRow.cells[2].innerHTML;
    document.getElementById("ProductQuantity").value=selectedRow.cells[3].innerHTML;
}


//Update the data in the table

function updateRecord(formData){
    selectedRow.cells[0].innerHTML=formData.productCode;
    selectedRow.cells[1].innerHTML=formData.productName;
    selectedRow.cells[2].innerHTML=formData.productPrice;
    selectedRow.cells[3].innerHTML=formData.productQuantity;

}

//Delete the data from the table
function onDelete(td){
    if(confirm('Are you sure you want to delete this record?')){
        row=td.parentElement.parentElement;
        document.getElementById("store-list").deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the form
function resetForm(){
    document.getElementById("productCode").value="";
    document.getElementById("Product").value="";
    document.getElementById("PerPrice").value="";
    document.getElementById("ProductQuantity").value="";
    selectedRow=null;
}