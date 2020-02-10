import { Component, OnInit } from '@angular/core';
import { CricketService } from 'src/services';
import { Player } from '../player';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { FormControl,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  player: Player = {
    id: null,
    name: '',
    country: '',
    category: '',
    image: ''
  }
 
  addplayerform:FormGroup;
  constructor(private service: CricketService,private route: Router) { }

  ngOnInit() {
    this.addplayerform = new FormGroup({
    'id': new FormControl('',[Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    'name':new FormControl('',[Validators.required,Validators.pattern('/^[A-Za-z]+$/'),Validators.minLength(2),Validators.maxLength(20)]),
    'country':new FormControl('',[Validators.required,Validators.pattern('/^[A-Za-z]+$/'),Validators.minLength(2),Validators.maxLength(20)]),
    'category':new FormControl('',[Validators.required,Validators.pattern('/^[A-Za-z]+$/'),Validators.minLength(2),Validators.maxLength(20)]),
    'image':new FormControl('')
    })
  }

  createPlayer(){
    if(this.addplayerform.invalid){
      console.log("invalid");
      this.validateAllFormFields(this.addplayerform);
    }
    else{
    console.log('entered create player method on submitting the form')
    this.service.createPlayer(this.player).subscribe((res,err: any)=>{
      alert("Player added successfully");
      console.log(res);
      console.log('added successfully');
      this.route.navigate(['../view'])

    },function(err){
      console.log(err)
    })
  }

}
validateAllFormFields(formGroup: FormGroup) {

  Object.keys(formGroup.controls).forEach(field => {  //{2}
    const control = formGroup.get(field);             //{3}
    if (control instanceof FormControl) {             //{4}
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup) {        //{5}
      this.validateAllFormFields(control);            //{6}
    }
  });
}
}
