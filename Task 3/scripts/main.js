/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';


const button = document.querySelector(`#btn`);
const output = document.querySelector(`#output`);
const p = document.querySelector(`#message`); 
const cointainer = document.querySelector(`.output-cointainer`); 

button.addEventListener(`click`, () => {
    p.style.display = `none`;

    fetch(ENDPOINT)
    .then(res => res.json())
    .then(data => outputData(data))
    .catch(error = console.log(error))
    
    
    function outputData(data){
        data.forEach(element => {
            const card = document.createElement(`span`);
            const user = document.createElement(`h3`);
            const img = document.createElement(`img`);
            user.textContent = `User login: ${element.login}`;
            img.src = element.avatar_url;
            createImg(img);
            createCard(card);
            card.append(user, img);
            output.append(card);
        })     
    }
    
    function createCard(block){
        Object.assign(block.style, {
            backgroundColor: `grey`,
            border: `1px solid black`,
            margin: `20px`,
            textAlign: `center`,
            padding: `1rem`,
            maxWidth: `calc(100vw - (100vw - 100%))`,
            float: `left`,
        })
    }
    function createImg(picture){
        Object.assign(picture.style, { 
            width: "200px",
            height: "200px",
            objectFit: "cover",
            borderRadius: "50%",
            padding: `1rem`,
        })
    }  
    Object.assign(output.style, {
        display: `flex`,
        flexFlow: `row wrap`,
        justifyContent: `space-evenly`,
        alignItems: `center`,
        // padding: `1rem`,
    })
})
