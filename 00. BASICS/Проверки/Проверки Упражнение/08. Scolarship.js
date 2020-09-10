function scolarship(dohod, uspeh, minZ) {
    dohod = Number(dohod);
    uspeh = Number(uspeh);
    minZ = Number(minZ);
    let stipendiaZaUpeh = false;
    let socialnaStipendia = false;
    let pariZaUpeh = Number((uspeh * 25).toFixed(0));
    let pariSocial = Number((minZ * 0.35).toFixed(0));

    if (dohod >= minZ && uspeh < 5.5) {
        console.log(`You cannot get a scholarship!`)
    }
    if (uspeh < 4.5) {
        console.log(`You cannot get a scholarship!`)
    } 

    if (dohod < minZ && uspeh >= 4.5) {
        socialnaStipendia = true;
    }  
    if (uspeh >= 5.50) {
        stipendiaZaUpeh = true;        
    } 


    if (stipendiaZaUpeh && socialnaStipendia === false) {
        console.log(`You get a scholarship for excellent results ${(uspeh * 25).toFixed(0)} BGN`)
    }
    if (socialnaStipendia && stipendiaZaUpeh === false) {
        console.log(`You get a Social scholarship ${(minZ * 0.35).toFixed(0)} BGN`)
    }
   
    if (stipendiaZaUpeh && socialnaStipendia && pariSocial > pariZaUpeh) {
        console.log(`You get a Social scholarship ${(pariSocial).toFixed(0)} BGN`)
    } 
     if (stipendiaZaUpeh && socialnaStipendia && pariZaUpeh > pariSocial) {
        console.log(`You get a scholarship for excellent results ${(pariZaUpeh).toFixed(0)} BGN`)
    }

}

scolarship("300.00",
"5.65",
"420.00")