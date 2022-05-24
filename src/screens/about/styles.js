import {StyleSheet} from 'react-native';

const aboutStyle = StyleSheet.create({
  titulo: {
    fontFamily: 'verdana',
    justifyContent: 'center',
    marginRight: 5,
    textAlign: 'center',
    color: '#df4617',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: '#a15732',
    textShadowRadius: 1,
    marginTop: 25,
    marginBottom: 20,
  },

  box: {
    backgroundColor: 'white',
    marginBottom: 1,
    flex: 1,
  },

  textoCorpo: {
    fontFamily: 'Arial',
    justifyContent: 'center',
    margin: 5,
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
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
});

export default aboutStyle;
