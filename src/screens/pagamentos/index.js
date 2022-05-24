import React from "react";
import {
    View,
    Image,
    Text,
  } from 'react-native';
import payStyle from "./styles";

export default function Pagamentos (){
  return(
      <View style={payStyle.box} >
          <Text style={payStyle.enunciado2}> BAZZAAR </Text>
          <Text style={payStyle.titulo} >Formas de Pagamento:</Text>
          <Image style={payStyle.imagem} source={{
            uri: 'https://icon-library.com/images/payment-icon-png/payment-icon-png-26.jpg',
          }}/>
      </View>
  )
}