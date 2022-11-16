var url=location.search
url=decodeURI(url)
if(url.indexOf("?")!=-1){
    var str = url.substring(1);
}
console.log(str)
var obj = JSON.parse(str)
const obj2={
    state: 'test',
    country: 'test',
    pincode: '12312',
}
for (attr in obj2){
    obj[attr]=obj2[attr]
}
const {firstName,lastName,email,date,age,designation,address,state,country,pincode}=obj;
console.log(obj)

document.getElementById("firstName3").innerHTML='<span id="firstName3">'+firstName+'</span>'
document.getElementById("lastName3").innerHTML='<span id="lastName3">'+lastName+'</span>'
document.getElementById("email3").innerHTML='<span id="email3">'+email+'</span>'
document.getElementById("date3").innerHTML='<span id="date3">'+date+'</span>'
document.getElementById("age3").innerHTML='<span id="age3">'+age+'</span>'
document.getElementById("designation3").innerHTML='<span id="designation3">'+designation+'</span>'
document.getElementById("address3").innerHTML='<span id="address3">'+address+'</span>'
document.getElementById("state3").innerHTML='<span id="address3">'+state+'</span>'
document.getElementById("country3").innerHTML='<span id="address3">'+country+'</span>'
document.getElementById("pincode3").innerHTML='<span id="address3">'+pincode+'</span>'
