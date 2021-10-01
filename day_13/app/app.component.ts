import { Component } from '@angular/core';
import { Options } from './options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedOption:Options = new Options(2, 'T-Shirts');
  title = 'myApp';
  isTrue=false;
  isValid = true;
  change : string="";
  ids=[1,2,3,4];
  users=[new UserService("Sachin",12),new UserService("Manish",24),new UserService("Anshumaan",12)];
  option=[ new Options (1,"jeens"),
     new Options(2,'T-Shirts' ),
     new Options(3, 'Shorts' ),
     new Options(4, 'Shirts')
,     new Options(5, 'Trousers'),
     new Options(6, 'Chinos'),
     new Options(7, 'Shoes')
  ];

  getValue(optionid:number) 
{
      
this.selectedOption = this.option.filter((item)=> item.id == optionid)[0];
  
}

}




export class UserService{
    constructor(public name:string,public age:number){
        
    }
}