import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/core';
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
  
    AutententicarComEmailESenha: async function (email,senha,setlogado)
    {
      
      try {
        const dados = await auth().signInWithEmailAndPassword(email,senha).then(
          certo =>{
            
              ToastAndroid.showWithGravity(
                "Login aceite",
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
              );
              setlogado(true)
              useNavigation().navigate("tab")
          },
          rejeitado=>{
            
            ToastAndroid.showWithGravity(
              "Erro na autenticacao",
              ToastAndroid.SHORT,
              ToastAndroid.CENTER
            );
          }
        )
       
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


