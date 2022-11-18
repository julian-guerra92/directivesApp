import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
  ]
})
export class AddComponent {

  text: string = 'You must enter this field!!';
  color: string = 'red';

  myForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder) { }

  haveError(field: string): boolean {
    return this.myForm.get(field)?.invalid || false;
  }

  changeText(){
    this.text = Math.random().toString();
  }

  changeColor(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }

}
