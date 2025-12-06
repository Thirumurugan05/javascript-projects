// [{"id":5454,"content":"this is sample 1"},{"id":2363,"content":"this is sample 2"},{"id":9833,
//     "content":"this is sample 3"},{"id":9928,"content":"this is sample 4" },{"id":3892,"content":"this is sample 5"}]


const containerElemnt=document.getElementById('container');
const btnAdd=document.getElementsByClassName('btn-add')[0];


function getAppStorage(){
    return JSON.parse(localStorage.getItem("thiru-app")||"[]");
};

getAppStorage().forEach(element =>{
 const textElement=createTextElement(element.id,element.content);
 containerElemnt.insertBefore(textElement,btnAdd);  
});

function createTextElement(id,content){
    const textElement=document.createElement('textarea');
    textElement.classList.add("sticky");
    textElement.value=content;
    textElement.placeholder="Enter your text here";

    
    textElement.addEventListener("change",()=>{
        ubdateNotes(id,textElement.value);
    })
    textElement.addEventListener("dblclick",()=>{
        const doDlete=confirm("Do You Want To Delete This Note");
        if(doDlete){
            const notes=getAppStorage();
            const ubdateElement=notes.filter((note)=>note.id!==id);
            saveNotes(ubdateElement);
            containerElemnt.removeChild(textElement);
        }
    })
    return textElement;
}

function addSticky(){
    const notes=getAppStorage();
    const notesObject={
        id:Math.floor(Math.random()*100000),
        content:""
    };


  const textElement=  createTextElement(notesObject.id,notesObject.content);
  containerElemnt.insertBefore(textElement,btnAdd);  
  notes.push(notesObject);
  saveNotes(notes);
}
 btnAdd.addEventListener("click",()=>addSticky());


 function saveNotes(notes){
    localStorage.setItem("thiru-app",JSON.stringify(notes));
 }


function ubdateNotes(id,content){
    const notes=getAppStorage();
    const ubdateElement=notes.filter((note)=>note.id===id)[0];
    ubdateElement.content=content;
    saveNotes(notes);

} 