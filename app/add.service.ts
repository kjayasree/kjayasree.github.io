import {Injectable} from 'angular2/core'
@Injectable()
export class AddService{
     calculate(str){
// Parsing  a calculation string into an array of numbers and operators
    var calc = [],
        current = '';
    for (var i = 0, va; va = str.charAt(i); i++) {
        //checks weather the array contains the operator
        if ('^*/+-'.indexOf(va) > -1) {
            if (current == '' && va == '-') {
                current = '-';
            } else {
                calc.push(parseFloat(current), va);
                current = '';
            }
        } else {
            current += str.charAt(i);
        }
    }
    if (current != '') {
        calc.push(parseFloat(current));
    }//here given string is converted to array calc


    // Perform a calculation expressed as an array of operators and numbers
    var ops = [{'^': (a, b) => Math.pow(a, b)},
               {'*': (a, b) => a * b, '/': (a, b) => a / b},
               {'+': (a, b) => a + b, '-': (a, b) => a - b}],
        newVal = [],
        currentOps;
        // Iterating the Ops Map to validate against the user input
    for (var i = 0; i < ops.length; i++) {
        for (var j = 0; j < calc.length; j++) {
            if (ops[i][calc[j]]) {
                currentOps = ops[i][calc[j]];
            } else if (currentOps) {
                // Invoking the actual function associated to the operator (^ * + - /)
                newVal[newVal.length - 1] = 
                    currentOps(newVal[newVal.length - 1], calc[j]);
                currentOps = null;
            } else {
                newVal.push(calc[j]);
            }
            console.log(newVal);
        }
        calc = newVal;
        newVal = [];
    }
    if (calc.length > 1) {
        console.log('Error: unable to resolve calculation');
        return calc;
    } else {
        return calc[0];
    }
    }

}