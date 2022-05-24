import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import {Notification} from '../../notification/notificationManager';
import notificationHome from '../notification/notificationHome';
import {notificador} from '../notification/notificationHome';
import {useNavigation} from '@react-navigation/native';


export default class Cupom extends Component {
  componentDidMount() {
    notificador.configure();
    notificador.createChannel();
    notificador.agendarNotificacoes();
  }

  mandarNotificacao = () => {
    notificador.showNotification(
      1,
      'Parabéns!!!',
      'Você acabou de receber desconto de R$ 10,00 no próximo pedido!',
      {}, // data
      {}, // options
    );
  };

  cancelar = () => {
    notificador.cancelAllLocalNotification();
  };

  render() {
    let {container, button} = styles;
    return (
      <View style={container}>
        <TouchableOpacity style={button} onPress={this.mandarNotificacao}>
          <Text>Resgatar Cupom</Text>
        </TouchableOpacity>

        <TouchableOpacity style={button} onPress={this.cancelar}>
          <Text>Parar Notificações</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 200,
    marginTop: 10,
  },
});
