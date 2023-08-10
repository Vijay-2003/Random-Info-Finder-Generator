const inputs = document.getElementById("input");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener('click' , () => {
    let options = {
        method: 'GET',
        headers:{
            'Authorization' : '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',
            
        }
}
    let din = inputs.value;
    let url = `https://api.github.com/users/`;
    fetch(url + din,options)
    .then((response) => response.json())
    .then((data) => {
        // console.log(data)
        // console.log(data.avatar_url);
        // console.log(data.public_repos);
        // console.log(data.location);
        // console.log(data.name);
        // console.log(data.login);
        // console.log(data.bio);
        // console.log(data.followers);
        // console.log(data.html_url);

    // let Response = await fetch(url + ajay,options)
    // let data = await Response.json()
    // console.log(data)
    if(din.length === 0)
    {
        result.innerHTML = `
        <div class="errorh">
        <h1 id="errorh" style="color:red;">The input field cannot be empty!</h1>
        </div>
        `;
    }
    else
    {   
        if(din !== data.login)
        {
            result.innerHTML = `
            <div class="errorh">
            <h1 id="errorh" style="color:red;">User doesn't exist!</h1>
            </div>
            `;
        }
        else
        {
        result.innerHTML = `
        <style>
        #forms{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            margin: auto;
            margin-top: 1rem;
            border: darkblue solid;
            border-radius: 20px;
            padding: 15px;
            width: 25%;
            background-color: blue;
        }
        </style>
        <div id="img-container">
        <img src="${data.avatar_url}" alt="Not Found" id="imgs">
        </div>
        <div id="mains">
            <div id="name"><b id="b">Name : </b>${data.name}</div>
            <div id="login"><b id="b">Login : </b>${data.login}</div>
            <div id="fol"><b id="b">Followers : </b>${data.followers}</div>
            <div id="bio"><b id="b">Bio : </b>${data.bio}</div>
            <div id="btn-container"><b id="b">Github Link :</b>
                <button id="btns"><a id="links" href="${data.html_url}" target="window2"><bolder>Visit Github</bolder></a></button>
            </div>
            <div id="repo"><b id="b">Number Of Repositories : </b>${data.public_repos}</div>
            <div id="loc"><b id="b">Location : </b>${data.location}</div>
        </div>
        `;
        }   
    }
    })
});
