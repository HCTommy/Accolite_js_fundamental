
let submitButton=document.getElementById("showNameButton");

submitButton.onclick=function(){
    let firstName=document.getElementById("firstName").value;
    let lastName=document.getElementById("lastName").value;
    let name=document.getElementById("name");
    name.innerHTML='<div>'+firstName+' '+lastName+'</div>'
}
function changeColorToYellow(){
    document.getElementById("name").style.background="yellow"
}
function changeColorToWhite(){
    document.getElementById("name").style.background="white"
}


let redirectButton=document.getElementById("redirectButton");

redirectButton.onclick=function(){
    let firstName2=document.getElementById("firstName2").value;
    let lastName2=document.getElementById("lastName2").value;
    let email2=document.getElementById("email2").value;
    let date2=document.getElementById("date2").value;
    let age2=document.getElementById("age2").value;
    let designation2=document.getElementById("designation2").value;
    let address2=document.getElementById("address2").value;
    let obj={
        firstName:firstName2,
        lastName:lastName2,
        email:email2,
        date:date2,
        age:age2,
        designation:designation2,
        address:address2,
    }
    console.log("result="+JSON.stringify(obj))
    window.location.href="./newPage.html?"+JSON.stringify(obj)
    
    

}



