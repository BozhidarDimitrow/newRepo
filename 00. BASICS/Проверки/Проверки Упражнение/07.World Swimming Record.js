function swimming(rec, m, sk) {
    rec = Number(rec);
    m = Number(m);
    sk = Number(sk);
   
    let ivan = m * sk

    let supr = Math.floor(m / 15);
    let dopylnitelno = supr * 12.5
    let vreme = ivan + dopylnitelno;

    if (vreme < rec) {
        console.log (`Yes, he succeeded! The new world record is ${(vreme).toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${(vreme - rec).toFixed(2)} seconds slower.`)
    }
}


swimming("10464",
"1500",
"20")