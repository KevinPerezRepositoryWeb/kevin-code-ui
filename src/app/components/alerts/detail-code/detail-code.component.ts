import { Component,Inject ,OnInit} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-detail-code',
  templateUrl: './detail-code.component.html',
  styleUrls: ['./detail-code.component.css']
})
export class DetailCodeComponent implements OnInit {

  form!:FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb:FormBuilder,
  ) {
  }

  ngOnInit(): void {
  this.initForm()
  }


  initForm(){
      this.form=this.fb.group({
        title:[''],
        detail:[''],
      })

  }
  

}
