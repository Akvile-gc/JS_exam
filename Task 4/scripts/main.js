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
        .catch(error => console.log(error)),

    function outputData(data){
        data.forEach(car => {

            const brand = document.createElement(`h1`);
            brand.textContent = car.brand;
            output.append.brand;

            
            // const card = document.createElement(`div`);
            // const brand = document.createElement(`h1`);
            // const model = document.createElement(`p`);
            // brand.textContent = car.brand;
            // model.textContent = element.models;
            // card.append(brand, model);
            // createCard(card);
            // output.append(card);
        })

    // function createCard(block){
    //     Object.assign(block.style, {
    //         backgroundColor: `grey`,
    //         border: `1px solid black`,
    //         width: `500px`,
    //         margin: `20px auto`,
    //         textAlign: `center`,
    //         float: `center`       
    //     })
    // }        
    }}