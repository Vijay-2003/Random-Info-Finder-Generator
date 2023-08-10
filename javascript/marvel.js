const searchbox = document.getElementById("searchbox")
const search = document.getElementById("search")
const result = document.getElementById("result")

search.addEventListener("click",async () => {
    let options = {
                method: "GET",
                headers : {
                    'X-RapidAPI-Key': '770c9e5ebdmsh5132a481cc431fep18f7a3jsn5bb845ba0219',
                    'X-RapidAPI-Host': 'marvel-heroic-api-unlock-the-mcu-legendary-characters.p.rapidapi.com',
                    'Content-Type' : 'application/json',
                },
    }
    let n = searchbox.value;
    let url = `https://marvel-heroic-api-unlock-the-mcu-legendary-characters.p.rapidapi.com/name?q=${n}`
    console.log(url)
        let response = await fetch(url,options)
        let data =  await response.json();
        // console.log(data)
        // // console.log(Object.keys(data[0].appearances)[1]);
        // console.log(Object.values(data[0].allies).toString().split(",").join(", "))
        // // console.log(Object.values(data[0].appearances[Object.keys(data[0].appearances)].movie))
        // // console.log(data[0].appearances[Object.keys(data[0].appearances)].movie)
        // console.log(data[0].appearances)
        // console.log(data[0].firstAppearance)
        // console.log(data[0].name)
        // console.log(Object.values(data[0].powers).toString().split(",").join(", "))
        // console.log(Object.values(data[0].quotes).toString().split(",").join(" "))
        // // console.log(data[0].quotes[0])
        // // console.log(data[0].quotes[1])
        // console.log(Object.values(data[0].aka).toString().split(",").join(", "))
        // console.log(Object.values(data[0].enemies).toString().split(",").join(", "))
        // console.log(data[0].creator)
        // console.log(data[0].description)
        result.innerHTML = `
        <hr style="width: 100%;border-color: black;border-width: 0.1rem;border-style: double;">
        <h3>Name : ${data[0].name} (${Object.values(data[0].aka).toString().split(",").join(", ")})</h3>
        <h4>Creator : ${data[0].creator}</h4>
        <h4>First Appearance : ${data[0].firstAppearance}</h4>
        <h4>Description : ${data[0].description}</h4>
        <h4>Allies : ${Object.values(data[0].allies).toString().split(",").join(", ")}</h4>
        <h4>Powers : ${Object.values(data[0].powers).toString().split(",").join(", ")}</h4>
        <h4>Quotes : ${Object.values(data[0].quotes).toString().split(",").join(", ")}</h4>
        <h4>Enemies : ${Object.values(data[0].enemies).toString().split(",").join(", ")}</h4>
        <hr style="width: 100%;border-color: black;border-width: 0.1rem;border-style: double;">
        `;
})