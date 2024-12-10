// const a = parseFloat(prompt('Введите коэффициент a:'));
// const b = parseFloat(prompt('Введите коэффициент b:'));
// const c = parseFloat(prompt('Введите коэффициент c:'));



// let a = document.getElementById('A').value;
// console.log(a)

// let b =  document.getElementById('B').value;
// console.log(b)

// let c =  document.getElementById('C').value;
// console.log(c)




// const D = (b * b) - (4 * a * c);
// const X1 = (-b - Math.sqrt(D)) / (2 * a);
// const X2 = (-b + Math.sqrt(D)) / (2 * a);

// if (D === 0) {
// const  X1 = (-b ) /2*a
//     document.write('D=0,    X1=  ',X1)
//    }

    
// else if (D < 0) {
//     document.write('нет корней')
// }
// else if ( D > 0) {
//     document.write('D = ', D);
//     document.write('   X1= ', X1,',');
//     document.write('   X2= ', X2);

// }

// document.getElementById("soso").innerText = "Текст добавлен из JS";



function checkForm (el) {
    
   

    var a = el.A.value;
    document.write( '  a= ',+a)
     
    var b = el.B.value;
    document.write('  b= ',+b)

    var c = el.C.value;
    document.write('  c= ',+c)

   
    var D = (b * b) - (4 * a * c)
    var X1 = (-b - Math.sqrt(D)) / (2 * a);
    var X2 = (-b + Math.sqrt(D)) / (2 * a);
    
    if (D === 0) {
    var  X1 = (-b ) /2*a
    document.write('   D=0,    X1=  ',X1)
    }
    
    
    else if (D < 0) {
    document.write(' нет корней')
    }
    else if ( D > 0) {
    document.write(' D = ', D);
    document.write('   X1= ', X1,',');
    document.write('   X2= ', X2);
    
    }
    
   

    return false;


}




