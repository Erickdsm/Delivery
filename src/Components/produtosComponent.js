import React, {useState} from 'react';
console.disableYellowBox = true;
import {
  View,
  Text,
  Button,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Modal from 'react-native-modal';
import {useLinkProps} from '@react-navigation/native';

function Detalhes(props) {
  const [getModal, setModal] = useState(false);

  const atualizaModal = () => {
    setModal(!getModal);
  };

  return (
    <View style={estilo.areaBotao}>
      <TouchableOpacity onPress={atualizaModal}>
        <Image source={{uri: props.imagem}} style={estilo.card} />
      </TouchableOpacity>
      {/* <Button title="Show modal" onPress={atualizaModal} /> */}

      {/* Dentro da modal */}
      <Modal
        style={{
          padding: 15,
          flex: 1,
          backgroundColor: 'white',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        isVisible={getModal}>
        <View>
          <Text style={estilo.textoModal}>{props.descricao}</Text>
          <Text style={estilo.textoModal2}>{props.nome}</Text>
          <Image style={estilo.cardmodal} source={{uri: props.imagemZoom}} />
          <Text style={estilo.textoModal2}>Preço: {props.preco}</Text>
          

          <Button title="Voltar" onPress={atualizaModal} />
        </View>
      </Modal>
    </View>
  );
}

export default function produtosComponent({item}) {
  return (
    <View style={estilo.areaBotao}>
      <View>
        <Text style={estilo.titulo}>{item.nome}</Text>
        <Text style={estilo.titulo}>{item.preco}</Text>
        <Detalhes
          nome={item.nome}
          preco={item.preco}
          imagemZoom={item.imagemZoom}
          imagem={item.imagem}
          descricao={item.descricao}
        />
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  botao: {
    width: 100,
    backgroundColor: '#1fdb8a',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 55,
    padding: 5,
    margin: 5,
    color: 'white',
  },

  botao1: {
    width: 100,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 55,
    padding: 5,
    margin: 5,
    color: 'white',
  },

  botao2: {
    width: 100,
    backgroundColor: '#db021c',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 55,
    padding: 5,
    margin: 5,
    color: 'white',
  },
  areaBotao: {
    textAlign: 'center',
    alignItems: 'center',
    margin: 5,
    padding: 5,
  },

  titulo: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardmodal: {
    width: 330,
    height: 400,
    borderRadius: 10,
    margin: 10,
  },

  textoModal: {
    fontSize: 30,
    textAlign: 'center',
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoModal2: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    width: 90,
    height: 190,
    borderRadius: 20,
  },

});
