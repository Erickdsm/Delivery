import React, {Component} from 'react';
console.disableYellowBox = true;
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import Home from './src/screens/home';
import Pizza from './src/screens/pizza';
import Hamburguer from './src/screens/hamburguer';
import Pagamentos from './src/screens/pagamentos';
import Cupom from './src/screens/about';
import {Notification} from './src/notification/notificationManager';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const notificador = Notification;

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="Home" component={Home} /> */}
          <Stack.Screen name="Home">
            {({navigation}) => {
              notificador.setNavegador(navigation);
              return (
                <Home
                  enviar={this.mandarNotificacao}
                  cancelar={this.cancelar}
                />
              );
            }}
          </Stack.Screen>
          <Stack.Screen name="Pagamentos">
            {navigation => {
              return <Pagamentos />;
            }}
          </Stack.Screen>
          <Stack.Screen name="Hamburguer" component={Hamburguer} />
          <Stack.Screen name="Pizza" component={Pizza} />
          {/* <Stack.Screen name="Formas de Pagamento" component={Pagamentos} /> */}
          <Stack.Screen name="Cupom" component={Cupom} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
