
function filtreNombresImpairs(tab) {
    
    let nombresImpairs = tab.filter(nombre => nombre % 2 !== 0);
    return nombresImpairs;
}

console.log( filtreNombresImpairs( [1, 2, 3, 4, 5, 6, 7, 8, 9]));
