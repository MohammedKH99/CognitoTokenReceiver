import { Component, OnInit } from '@angular/core';
import Amplify, { Auth } from 'aws-amplify';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-auth',
  templateUrl: './custom-auth.component.html',
  styleUrls: ['./custom-auth.component.css']
})
export class CustomAuthComponent implements OnInit {
  region = 'us-east-1';
  userPoolId = '';
  userPoolWebClientId = '';


  username = '';
  password = '';

  idToken = '';
  accessTokent = '';



  constructor() { }

  ngOnInit() {
  }


  onLogin() {
    Amplify.configure({
      Auth: {
        region: this.region,

        userPoolId: this.userPoolId,

        userPoolWebClientId: this.userPoolWebClientId,


      }
    });

    Auth.signIn(this.username, this.password)
      .then(
        user => {
          console.log(user),
            this.idToken = user.signInUserSession.idToken.jwtToken,
            this.accessTokent = user.signInUserSession.accessToken.jwtToken;

        }
      )
      .catch(err => console.log(err));

  }

}
