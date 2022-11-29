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
            const card = document.createElement(`div`);
            const user = document.createElement(`h3`);
            const img = document.createElement(`img`);
            user.textContent = `User login: ${element.login}`;
            img.src = element.avatar_url;
            createImg(img);
            card.append(user, img);
            createCard(card);
            output.append(card);
        })     
    }
    
        Object.assign(output.style, {
            display: `flex`,
            flexDirection: `column`,
        })


    function createCard(block){
        Object.assign(block.style, {
            backgroundColor: `grey`,
            border: `1px solid black`,
            margin: `20px auto`,
            textAlign: `center`,
            padding: `1rem`,
            // minWidth: `calc(100vw - (100vw - 100%))`,
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
})
