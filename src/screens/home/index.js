import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Image,
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
} from 'react-native';
console.disableYellowBox = true;
import homeStyle from './styles';
import {HomeC} from '../../Components/homeComponents';
import HomeComponents from '../../Components/homeComponents';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: [
        {
          id: 1,
          nome: 'Corn & Bacon',
          preco: 'R$ 37,90',
          imagem:
            'https://cache.dominos.com/olo/6_84_1/assets/build/market/BR/_pt/images/img/products/larges/S_PIZCRBK.jpg',

          imagemZoom:
            'https://cache.dominos.com/olo/6_84_1/assets/build/market/BR/_pt/images/img/products/larges/S_PIZCRBK.jpg',
          descricao: 'Mussarela, bacon, oregano e milho.',
        },
        {
          id: 2,
          nome: 'Frango Requeijão',
          preco: 'R$ 37,90',
          imagem:
            'https://cache.dominos.com/olo/6_84_1/assets/build/market/BR/_pt/images/img/products/larges/S_PIZFR.jpg',
          imagemZoom:
            'https://cache.dominos.com/olo/6_84_1/assets/build/market/BR/_pt/images/img/products/larges/S_PIZFR.jpg',
          descricao: 'Frango desfiado, cebola, oregano e requeijão.',
        },
        {
          id: 3,
          nome: 'La Boca',
          preco: 'R$ 39,90',
          imagem:
            'https://cdn.neemo.com.br/uploads/item/photo/878239/laboca.JPG',
          imagemZoom:
            'https://cdn.neemo.com.br/uploads/item/photo/878239/laboca.JPG',
          descricao: 'Duplo provolone, mussarela, molho da casa, rúcula, tomate italiano, vinagrete com toque de hortelã e ketchup artesanal de goiaba.',
        },
      ],
    };
  }
  render() {
    return (
      <SafeAreaView style={homeStyle.box}>
        <Text style={homeStyle.enunciado2}> Delivery </Text>
        <Text style={homeStyle.promocoes}> Promoções da semana: </Text>
        {
          <FlatList
            data={this.state.lista}
            numColumns={3}
            renderItem={item => HomeComponents(item)}
            key={item => item.id}
            initialNumToRender={1}
          />
        }
        <View>
          <HomeC />
        </View>
      </SafeAreaView>
    );
  }
}
