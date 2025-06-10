import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WebsocketService } from '../websocket.service';
import { UserService } from '../user.service';
import { ChatMessage } from '../chat-message';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
})
export class ChatComponent {
  text = '';
  messages: ChatMessage[] = [];

  constructor(
    private wsService: WebsocketService,
    public userService: UserService
  ) {
    this.wsService.messages$.subscribe((msgs) => (this.messages = msgs));
  }

  send() {
    if (this.text.trim()) {
      this.wsService.send({
        from: this.userService.name,
        text: this.text,
      });
      this.text = '';
    }
  }
}
