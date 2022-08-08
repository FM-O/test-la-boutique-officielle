const inputButton = document.getElementById('sub-button');

const calcBiggestProduct = (chain, n) => {
console.log(chain)
console.log(n)

const chainToArray = chain.split('').map(v => parseInt(v))

//map pas nécessaire mais pour aller vite, foreach peut être mieux car val pas utilisé
const res = chainToArray.map((val, index) => {
    const currentValues = chainToArray.slice(index, index + n)

    return currentValues.reduce((acc, curr)=> {
        return acc * curr
    });
});

return Math.max(...res);
}

inputButton.addEventListener('click', () => {
const inputChain = document.getElementById('input-c').value;
const inputN = document.getElementById('input-n').value;

const biggestProduct = calcBiggestProduct(inputChain, parseInt(inputN));
document.getElementById('here').innerHTML = `Le plus gros produit des ${inputN} nombres qui se suivent de la chaine ${inputChain} est: ${biggestProduct.toString()}`
})
