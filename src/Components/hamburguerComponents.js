import React, {useState} from 'react';
console.disableYellowBox = true;
import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import hamburguerStyle from '../screens/pizza/styles';
import Modal from 'react-native-modal';

function Detalhes(props) {
  const [getModal, setModal] = useState(false);

  const atualizaModal = () => {
    setModal(!getModal);
  };

  return (
    <View style={hamburguerStyle.areaBotao}>
      <TouchableOpacity onPress={atualizaModal}>
        <Image source={{uri: props.imagem}} style={hamburguerStyle.card} />
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
          <Text style={hamburguerStyle.textoModal2}>{props.nome}</Text>
          <Text style={hamburguerStyle.textoModal}>{props.descricao}</Text>
          <Image
            style={hamburguerStyle.cardmodal}
            source={{uri: props.imagemZoom}}
          />
          <Text style={hamburguerStyle.textoModal2}>Preço: {props.preco}</Text>

          <Button title="Voltar" onPress={atualizaModal} />
        </View>
      </Modal>
    </View>
  );
}

export default function HamburguerComponents({item}) {
  return (
    <View style={hamburguerStyle.areaBotao}>
      <View>
        <Text style={hamburguerStyle.titulo}>{item.nome}</Text>
        <Detalhes
          nome={item.nome}
          preco={item.preco}
          imagemZoom={item.imagemZoom}
          imagem={item.imagem}
          descricao={item.descricao}
        />
        <Text style={hamburguerStyle.tituloPreco}>{item.preco}</Text>
      </View>
    </View>
  );
}
