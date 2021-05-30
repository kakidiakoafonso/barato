import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import { ToastAndroid } from "react-native";

//Contexts
// import { Configuracoes } from "../Contexts/GlobalConfigContext";

// const {setToken} = useContext(Configuracoes)

const storeToken = async (token) => {
  try {
    //await AsyncStorage.setItem('@storage_token', token)
    console.log("Token salvo"+token);
  } catch (e) {
    // saving error
    console.log(e)
  }
}
export default Autenticacao = 
{
  
    AutententicarComEmailESenha: async function (email,senha)
    {
      try {
        const dados = await auth().signInWithEmailAndPassword(email,senha)
        console.log(dados.user.uid)
        // storeToken(dados.user.uid)
          ToastAndroid.showWithGravity(
            "Login aceite "+dados.user.displayName,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          );
      } catch (error) 
      {
        ToastAndroid.showWithGravity(
          "Erro de login",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
          console.log(error)
      }
    },
    CriarContaEmailSenha: async function(email,senha)
    {
        auth().createUserWithEmailAndPassword(email,senha).then(
          certo =>{
            console.log(certo)
          },
          falhou=>{
            console.log(falhou)
          }
        )
    }
  }


