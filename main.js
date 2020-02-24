






var n= prompt("Donner le nombre de ligne de votre pyramid:");

/*

  n = readline();
if ( n < 0) or ( n > 25)
{
 print(" Il faut entrer un nombre entre 1 et 25");
}
else{*/

    for (var i = 0; i < n; i++) {
    var s = '';
    for (var j = 0; j < n-i; j++) {
      s = s + ' ';
    }
    for (var k = 1; k <= (2*i+1); k++) {
      s = s + '#';
    }
    console.log(s);
    }

  

  
  
  
   












     
    
   



   

