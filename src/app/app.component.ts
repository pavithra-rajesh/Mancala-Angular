import { Component } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import * as $ from 'jquery';



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})

export class AppComponent {
    title = 'Mancala';

   /* stompClient = null;

    setConnected(connected) {
        $('#connect').prop('disabled', connected);
        $('#disconnect').prop('disabled', !connected);
        /*if (connected) {
            $('#conversation').show();
        }
        else {
            $('#conversation').hide();
    }*/
        /*$('#greetings').html('');*/
   /* }

    connect() {
        const socket = new SockJS('/gs-guide-websocket');
        this.stompClient = Stomp.over(socket);
        this.stompClient.connect({}, function (frame) {
            this.setConnected(true);
            console.log('Connected: ' + frame);
            this.stompClient.subscribe('/topic/game');
        });
    }

    disconnect() {
        if (this.stompClient !== null) {
            this.stompClient.disconnect();
        }
        this.setConnected(false);
        console.log('Disconnected');
    }*/

    move(selectedPit) {
        /*this.stompClient.client.send('app/move', {}, selectedPit);*/
    }

}
