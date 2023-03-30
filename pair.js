function filtreNombrespairs(tab) {
    
    let nombrespairs = tab.filter(nombre => nombre % 2 == 0);
    return nombrespairs;
}

console.log( filtreNombrespairs( [1, 2, 3, 4, 5, 6, 7, 8, 9]));