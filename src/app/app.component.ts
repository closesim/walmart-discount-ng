import { Component } from '@angular/core';
import { FormBuilder , FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'walmart-discount-ng';
  public speech: string;
  formQuery;

  constructor(private formBuilder: FormBuilder) {
      this.formQuery = this.formBuilder.group({query: "",});
  }

  onSubmit(object) {
    this.speech = object.query;
    this.formQuery.reset();
  }

}
