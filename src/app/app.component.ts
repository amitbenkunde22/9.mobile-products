import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dataBindings';

  skills : Array<string> = ["HTML5","CSS3","JS","TS","ANGULAR-14"];

  stdArr = [
    {
      fname : "Jhon",
      lname : "Doe",
      email : "jd@gmail.com",
      contact : 7507926464
    },
    {
      fname : "James",
      lname : "Doe",
      email : "jd@gmail.com",
      contact : 9049841947
    },
    {
      fname : "May",
      lname : "Doe",
      email : "md@gmail.com",
      contact : 8329121295
    },
    {
      fname : "Amit",
      lname : "Benkunde",
      email : "ab@gmail.com",
      contact : 7507926464
    }
  ]
}
