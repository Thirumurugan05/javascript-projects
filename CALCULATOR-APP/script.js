const outputScreen= document.querySelector("#outputScreen");
function display(num){
    outputScreen.value += num;
}
function calculate(){
    try{
        outputScreen.value = eval(outputScreen.value)
    }
    catch(err){
        alert("invalid action")
    }
}

function Clear(){
    outputScreen.value=""
};

function Delete(){
    outputScreen.value = outputScreen.value.slice(0,-1);

}