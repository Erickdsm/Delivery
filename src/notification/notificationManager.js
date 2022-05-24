import PushNotification from 'react-native-push-notification';
import Pagamentos from '../screens/pagamentos';

class NotificationManager {

  setNavegador(novoNavegador) {
        navegador = novoNavegador
  }


  // Configuração orientada pela documentação do React Native Push Notification
  // Essa configuração garante o funcionamento da biblioteca no Android e no iOS
  configure = () => {
    PushNotification.configure({
      onRegister: function (token) {
        console.log('[NotificationManager] onRegister token:', token);
      },
      onNotification: function (notification) {
        console.log('[NotificationManager] onNotification:', notification);
        navegador.navigate("Cupom")
      },
    });
  };

  // É aqui que nossa notificação para o Android é construida
  buildAndroidNotification = (id, title, message, data = {}, options = {}) => {
    return {
      id: id,
      autoCancel: true,
      largeIcon: options.largeIcon || 'ic_launcher',
      smallIcon: options.smallIcon || 'ic_launcher',
      bigText: message || '',
      subText: title || '',
      vibrate: options.vibrate || false,
      vibration: options.vibration || 300,
      priority: options.priority || 'high',
      importance: options.importance || 'high',
      data: data,
      channelId: 'channel-id',
    };
  };

  // Fução que exibe a notificação
  showNotification = (id, title, message, data = {}, options = {}) => {
    PushNotification.localNotification({
      /* Propriedades do Android */
      ...this.buildAndroidNotification(id, title, message, data, options),

      /* Propriedades do Android e iOS */
      title: title || '',
      message: message || '',
      playSound: options.playSound || false,
      channelId: 'channel-id',
      soundName: options.soundName || 'default',
      userInteraction: false,
    });
  };

  // Função que cancela todas notiificações e limpa as que estão no centro de notificações
  cancelAllLocalNotification = () => {
    PushNotification.cancelAllLocalNotifications();
  };

  //criação de canais

  createChannel = () => {
    PushNotification.createChannel(
      {
        channelId: 'channel-id', // (required)
        channelName: 'My channel', // (required)
        channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
      },
      created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    );
  };

  agendarNotificacoes = () => {
    PushNotification.localNotificationSchedule({
      //... You can use all the options from localNotifications
      id: 3,
      title: 'Você recebeu um cupom de desconto!',
      channelId: 'channel-id',
      message: ' clique para resgatar', // (required)
      date: new Date(Date.now() + 5 * 1000), // in 60 secs
      allowWhileIdle: false, // (optional) set notification to work while on doze, default: false

      /* Android Only Properties */
      repeatTime: 60 * 1000, // (optional) Increment of configured repeatType. Check 'Repeating Notifications' section for more info.
      repeatType: "time"
    });
    PushNotification.localNotificationSchedule({
      //... You can use all the options from localNotifications
      id: 4,
      title: 'Que tal um burgão?  🍔 ',
      channelId: 'channel-id',
      message: 'Confira nossos sabores!', // (required)
      date: new Date(Date.now() + 5 * 1000), // in 60 secs
      allowWhileIdle: false, // (optional) set notification to work while on doze, default: false

      /* Android Only Properties */
      repeatTime: 120 * 1000, // (optional) Increment of configured repeatType. Check 'Repeating Notifications' section for more info.
      repeatType: "time"
    });
    PushNotification.localNotificationSchedule({
      //... You can use all the options from localNotifications
      id: 5,
      title: 'Ofertas Semanais',
      channelId: 'channel-id',
      message: 'Não deixe de conferir as orfertas da semana', // (required)
      date: new Date(Date.now() + 5 * 1000), // in 60 secs
      allowWhileIdle: false, // (optional) set notification to work while on doze, default: false

      /* Android Only Properties */
      repeatTime: 180 * 1000, // (optional) Increment of configured repeatType. Check 'Repeating Notifications' section for more info.
      repeatType: "time"
    });
  };
  
}

export const Notification = new NotificationManager();
