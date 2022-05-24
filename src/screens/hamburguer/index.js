import React, {Component} from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
console.disableYellowBox = true;
import hamburguerStyle from './styles';
import HamburguerComponents from '../../Components/hamburguerComponents';

export default class Hamburguer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pesquisarTexto: '',
      dadosFiltrados: [],

      lista: [
        {
          id: 1,
          nome: 'Vegas',
          preco: 'R$ 49,90',
          imagem:
            'https://cdn.neemo.com.br/uploads/item/photo/878218/vegas.JPG',

          imagemZoom:
            'https://cdn.neemo.com.br/uploads/item/photo/878218/vegas.JPG',
          descricao: 'Molho da casa, dois burgers, bacon, cheddar, picles marinado no whisky e barbecue de chocolate',
        },
        {
          id: 2,
          nome: 'Toscana',
          preco: 'R$ 42,90',
          imagem:
            'https://cdn.neemo.com.br/uploads/item/photo/878229/Toscana.JPG',
          imagemZoom:
            'https://cdn.neemo.com.br/uploads/item/photo/878229/Toscana.JPG',
          descricao: 'Duplo cheddar, provolone, mussarela, molho da casa, calabresinha toscana caramelada, tiras de bacon crocante, cebola roxa e Ketchup artesanal de goiaba.',
        },
        {
          id: 3,
          nome: 'Munich',
          preco: 'R$ 39,90',
          imagem:
            'https://cdn.neemo.com.br/uploads/item/photo/878235/Munich.JPG',
          imagemZoom:
            'https://cdn.neemo.com.br/uploads/item/photo/878235/Munich.JPG',
          descricao: 'Duplo provolone, blue cheese, molho da casa, rúcula, cebola caramelada e molho a base de cerveja stout.',
        },
        {
          id: 4,
          nome: 'San Diego',
          preco: 'R$ 38,90',
          imagem:
            'https://cdn.neemo.com.br/uploads/item/photo/878237/sandie.JPG',
          imagemZoom:
            'https://cdn.neemo.com.br/uploads/item/photo/878237/sandie.JPG',
          descricao: 'Molho da casa, cebola na chapa, catupry, bacon em cubos, e sweet chilli defumado.',
        },
        {
          id: 5,
          nome: 'Big Ben',
          preco: 'R$ 28,90',
          imagem:
            'https://cdn.neemo.com.br/uploads/item/photo/878960/bigben.JPG',
          imagemZoom:
            'https://cdn.neemo.com.br/uploads/item/photo/878960/bigben.JPG',
          descricao: 'Blue cheese, molho da casa, alface, cogumelos com leve toque de shoyo e ketchup artesanal de goiaba.',
        },
        {
          id: 6,
          nome: 'Alegrete',
          preco: 'R$ 36,90',
          imagem:
            'https://cdn.neemo.com.br/uploads/item/photo/878957/algrete.JPG',
          imagemZoom:
            'https://cdn.neemo.com.br/uploads/item/photo/878957/algrete.JPG',
          descricao: 'Duplo provolone, maionese de salsa, rúcula, tomate italiano, alho confitadi, bacon crispy e ketchup artesanal de goiaba e uma farofinha de panko.',
        },
        {
          id: 7,
          nome: 'Texas',
          preco: 'R$ 42,90',
          imagem:
            'https://cdn.neemo.com.br/uploads/item/photo/878233/texas.JPG',

          imagemZoom:
            'https://cdn.neemo.com.br/uploads/item/photo/878233/texas.JPG',
          descricao: 'Duplo provolone, molho da casa, alface, brotos de trevo, tomate italiano, tiras de bacon crocante, crispy de cebola e barbecue artesanal de chocolate.',
        },
        {
          id: 8,
          nome: 'L´Amour',
          preco: 'R$ 42,90',
          imagem:
            'https://cdn.neemo.com.br/uploads/item/photo/878230/lamor.JPG',
          imagemZoom:
            'https://cdn.neemo.com.br/uploads/item/photo/878230/lamor.JPG',
          descricao: 'Blue Cheese, molho da casa, mix de folhas, cogumelos salteados na manteiga, fatias de bacon crocante e geléia de framboesa com vinho tinto e especiarias.',
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
      <SafeAreaView style={hamburguerStyle.box}>
        <Text style={hamburguerStyle.enunciado2}> Hambúrguer Delivery </Text>
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
            renderItem={item => HamburguerComponents(item)}
            key={item => item.id}
            initialNumToRender={4}
          />
        }
      </SafeAreaView>
    );
  }
}
