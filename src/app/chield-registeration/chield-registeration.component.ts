import { Component,OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-chield-registeration',
  templateUrl: './chield-registeration.component.html',
  styleUrls: ['./chield-registeration.component.css']
})
export class ChieldRegisterationComponent implements OnInit {
  min:number=14
  err:Boolean=false
  isLoading:Boolean=false
  token:any
  isError:Boolean=false
errMessage:string=''
validId:Boolean=false
parentMessage:string=''
nationalMessage:string=''
  constructor( private AuthService:AuthService,private Router:Router
){}
  registerForm:FormGroup=new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(6),Validators.maxLength(25)]),
    ssid:new FormControl('',[Validators.pattern('/^/d{14}$/'),Validators.required]),
    password:new FormControl(null,[Validators.required]),
    confirmPassword:new FormControl(null,[Validators.required]),
    phone:new FormControl(null,[Validators.pattern('^012[0-9]{8}$'),Validators.required]),
    email:new FormControl(null,[Validators.required]),
    role:new FormControl(null,[Validators.required]),
    parent:new FormControl(null,[Validators.required,Validators.min(14),Validators.max(14)])


  })
  sendData(registerForm:FormGroup)
  {
    const pass=this.registerForm.get('password')?.value
    const confirmPassword=this.registerForm.get('confirmPassword')?.value
    if(pass==confirmPassword)
    {
      this.registerForm.get('role')?.setValue('child')
      this.isLoading=true
      console.log(this.registerForm.value)
      this.AuthService.signUp(this.registerForm.value).subscribe({
        next:(res)=>{
         const check=res.token
          if(check)
          {
            this.isLoading=false
            console.log('success')
            this.Router.navigate(['/login'])
          }
          else
          {
            this.isLoading=false
            this.isError=true
            this.errMessage=JSON.stringify(res)
            console.log(this.errMessage)
          }
        }
      })
    }
    else
    {
      alert(`confirmPass dosn't match with pass`)
    }
   
  }
  ngOnInit(): void {
    
  }
}
