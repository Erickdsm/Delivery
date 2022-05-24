import React, {Component} from 'react';
console.disableYellowBox = true;
import { Notification } from '../../notification/notificationManager';

export const notificador = Notification;

export default class notificationHome extends Component {
  componentDidMount() {
    notificador.configure();
    notificador.createChannel();
    notificador.agendarNotificacoes();
  }

  mandarNotificacao = () => {
    notificador.showNotification(
      1,
      'Esse é o nosso título',
      'E aqui está a mensagem. Vamos inserir uma mensagem um pouco mais longa para vermos o Android irá se adaptar ao conteúdo na tela?',
      {}, // data
      {}, // options
    ),
      notificador.showNotification(
        2,
        'Esse é o nosso título',
        'asdasdadasd',
        {}, // data
        {}, // options
      );
  };

  cancelar = () => {
    notificador.cancelAllLocalNotification();
  };

}