import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-diagnostic-chat',
  templateUrl: './diagnostic-chat.component.html',
  styleUrls: ['./diagnostic-chat.component.css'],
  providers: [LoginService]
})
export class DiagnosticChatComponent implements OnInit {

  private messages : any[] = []
  private end : boolean = false

  private message : FormControl = new FormControl('')
  private group : FormGroup = new FormGroup({
    message : this.message
  })

  constructor(
    private _logInService : LoginService
  ) { }

  ngOnInit() {
    this._logInService.checkSession()
      .subscribe(response => { 
        if(response.status==505){
          window.location.href = "/undevin"
        }
      });
  }

  sendMessage(){
    if(this.messages.length > 0){
      this.messages[this.messages.length] = {
        type : true,
        message : this.message.value
      }
    }else{
      this.messages[0] = {
        type : true,
        message : this.message.value
      }
    }

    this.messages[this.messages.length] = {
      type : false,
      message : "..."
    }

    this._logInService.sendMessage(this.message.value).subscribe( response => {
      this.messages[this.messages.length-1].message = response.speech
      if(response.end){
        this.end = true
      }
      this.message.setValue("")
    })

  }

}
