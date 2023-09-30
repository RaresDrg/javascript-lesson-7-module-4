/*Example 10 - practica: 

*/

/*
  ^Function declaration:
*/

function doSomething() {
  console.log("Something");
}
doSomething();


/*
  ^Function expression:
*/

const doOtherthing = function() {
  console.log("Something");
}
doOtherthing();


const doSomethingArrow = () => {     //* arrow function //
  console.log("Something");

  return 8
}
doSomethingArrow();


const result = doSomethingArrow;      //* folosim referinta catre functie // 

console.log(result)                   //* printeaza functia in sine (corpul ei). //
console.log(result());                //* printreaza rezultatul ( dar, este apelat si console.log --> care la randul ei, este o functie) //
 

// sau asa, tot pentru printarea rezultatului: //

const result2 = doSomethingArrow();   //* folosim rezultatul functiei //
console.log(result2)                  //* printreaza rezultatul ( dar, este apelat si console.log --> care la randul ei, este o functie) //


/*
  ^ Atunci cand o variabila are valoarea: o functie fara/cu paranteze:

  ^ fara: --> folosim referinta catre functie, pt. rez. apelam variabila rspectiva cu paranteze
  ^ cu:   --> folosim rezultatul functiei, deci apelam variabila respectiva fara paranteze
*/