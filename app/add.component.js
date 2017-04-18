System.register(['angular2/core', './add.service'], function(exports_1, context_1) {
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
    var core_1, add_service_1;
    var AdderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (add_service_1_1) {
                add_service_1 = add_service_1_1;
            }],
        execute: function() {
            AdderComponent = (function () {
                function AdderComponent(addService) {
                    this.inputText = "";
                    this.calcOutput = "";
                    this.outputClass = "";
                    this.addService = null;
                    this.addService = addService;
                }
                AdderComponent.prototype.onclick = function ($event) {
                    console.log("Input Entered --> " + this.inputText); //input given in the text box
                    this.calcOutput = this.addService.calculate(this.inputText); //using the service method to calculate  the output
                    //validating the input field
                    if (isNaN(this.addService.calculate(this.inputText))) {
                        this.calcOutput = "Invalid input!!! Please correct the expression";
                        this.outputClass = "alert alert-danger";
                    }
                    else {
                        this.outputClass = "alert alert-success";
                    }
                };
                AdderComponent = __decorate([
                    core_1.Component({
                        selector: 'adder',
                        template: "<div class=\"form-group container\">\n  <label for=\"usr\">enter value to calculate</label>\n  <div class=\"{{outputClass}}\">{{calcOutput}}</div>\n  <input type=\"text\" class=\"form-control\" [value] =\"inputText\" (input)=\"inputText=$event.target.value\" >\n  <input type =\"button\" class = \"btn btn-primary\" value=\"Calculate\" (click)=onclick($event) >\n</div>",
                        providers: [add_service_1.AddService]
                    }), 
                    __metadata('design:paramtypes', [add_service_1.AddService])
                ], AdderComponent);
                return AdderComponent;
            }());
            exports_1("AdderComponent", AdderComponent);
        }
    }
});
//# sourceMappingURL=add.component.js.map