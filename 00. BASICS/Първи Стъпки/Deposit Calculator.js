function Deposit (suma, srok, lihva) {
    suma = Number(suma);
    srok = Number(srok);
    lihva = Number(lihva);
    let a = suma + suma * lihva / 100 * srok / 12; 

    console.log(a)

}

Deposit ("200", "3" , "5.7")
