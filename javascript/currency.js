const searchbox1 = document.getElementById("searchbox1")
    const searchbox2 = document.getElementById("searchbox2")
    const searchbox3 = document.getElementById("searchbox3")
    const search = document.getElementById("search")
    const result = document.getElementById("result")

    search.addEventListener("click", async() => {
        let options = {
            method : "GET",
            headers : {
                'X-API-Key' : '4JDKiH8r4VpH9hcDvBKBUXT5IbXESAV9O5KWINSL',
                'Content-Type' :  'application/json',
            }
        }
        let datain1 = searchbox1.value;
        let datain2 = searchbox2.value;
        let datain3 = parseInt(searchbox3.value);
        let url = `https://api.api-ninjas.com/v1/convertcurrency?have=${datain1}&want=${datain2}&amount=${datain3}`
        // console.log(url)
        let response = await fetch(url,options)
        let data = await response.json()
        // console.log(data)
        // console.log(data.old_amount)
        // console.log(data.old_currency)
        // console.log(data.new_currency)
        // console.log(data.new_amount)
        result.innerHTML = `
            <div><span id="h">Old Currency &emsp;: &emsp;</span>${data.old_currency}</div>
            <div><span id="h">Old Amount &emsp;: &emsp;</span>${data.old_amount}</div>
            <div><span id="h">New Currency &emsp;: &emsp;</span>${data.new_currency}</div>
            <div><span id="h">New Amount &emsp;: &emsp;</span>${data.new_amount}</div>
        
        `;
    })