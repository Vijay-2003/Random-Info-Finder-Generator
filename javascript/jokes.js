const generatetxt = document.getElementById("generatetxt")
const searchfield = document.getElementById("find")
const buttonf = document.getElementById("search")


let limit = "";
const create = async (limit) => {
    let options = {
        method: "GET",
        headers: { 
            "X-Api-Key": "4JDKiH8r4VpH9hcDvBKBUXT5IbXESAV9O5KWINSL",
            "Content-type": "application/json" 
        },
    }
    try{
        let url = `https://api.api-ninjas.com/v1/jokes?limit=${limit}`
        let response = await fetch(url, options)
        const data =  await response.json()
        // generatetxt.innerHTML = data[0].joke
        // console.log(data)

        const {
            0: {joke}
        } = data;

        update(joke);
        }
        catch(error)
        {
        console.log("Not Found")
        }

    };
    function update(jokes){
        generatetxt.innerText = jokes;
    }
    create(limit);

    const find = (e) => 
    {
    e.preventDefault();
    limit =  parseInt(searchfield.value);
    create(limit);
    }
buttonf.addEventListener("click",find);