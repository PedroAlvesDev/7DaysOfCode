// let lista = [];

// let msg = prompt('Deseja adicionar uma comida na sua lista de compras? Respoda com SIM ou NÃO.');
// while (msg == 'SIM') {
//     let comida =lista.push(prompt('Qual comida deseja inserir?'));
//     msg = prompt('Deseja adicionar mais um item na sua lista de compras?');
// };

// alert(lista);

let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];

let msg = prompt('Deseja adicionar uma comida na sua lista de compras? Respoda com SIM ou NÃO.');
while (msg == 'SIM') {
    let comida = (prompt('Qual comida deseja inserir?'));
    let categoria = prompt('Em qual categoria essa comida se encaixa? (Frutas, Laticínios, Congelados ou Doces)');

    if (categoria == 'Frutas') {
        comida = frutas.push(`${comida}`);
    } else if (categoria == 'Laticinios') {
        comida = laticinios.push(`${comida}`);
    } else if (categoria == 'Congelados') {
        comida = congelados.push(`${comida}`);
    } else if (categoria == 'Doces') {
        comida = doces.push(`${comida}`);
    } else {
        alert('Categoria inválida!');
    };

    msg = prompt('Deseja adicionar mais um item na sua lista de compras?');
};

if (msg == 'NÃO') {
    console.log(frutas, laticinios, congelados, doces);
    alert(`Frutas: ${frutas}`), `Laticínios: ${laticinios}`, `Congelados: ${congelados}`, `Doce: ${doces}`;
    // alert(`Laticínios: ${laticinios}`);
    // alert(`Congelados: ${congelados}`);
    // alert(`Doce: ${doces}`);
};