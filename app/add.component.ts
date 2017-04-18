import {Component} from 'angular2/core'
import {AddService}from './add.service'
@Component({
    selector:'adder',
    template:`<div class="form-group container">
  <label for="usr">enter value to calculate</label>
  <div class="{{outputClass}}">{{calcOutput}}</div>
  <input type="text" class="form-control" [value] ="inputText" (input)="inputText=$event.target.value" >
  <input type ="button" class = "btn btn-primary" value="Calculate" (click)=onclick($event) >
</div>`,
providers:[AddService]
})
export class AdderComponent{
    inputText = "";
    calcOutput = "";
    outputClass="";
    addService = null;
    onclick($event){
        console.log("Input Entered --> " + this.inputText);//input given in the text box
        this.calcOutput = this.addService.calculate(this.inputText);//using the service method to calculate  the output
        //validating the input field
        if(isNaN(this.addService.calculate(this.inputText))){
            this.calcOutput = "Invalid input!!! Please correct the expression";
            this.outputClass = "alert alert-danger";
        }else{
            this.outputClass = "alert alert-success"
        }
    }
    constructor(addService: AddService){//injecting the service
        this.addService = addService;
    }
   
}

   