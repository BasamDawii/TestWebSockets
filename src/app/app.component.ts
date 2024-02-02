import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormControl, ReactiveFormsModule} from "@angular/forms";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontend';
  messeges: string[] = [];
  ws: WebSocket = new WebSocket("ws://localhost:8181");
  messageContent = new FormControl('');


  constructor() {
    this.ws.onmessage = message =>{
      this.messeges.push(message.data)
    }
  }

  sendMessage() {
    this.ws.send(this.messageContent.value!);
  }
}
