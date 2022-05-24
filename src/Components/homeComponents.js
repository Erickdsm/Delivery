import React, {useState} from 'react';
console.disableYellowBox = true;
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import homeStyle from '../screens/home/styles';
import Modal from 'react-native-modal';

function Detalhes(props) {
  const [getModal, setModal] = useState(false);

  const atualizaModal = () => {
    setModal(!getModal);
  };

  return (
    <View style={homeStyle.areaBotao}>
      <TouchableOpacity onPress={atualizaModal}>
        <Image source={{uri: props.imagem}} style={homeStyle.card} />
      </TouchableOpacity>
      {/* <Button title="Show modal" onPress={atualizaModal} /> */}

      {/* Dentro da modal */}
      <Modal
        style={{
          padding: 15,
          backgroundColor: 'white',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        isVisible={getModal}>
        <View>
          <Text style={homeStyle.textoModal}>{props.descricao}</Text>
          <Text style={homeStyle.textoModal2}>{props.nome}</Text>
          <Image style={homeStyle.cardmodal} source={{uri: props.imagemZoom}} />
          <Text style={homeStyle.textoModal2}>Preço: {props.preco}</Text>

          <Button title="Voltar" onPress={atualizaModal} />
        </View>
      </Modal>
    </View>
  );
}

export function HomeC() {
  const navigation = useNavigation();
  return (
    <View>
      <View style={homeStyle.containerMeio}>
        <View>
          <View style={homeStyle.containerMeio}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Pizza')}
              style={homeStyle.botaoIcon}>
              <Text style={homeStyle.enunciadoIcon}>Pizza</Text>
              <Image
                style={homeStyle.imageIcon}
                source={{
                  uri: 'https://cache.dominos.com/olo/6_84_1/assets/build/market/BR/_pt/images/img/products/larges/S_PIZCLB.jpg',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Hamburguer')}
              style={homeStyle.botaoIcon}>
              <Text style={homeStyle.enunciadoIcon}>Hambúrguer</Text>
              <Image
                style={homeStyle.imageIcon}
                source={{
                  uri: 'https://cdn.neemo.com.br/uploads/item/photo/878218/vegas.JPG',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Cupom')}
        style={homeStyle.botaoIcon}>
        <Image
          style={homeStyle.imagemRight}
          source={require('../imagens/cupom.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

export default function HomeComponents({item}) {
  return (
    <View>
      <View style={homeStyle.areaBotao}>
        <View>
          <Text style={homeStyle.titulo}>{item.nome}</Text>
          <Detalhes
            nome={item.nome}
            preco={item.preco}
            imagemZoom={item.imagemZoom}
            imagem={item.imagem}
            descricao={item.descricao}
          />
          <Text style={homeStyle.tituloPreco}>{item.preco}</Text>
        </View>
      </View>
    </View>
  );
}
