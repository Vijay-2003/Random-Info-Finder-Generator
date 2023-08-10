        const search = document.getElementById("search")
        const inputs = document.getElementById("input")
        const result = document.getElementById("result")
        search.addEventListener("click", () => {
            let name = inputs.value;
            let url = `https://restcountries.com/v3.1/name/${name}?fullText=true`;
            // console.log(url)
            fetch(url)
            .then((response) => {
               return response.json()
            })
            .then((data) => {
                // console.log(data)
                // console.log(data[0].capital)
                // console.log(data[0].continents)
                // console.log(data[0].flags.svg)
                // console.log(data[0].coatOfArms.svg)
                // console.log(data[0].maps.openStreetMaps)
                // console.log(data[0].maps.googleMaps)
                // console.log(Object.keys(data[0].currencies)[0]);
                // console.log(data[0].currencies[Object.keys(data[0].currencies)].name)
                // console.log(data[0].currencies[Object.keys(data[0].currencies)].symbol)
                // console.log(Object.values(data[0].currencies)[0])
                // console.log(Object.values(data[0].languages).toString().split(",").join(", "))
                // console.log(data[0].name.common)
                // console.log(data[0].name.official)
                // console.log(data[0].borders)
                // console.log(data[0].region)
                // console.log(data[0].subregion)
                // console.log(data[0].timezones)
                // console.log(Object.keys(data[0].translations)[0])
                // console.log(data[0].translations[Object.keys(data[0].translations)].common)
                // console.log(data[0].population)
                // console.log(data[0].area)
                
                result.innerHTML = `
                    <div id="size">
                        <img src="${data[0].flags.png}" class="size" alt="Flag Not found or country doesn't have a Flag"></img>          
                    </div>


                    <div id="ap">
                        
                            <h3>Area : ${data[0].area}</h3>
                            <h3 id="mar">Population : ${data[0].population}</h3>
                                
                    </div>    
                    
                    <hr style="width: 95%;border-width: 0.1rem;border-color: black;">
                    
                    <div id="Primary">   
                    <div> 
                        <div>   
                            <p class="cname"><span id="sp">Country Name : </span>${data[0].name.common}</p>
                            <p class="official"><span id="sp">Official Name : </span>${data[0].name.official}</p>
                        </div>
                        <p class="capital"><span id="sp">Capital : </span>${data[0].capital}</p>
                        <p class="continent"><span id="sp">Continent : </span>${data[0].continents}</p> 
                        <div>
                            <p class="region"><span id="sp">Region : </span>${data[0].region}</p>        
                            <p class="subregion"><span id="sp">Subregion : </span>${data[0].subregion}</p>
                        </div>
                    </div>
                        <div id="coatarm">
                            <img src="${data[0].coatOfArms.svg}" alt="Symbol(CoatOfArms) Not found or country doesn't has a symbol"></img>
                        </div>
                    </div>

                    <hr style="width: 95%;border-width: 0.1rem;border-color: black;">

                    <div id="secondary">
                        <p class="currency"><span id="sp">Currency : </span>${Object.keys(data[0].currencies)[0]} - ${data[0].currencies[Object.keys(data[0].currencies)].name}&emsp;(${data[0].currencies[Object.keys(data[0].currencies)].symbol})</p>
                        <p class="lang"><span id="sp">Languages : </span>${Object.values(data[0].languages).toString().split(",").join(", ")}</p>
                        <p class="bor"><span id="sp">Borders : </span>${data[0].borders}</p>
                        <div id="timezones">
                        <p class="timezones"><span id="sp">Timezone : </span>${data[0].timezones[0]}</p>
                        </div>
                        <p><span id="sp">Postal Code : </span>[Format - ${data[0].postalCode.format}]</p>
                    </div>

                    <hr style="width: 95%;border-width: 0.1rem;border-color: black;">

                    <div id="maps">
                        <div id="maph" style="text-decoration: underline;text-underline-offset: 4px;">Map Link : </div>
                    <div id="maps2">
                        <a href="${data[0].maps.googleMaps}" id="google" target="window2">Google Map</a>
                        <a href="${data[0].maps.openStreetMaps}" id="street" target="window2">Open Street Maps</a>
                    </div>
                    </div>
                    `;   
            })
        })