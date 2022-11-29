/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const output = document.querySelector(`#output`);

window.onload = () => {
    fetch(ENDPOINT)
        .then(res => res.json())
        .then(data => outputData(data))
        .catch(error => console.log(error));

    function outputData(data){
        data.forEach(car => {
            const card = document.createElement(`div`);
            const carBrand = document.createElement(`h1`);
            carBrand.style.marginTop = `0`;
            const mod = car.models;
            carBrand.textContent = car.brand;
            createCard(card);
            card.append(carBrand);
            mod.forEach(type => {
                const carModel = document.createElement(`p`);
                carModel.append(type);
                card.append(carModel);
            })
            output.append(card);

        })

        function createCard(block){
            Object.assign(block.style, {
                border: `1px solid black`,
                margin: `20px auto`,
                textAlign: `center`,
                padding: `1rem`,
            })
        }
    }
    
    Object.assign(output.style, {
        display: `flex`,
        flexFlow: `row wrap`,
        textAlign: `center`,
        padding: `1rem`,
    })
}