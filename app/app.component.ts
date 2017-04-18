import {Component} from 'angular2/core';
import {AdderComponent} from './add.component';


@Component({
    selector: 'my-app',
    template:`<div class="container" ><h1>Hello Agular</h1></div><adder></adder>`,
    directives:[AdderComponent]

})
export class AppComponent {
}

