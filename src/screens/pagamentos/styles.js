import {StyleSheet} from 'react-native';

const payStyle = StyleSheet.create({
titulo: {
    fontFamily: 'verdana',
    justifyContent: 'center',
    marginRight: 5,
    textAlign: 'center',
    color: '#df4617',
    fontSize: 30,
    textShadowColor: '#a15732',
    textShadowRadius: 1,
    fontWeight: 'bold',
    marginTop: 25,
  },

  imagem: {
    width: 280,
    height: 280,
    margin: 45,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
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
    marginBottom: 1,
    flex: 1,
  },

})


export default payStyle;