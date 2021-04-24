import { Component, OnInit } from '@angular/core';
import { SocialAuthService , GoogleLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit{

  constructor (private socialAuthService:SocialAuthService){}

  ngOnInit():void{
  }


  googleLogin(){
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

}
