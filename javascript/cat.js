let fact1text = document.getElementById("fact1text")
let fact1btn = document.getElementById("fact1btn")
const url = "https://catfact.ninja/fact"    

fact1btn.addEventListener("click", function fact1f(){
    fetch(url).then((response) => {
        return response.json()
    }).then((data) => {
        fact1text.innerText = `${data.fact}`
        // console.log(data)
    }).catch((error1) => {
        console.log("error")
    }).finally((message1) => {
        console.log("Working")
    })   
}   
);