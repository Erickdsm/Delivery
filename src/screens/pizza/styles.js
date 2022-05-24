import {StyleSheet} from 'react-native';

const pizzaStyle = StyleSheet.create({
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

  areaBotao: {
    fontFamily: 'verdana',
    textAlign: 'center',
    alignItems: 'center',
    margin: 2,
    padding: 2,
  },

  titulo: {
    textShadowColor: '#000000',
    textShadowRadius: 2,
    fontFamily: 'verdana',
    fontSize: 22,
    textAlign: 'center',
    color: '#2b2b2b',
    justifyContent: 'center',
    alignItems: 'center',
  },

  tituloPreco: {
    textShadowColor: '#a15732',
    textShadowRadius: 1,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#df4617',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  cardmodal: {
    width: 330,
    height: 300,
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
    width: 175,
    height: 200,
    borderRadius: 30,
  },
  entradasDeDados: {
    borderBottomColor: 'black',
    borderWidth: 1,
    margin: 3,
    borderRadius: 10,
  },

  enunciado: {
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    backgroundColor: '#00cf96',
    fontWeight: 'bold',
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
  box: {
    backgroundColor: 'white',
    marginBottom: 70,
  },
});

export default pizzaStyle;
