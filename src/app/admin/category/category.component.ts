import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
//import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
declare var window: any;

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styles: [
  ]
})

export class CategoryComponent implements OnInit {

  //addCategory: FormGroup;
  formModal: any;
  //CategoryValue : FormGroup;
  category: any;
  constructor(private http:HttpClient, modalService: NgbModal, private formBuilder:FormBuilder){}

  openFormModal() {
    this.formModal.show();
  }

  closeFormModal() {
    this.formModal.hide();
  }

  AddData() {

    this.formModal.hide();
  }

  EditData() {
    this.formModal.hide();
  }

  ngOnInit(): void{
    //this.formModal = new window.bootstrap.Modal(
    //  document.getElementById('addcategory')
    //);

    //this.addCategory = new FormGroup({
     // id: new FormControl(''),
      //category: new FormControl('')
    //})
   

    // this.formModal = new window.bootstrap.Modal(
    //   document.getElementById('editcategory')
    // );
    
    debugger  
    this.http.get('assets/data.json').subscribe(res=>{
      this.category = res;      
    })
  }  
}
