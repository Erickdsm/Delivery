import {StyleSheet} from 'react-native';

const homeStyle = StyleSheet.create({

  areaBotao: {
    fontFamily: 'verdana',
    textAlign: 'center',
    alignItems: 'center',
    margin: 2,
  },

  titulo: {

    fontFamily: 'verdana',
    fontSize: 16,
    textAlign: 'center',
    color: '#2b2b2b',
    justifyContent: 'center',
    alignItems: 'center',
  },

  tituloPreco: {
    textShadowColor: '#a15732',
    textShadowRadius: 1,
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#df4617',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  cardmodal: {
    width: 330,
    height: 400,
    borderRadius: 10,
    margin: 10,
  },

  textoModal: {
    fontSize: 20,
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
    flexDirection: 'row',
    width: 120,
    height: 150,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  entradasDeDados: {
    borderBottomColor: 'black',
    borderWidth: 1,
    margin: 3,
    borderRadius: 10,
  },

  enunciado2: {
    fontFamily: 'verdana',
    justifyContent: 'center',
    marginRight: 5,
    textAlign: 'left',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
  },

  enunciadoIcon: {

    fontFamily: 'verdana',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
  },

  box: {
    backgroundColor: 'white',
    marginBottom: 1,
  },

  imagemBottom: {
    width: 20,
    height: 75,
    margim: 25,
  },

  imagemLeft: {
    width: 150,
    height: 300,
  },

  containerMeio: {
    flexDirection: 'row',
    marginLeft: 2,
  },

  imageIcon: {    
    flexDirection: 'row',
    width: 150,
    height: 140,
    borderRadius: 200,
    margin: 10,
    marginBottom: 40,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imagemRight: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 395,
    height: 130,
  },

  promocoes: {
      fontFamily: 'Arial',
      justifyContent: 'center',
      marginRight: 5,
      textAlign: 'center',
      color: '#df4617',
      textShadowColor: '#a15732',
      textShadowRadius: 1,
      fontWeight: 'bold',
      fontSize: 28,
      marginTop: 25,
      marginBottom: 10,
    },

});

export default homeStyle;
