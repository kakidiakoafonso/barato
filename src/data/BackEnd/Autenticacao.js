import auth from '@react-native-firebase/auth';

export default Autenticacao = 
{
    AutententicarComEmailESenha: async function (email,senha)
    {
      try {
        const dados = await auth().signInWithEmailAndPassword("Kakidiakoafonso@gmail.com","Kakidiako12345")
        console.log(dados)
      } catch (error) {
          console.log(error)
      }
    }
}

