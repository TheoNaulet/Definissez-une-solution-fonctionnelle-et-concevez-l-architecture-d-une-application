# Application de Chat WebSocket

Ce projet est une application de chat en temps réel utilisant les WebSockets, composée d'un backend Spring Boot et d'un frontend Angular.

## Structure du Projet

Le projet est divisé en deux parties principales :

- **websocketchat** : Backend Spring Boot qui gère les connexions WebSocket et la logique serveur
- **websocket-chat-ui** : Frontend Angular qui fournit l'interface utilisateur

## Backend (websocketchat)

### Technologies utilisées
- Java 17
- Spring Boot 3.4.5
- Spring WebSocket
- Maven

### Structure du code
- `config` : Configuration WebSocket et STOMP
- `controller` : Contrôleurs pour gérer les messages WebSocket
- `model` : Modèles de données pour les messages de chat

### Comment lancer le backend
```bash
cd websocketchat
./mvnw spring-boot:run
```

Le serveur démarrera sur `http://localhost:8080`.

## Frontend (websocket-chat-ui)

### Technologies utilisées
- Angular 19
- @stomp/stompjs 7.1.1
- sockjs-client 1.6.1
- TypeScript 5.7.2

### Comment lancer le frontend
```bash
cd websocket-chat-ui
npm install
npm start
```

L'application sera accessible sur `http://localhost:4200`.

## Fonctionnalités

- Communication en temps réel via WebSockets
- Interface utilisateur réactive
- Envoi et réception de messages instantanés
- Support pour les salles de chat multiples

## Prérequis

- Java 17 ou supérieur
- Node.js 16 ou supérieur
- npm 8 ou supérieur

## Licence

Ce projet est sous licence MIT.
