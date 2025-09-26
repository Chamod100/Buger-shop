AOS.init();
console.log("pasd");
const id = "cf6369e203f546f896c70145251308";


let searchCity=document.getElementById("txtSearch");

searchCity.addEventListener("keypress",e=>{
if(e.key=='Enter'){
console.log(searchCity.value);
let city =  searchCity.value;
callApi(city);
}
}) 



async function callApi(city) {
    fetch(`http://api.weatherapi.com/v1/current.json?key=${id}&q=${city}&aqi=no`)
        .then(response => response.json())
        .then(data => {
            setData(data);
        });
}



function setData(data){
document.getElementById("city-Name").innerText = data.location.name;
document.getElementById("status-img").src = data.current.condition.icon;function setData(data){
    document.getElementById("city-Name").innerText = data.location.name;
    document.getElementById("status-img").src = data.current.condition.icon;
}
}