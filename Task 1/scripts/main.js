/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */


const form = document.querySelector(`form`);
const output = document.querySelector(`#output`);

form.addEventListener(`submit`, (e) => {
    e.preventDefault();
    const kg = +e.target.search.value;

    const lb = document.createElement(`h1`);
    lb.textContent = kg * 2.2046 + ` lb`;
    Object.assign(lb.style, {
        padding: `2rem`,
        textAlign: `center`
    })
    
    const g = document.createElement(`h1`);
    g.textContent = kg / 0.0010000 + ` g`;
    Object.assign(g.style, {
        padding: `2rem`,
        textAlign: `center`
    })
    
    const oz = document.createElement(`h1`);
    oz.textContent = kg * 35.274 + ` oz`;
    Object.assign(oz.style, {
        padding: `2rem`,
        textAlign: `center`
    })
    
    output.append(lb, g, oz);
})