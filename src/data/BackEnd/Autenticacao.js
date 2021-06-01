import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import { ToastAndroid } from "react-native";
import firestore from '@react-native-firebase/firestore';

export default Autenticacao = 
{
  
    AutententicarComEmailESenha: async function (email,senha,navigation)
    {
      
      try {
         await auth().signInWithEmailAndPassword(email,senha).then(
          certo =>{
            
              ToastAndroid.showWithGravity(
                "Login aceite",
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
              );
              navigation.navigate("categorias")
              console.log(certo.additionalUserInfo)
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
    CriarContaEmailSenha: async function(email,senha,navigation)
    {
        if(email=="" && senha=="")
        {
          ToastAndroid.showWithGravity(
            "Preencha os campos",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          );
        }
        else
        {
          auth().createUserWithEmailAndPassword(email,senha).then(
            certo =>{
              
              ToastAndroid.showWithGravity(
                "Regitrado com sucesso",
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
              );
              setTimeout(()=>{navigation.navigate('detailtwo',{uid: certo.user.email})},1500)
            },
            falhou=>
            {
              ToastAndroid.showWithGravity(
                "Email já registado.",
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
              );
            }
          )
        }
    },
    signOutEmailESenha: async function (navigation) {
      try {
        await AsyncStorage.removeItem('@barato_token').then(certo=>{navigation.navigate('loginEmail')})
      } catch(e) {
        console.log(e);
        console.warn("Nao removido");
        console.log(e);
      }
    }
  }


