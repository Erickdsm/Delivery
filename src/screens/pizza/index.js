import React, {Component} from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
console.disableYellowBox = true;
import pizzaStyle from './styles';
import PizzaComponents from '../../Components/pizzaComponents';
import {useNavigation} from '@react-navigation/native';



export default class Pizza extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pesquisarTexto: '',
      dadosFiltrados: [],

      lista: [
        {
          id: 1,
          nome: "Bauru",
          preco: 'R$ 42,90',
          imagem:
            'https://cache.dominos.com/olo/6_84_1/assets/build/market/BR/_pt/images/img/products/larges/S_PIZBU.jpg',

          imagemZoom:
            'https://cache.dominos.com/olo/6_84_1/assets/build/market/BR/_pt/images/img/products/larges/S_PIZBU.jpg',
          descricao: 'Mussarela, presunto, requeijão, oregano e tomate.',
        },
        {
          id: 2,
          nome: 'Catuperoni',
          preco: 'R$ 42,90',
          imagem:
            'https://cache.dominos.com/olo/6_84_1/assets/build/market/BR/_pt/images/img/products/larges/S_PIZCU.jpg',
          imagemZoom:
            'https://cache.dominos.com/olo/6_84_1/assets/build/market/BR/_pt/images/img/products/larges/S_PIZCU.jpg',
          descricao: 'Mussarela, pepperoni, requeijão, oregano e parmesão ralado.',
        },
        {
          id: 3,
          nome: 'Pepperoni',
          preco: 'R$ 42,90',
          imagem:
            'https://cache.dominos.com/olo/6_84_1/assets/build/market/BR/_pt/images/img/products/larges/S_PIZPEP.jpg',
          imagemZoom:
            'https://cache.dominos.com/olo/6_84_1/assets/build/market/BR/_pt/images/img/products/larges/S_PIZPEP.jpg',
          descricao: 'Mussarela, oregano e pepperoni.',
        },
        {
          id: 4,
          nome: 'Napolitana',
          preco: 'R$ 49,90',
          imagem:
            'https://cache.dominos.com/olo/6_84_1/assets/build/market/BR/_pt/images/img/products/larges/S_PIZNAP.jpg',
          imagemZoom:
            'https://cache.dominos.com/olo/6_84_1/assets/build/market/BR/_pt/images/img/products/larges/S_PIZNAP.jpg',
          descricao: 'Mussarela, tomate, oregano e parmesão ralado.',
        },
        {
            id: 5,
            nome: 'Portuguesa',
            preco: 'R$ 49,90',
            imagem:
              'https://cache.dominos.com/olo/6_84_1/assets/build/market/BR/_pt/images/img/products/larges/S_PIZPT.jpg',
            imagemZoom:
              'https://cache.dominos.com/olo/6_84_1/assets/build/market/BR/_pt/images/img/products/larges/S_PIZPT.jpg',
            descricao: 'Mussarela, presunto, ovo de codorna, azeitona preta, cebola, oregano e pimentão verde.',
          },
        {
          id: 6,
          nome: 'Frango Barbecue',
          preco: 'R$ 49,90',
          imagem:
            'https://cache.dominos.com/wam/prod/market/BR/_pt/images/promo/3e15ada2-48be-488d-9d0b-2bd4164cd64e.jpg',
          imagemZoom:
            'https://cache.dominos.com/wam/prod/market/BR/_pt/images/promo/3e15ada2-48be-488d-9d0b-2bd4164cd64e.jpg',
          descricao: 'Barbecue, mussarela, frango grelhado, cebola, oregano e parmesão.',
        },
        {
            id: 7,
            nome: 'Egg & Bacon',
            preco: 'R$ 60,90',
            imagem:
              'https://cache.dominos.com/olo/6_84_1/assets/build/market/BR/_pt/images/img/products/larges/S_PIZEGK.jpg',
            imagemZoom:
              'https://cache.dominos.com/olo/6_84_1/assets/build/market/BR/_pt/images/img/products/larges/S_PIZEGK.jpg',
            descricao: 'Mussarela, bacon, cebola, cream cheese, oregano e ovo de codorna.',
          },
          {
            id: 8,
            nome: 'Búfala La Bianca',
            preco: 'R$ 60,90',
            imagem:
              'https://cache.dominos.com/olo/6_84_1/assets/build/market/BR/_pt/images/img/products/larges/S_PIZBC.jpg',
            imagemZoom:
              'https://cache.dominos.com/olo/6_84_1/assets/build/market/BR/_pt/images/img/products/larges/S_PIZBC.jpg',
            descricao: 'Mussarela, mussarela de búfala e leite, requeijão, parmesão ralado, oregano e manjericão.',
          },
      ],
    };
  }

  Pesquisar = texto => {
    this.setState({pesquisarTexto: texto});

    let filtro = this.state.lista.filter(item => {
      return item.nome.toLowerCase().includes(texto.toLowerCase());
    });

    this.setState({dadosFiltrados: filtro});
  };

  render() {
    return (
      <SafeAreaView style={pizzaStyle.box}>
        <Text style={pizzaStyle.enunciado2}> Pizza Delivery </Text>
        <TextInput
          style={{textAlign: 'right', paddingRight: 25}}
          onChangeText={valor => this.Pesquisar(valor)}
          placeholder="Pesquisar..."
        />
        {
          <FlatList
            data={
              this.state.dadosFiltrados && this.state.dadosFiltrados.length > 0
                ? this.state.dadosFiltrados
                : this.state.lista
            }
            numColumns={2}
            renderItem={item => PizzaComponents(item)}
            key={item => item.id}
            initialNumToRender={4}
          />
        }
      </SafeAreaView>
    );
  }
}
