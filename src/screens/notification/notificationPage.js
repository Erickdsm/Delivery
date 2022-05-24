import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import { Notification } from '../../notification/notificationManager';

const notificador = Notification;

export default function notificationPage(props) {
    let {container, button} = styles;

    return (
      <View style={container}>
        <TouchableOpacity style={button} onPress={() => props.mandarNotificacao}>
          <Text>Enviar notificação</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={button}
          onPress={() => props.cancelar}>
          <Text>Cancelar notificações</Text>
        </TouchableOpacity>
      </View>
    );
  }

/* Estilização do projeto */
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
