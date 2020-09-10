function Area(a, b, c, d) {

   
   if (a==="square") {
       console.log( (b * b).toFixed(3));
   
    } else if (a==="rectangle") {
       console.log( (b * c).toFixed(3));

    } else if (a==="circle")   {
        console.log( (b * b * Math.PI).toFixed(3) );

    } else { (a==="triangle") 
        console.log ( (b * c / 2).toFixed(3));

    }
}

Area ("circle",
"6")
