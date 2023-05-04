import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  shownav:boolean=true

  constructor(private router:Router)
  {
    router.events.subscribe((val)=>{
      if(val instanceof NavigationEnd)
      {
        if(val.url=='/register')
        {
            this.shownav=false
        }else if(val.url=='/login')
        {
          this.shownav=false
        }
        else if(val.url=='/getPass')
        {
          this.shownav=false
        }else if(val.url=='/otp')
        {
          this.shownav=false
        }
        else if(val.url=='/choose-type')
        {
          this.shownav=false
        }
        else if(val.url=='/chieldRegisteration')
        {
          this.shownav=false
          
        }
        else if(val.url=='/restpass')
        {
          this.shownav=false
          
        }
       
        else{
          this.shownav=true
        }
      }
    })
  }
  title = 'tapcash';

  
}
