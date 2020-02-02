import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  /* this.contactForm = new FormGroup({
     firstName : new FormControl('',[Validators.required]),
     lastName : new FormControl(''),
     email : new FormControl('',[Validators.required, Validators.email]),
     address : new FormGroup({
       street : new FormControl('',[Validators.required]),
       city : new FormControl('',[Validators.required]),
       state : new FormControl('',[Validators.required]),
       zip : new FormControl('',[Validators.required]),
     })
   });*/

    this.contactForm = this.fb.group({
      firstName : ['', Validators.required],
      lastName : [''],
      email: ['', Validators.email],
      address : this.fb.group({
        street : ['', Validators.required],
        city : ['', Validators.required],
        state : ['', Validators.required],
        zip : ['', Validators.required]
      })
    })
   this.contactForm.valueChanges.subscribe(datat => {
     ///console.log(datat);
   });

   this.contactForm.get('firstName').valueChanges.subscribe(datat => {
      console.log("First Name");
      console.log(datat);
    });

    this.contactForm.get('lastName').valueChanges.subscribe(datat => {
      console.log("Last Name");
      console.log(datat);
    });

    this.contactForm.get('email').valueChanges.subscribe(datat => {
      console.log(this.contactForm.valid);
      console.log(datat);
    });

    this.contactForm.get('address').get('street').valueChanges.subscribe(updatedValue=>{
      console.log("updatedValue " + updatedValue);
      ///console.log("updatedValue " + this.contactForm.get('address').get('street').value);
    })
  }

  updateFirstName() {
    this.contactForm.get('firstName').setValue('Pushkar');
  }

  updatePatch() {
    this.contactForm.patchValue({
      email: 'pushkarsoni06@gmail.com',
      address : {
        street : 'Tiwari Mohalla',
        city : 'Pune'
      }
    })
  }

}
