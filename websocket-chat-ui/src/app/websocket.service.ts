import { Injectable } from '@angular/core';
import { Client, Message, IStompSocket } from '@stomp/stompjs';
import { BehaviorSubject } from 'rxjs';
import { ChatMessage } from './chat-message';
import SockJS from 'sockjs-client';

@Injectable({ providedIn: 'root' })
export class WebsocketService {
  private client: Client;
  public messages$ = new BehaviorSubject<ChatMessage[]>([]);

  constructor() {
    this.client = new Client({
      webSocketFactory: () => {
        console.log('Tentative de connexion WebSocket...');
        return new SockJS('http://localhost:8080/ws');
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      debug: function(str) {
        console.log('STOMP: ' + str);
      }
    });

    this.client.onConnect = (frame) => {
      console.log('Connecté au WebSocket!', frame);
      this.client.subscribe('/topic/messages', (msg: Message) => {
        console.log('Message reçu:', msg);
        const message: ChatMessage = JSON.parse(msg.body);
        const current = this.messages$.value;
        this.messages$.next([...current, message]);
      });
    };

    this.client.onStompError = (frame) => {
      console.error('Erreur STOMP:', frame);
    };

    this.client.onWebSocketError = (event) => {
      console.error('Erreur WebSocket:', event);
    };

    console.log('Activation du client STOMP...');
    this.client.activate();
  }

  send(msg: ChatMessage) {
    try {
      if (this.client.connected) {
        console.log('Envoi du message:', msg);
        this.client.publish({
          destination: '/app/chat',
          body: JSON.stringify(msg),
        });
      } else {
        console.warn('Impossible d\'envoyer le message: client non connecté');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
    }
  }
}
