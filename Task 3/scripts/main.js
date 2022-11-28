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
            const url = document.createElement(`h5`);
            user.textContent = `User login: ${element.login}`;
            url.textContent = `User url: ${element.avatar_url}`;
            card.append(user, url);
            createCard(card);
            output.append(card);
        })
        
    }
    
    
    function createCard(block){
        Object.assign(block.style, {
            backgroundColor: `grey`,
            border: `1px solid black`,
            width: `500px`,
            margin: `20px auto`,
            textAlign: `center`,
            float: `center`       
        })
    }
    
})
