const generatetxt2 = document.getElementById("generatetxt2")
const generatetxt3 = document.getElementById("generatetxt3")
const generatetxt4 = document.getElementById("generatetxt4")
const searchfield1 = document.getElementById("find1")
const searchfield2 = document.getElementById("find2")
const buttonf1 = document.getElementById("search1")

let make = "";
let model = "";
const createtodo = async (make,model) => {
let options = {
    method: "GET",
    headers: { 
        "X-Api-Key": "4JDKiH8r4VpH9hcDvBKBUXT5IbXESAV9O5KWINSL",
        "Content-type": "application/json" 
    },
}
try{
        let url = `https://api.api-ninjas.com/v1/cars?make=${make}&model=${model}`
        let response = await fetch(url, options)
        const data =  await response.json()
        // console.log(data)

        const {
            3: { drive,fuel_type, cylinders}
        
        } = data
        update(drive,fuel_type,cylinders);
    }
catch(error){
    console.log("Not Found")
}
};

function update( drive,fuel_type, cylinders){
    generatetxt2.innerText = "Drive : " + drive;
    generatetxt4.innerText = "Fuel Type : " + fuel_type;
    generatetxt3.innerText = "Cylinders : " + cylinders;
}
createtodo(make,model);


const find = (e) =>{
    e.preventDefault();
    make = searchfield1.value;
    model = searchfield2.value;
    createtodo(make,model);
}
buttonf1.addEventListener("click",find)