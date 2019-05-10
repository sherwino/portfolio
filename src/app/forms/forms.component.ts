import { Component, OnInit } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  // @ViewChild('userForm') userForm: FormGroupDirective
  // ^ Not sure what that does

  constructor() { }

  ngOnInit() {
  }

}
