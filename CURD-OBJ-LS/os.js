document.addEventListener("DOMContentLoaded", function(){
    const editBtns=document.querySelectorAll(".btnEdit" , editData);
    const model=document.querySelector(".model");
    const closeBtn=document.querySelector(".close");
    const tableBody=document.querySelector("#dataList");

    loadStoredData()

    editBtns.forEach((btn)=>{
        btn.addEventListener("click", editData)
    })


    
    function editData(){
        model.style.display="block"
    }


// using to close the model using close btn
    closeBtn.addEventListener("click", function(){
        model.style.display="none"
     })


//using model window click
     window.addEventListener("click", function(e){
        if(e.target==model){
            model.style.display="none"
        }
     })


     function loadStoredData(){
        const storedData=JSON.parse(localStorage.getItem("myData")) || []
        storedData.forEach(function (data,index){
            const row=document.createElement("tr");
            row.innerHTML=`
            
            <td>${data.name}</td>
            <td>${data.age}</td>
            <td>${data.gender}</td>
            <td><button data-index="${index}" class="btnEdit">Edit</button></td>
            <td><button data-index="${index}" class="btnDelete">Delete</button></td>
            
            
            `;
             tableBody.appendChild(row)

        });
     };



});





// [{"name":"tiya", "age" : 12 , "gender" : "female"},
//     {"name":"riya", "age" : 52 , "gender" : "female"}
// ]