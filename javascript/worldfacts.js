const Factword = document.getElementById("Factword")
const find = document.getElementById("find")
const search = document.getElementById("search")


let limit = "";
const getfacts = async (limit) => {
    let options = {
        method: "GET",
        headers: {
            "X-Api-Key": "4JDKiH8r4VpH9hcDvBKBUXT5IbXESAV9O5KWINSL",
            "Content-type": "application/json"
        },
    }
    try{
        const url = `https://api.api-ninjas.com/v1/facts?limit=${limit}`;
        const response = await fetch(url,options)
        const data = await response.json()
        // console.log(data);

        const {
            0: {fact}
        } = data;
        update(fact);
    }
    catch(error){
        console.log("not found")
    }
};

function update(fact){
    Factword.innerText = fact;
}
getfacts(limit);

const finds = (e) => {
    e.preventDefault();
    limit = parseInt(find.value);
    getfacts(limit);
}

search.addEventListener("click", finds);