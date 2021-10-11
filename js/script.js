let n = prompt( `Введите число` );

if ( n === null ) {
    alert( `Escape` );
} else if ( +n === 1 ) {
    alert( `Число 1 не является простым числом` );
} else if ( isNaN(+n) === true ) {
    alert(`Нужно было ввести число`)
} else {
    n = Number(n);
}

for ( let k = 2; k <= n; k++ ) {
    compute = n % k;    
    console.log(k);
    if ( k === n ) {
        alert(`true`);
        break;
    } else if ( compute === 0 ) {
        alert(`false`);
        break;
    }
}
