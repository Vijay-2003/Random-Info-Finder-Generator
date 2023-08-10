const txt2 = document.getElementById("txt2")
const txt3 = document.getElementById("txt3")
const txt4 = document.getElementById("txt4")
const txt5 = document.getElementById("txt5")
const txt6 = document.getElementById("txt6")
const find3 = document.getElementById("find3")
const search3 = document.getElementById("search3")
let p = "earth";
const planets = async (p) => {
   let options = {
    method : "GET",
    headers : {
        "X-Api-Key": "4JDKiH8r4VpH9hcDvBKBUXT5IbXESAV9O5KWINSL",
        "Content-type" : "application/json"
    },   
}
try{
    const url = `https://api.api-ninjas.com/v1/planets?name=${p}`;
    const response = await fetch(url, options);
    const data = await response.json();
    // console.log(data)
    const {
        0: {mass,radius,temperature,period,distance_light_year}
    } = data
    update(mass,radius,temperature,period,distance_light_year);

}catch(error){
    console.log(alert("Planet not found"))
}
};

function update(mass,radius,temperature,period,distance_light_year){
    txt2.innerText = "Mass : "+mass;
    txt3.innerText = "Radius : "+radius;
    txt4.innerText = "Temperature : "+temperature;
    txt5.innerText = "Period : "+period;
    txt6.innerText = "Distance Light year : "+distance_light_year;
}
planets(p);

const find = (e)=> {
    e.preventDefault();
    p = find3.value;
    planets(p);
}
search3.addEventListener("click",find);