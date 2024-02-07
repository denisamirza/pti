import { Component, OnInit, ViewChild } from '@angular/core';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor() {
  }

  @ViewChild(FormComponent, { static: true })
  form: FormComponent = new FormComponent;

  ngOnInit(): void {
  }

  addUser(){
    this.form.addUser();
  }
}
