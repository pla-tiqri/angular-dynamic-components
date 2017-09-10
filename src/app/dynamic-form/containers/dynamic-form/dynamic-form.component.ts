import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { DynamicFormConfig } from '../../models/dynamic-form-config';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() config: DynamicFormConfig[] = [];

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.createGroup();
  }

  createGroup(): FormGroup {
    const group = this.formBuilder.group({});

    this.config.forEach((control: DynamicFormConfig) =>
      group.addControl(
        control.name,
        this.formBuilder.control(control.options || {})
      )
    );

    return group;
  }

}