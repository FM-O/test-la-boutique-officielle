const chain = "1127839561";

const n = 5;

const chainToArray = chain.split('').map(v => parseInt(v))

//map pas nécessaire mais pour aller vite, foreach peut être mieux car val pas utilisé
const res = chainToArray.map((val, index) => {
    const currentValues = chainToArray.slice(index, index + n)

    return currentValues.reduce((acc, curr)=> {
        return acc * curr
    });
});

const biggestProduct = Math.max(...res);

console.log(biggestProduct)

document.addEventListener('DOMContentLoaded', () => {
document.getElementById('here').innerHTML = biggestProduct.toString()
})