System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AddService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AddService = (function () {
                function AddService() {
                }
                AddService.prototype.calculate = function (str) {
                    // Parsing  a calculation string into an array of numbers and operators
                    var calc = [], current = '';
                    for (var i = 0, va; va = str.charAt(i); i++) {
                        //checks weather the array contains the operator
                        if ('^*/+-'.indexOf(va) > -1) {
                            if (current == '' && va == '-') {
                                current = '-';
                            }
                            else {
                                calc.push(parseFloat(current), va);
                                current = '';
                            }
                        }
                        else {
                            current += str.charAt(i);
                        }
                    }
                    if (current != '') {
                        calc.push(parseFloat(current));
                    } //here given string is converted to array calc
                    // Perform a calculation expressed as an array of operators and numbers
                    var ops = [{ '^': function (a, b) { return Math.pow(a, b); } },
                        { '*': function (a, b) { return a * b; }, '/': function (a, b) { return a / b; } },
                        { '+': function (a, b) { return a + b; }, '-': function (a, b) { return a - b; } }], newVal = [], currentOps;
                    // Iterating the Ops Map to validate against the user input
                    for (var i = 0; i < ops.length; i++) {
                        for (var j = 0; j < calc.length; j++) {
                            if (ops[i][calc[j]]) {
                                currentOps = ops[i][calc[j]];
                            }
                            else if (currentOps) {
                                // Invoking the actual function associated to the operator (^ * + - /)
                                newVal[newVal.length - 1] =
                                    currentOps(newVal[newVal.length - 1], calc[j]);
                                currentOps = null;
                            }
                            else {
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
                    }
                    else {
                        return calc[0];
                    }
                };
                AddService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], AddService);
                return AddService;
            }());
            exports_1("AddService", AddService);
        }
    }
});
//# sourceMappingURL=add.service.js.map