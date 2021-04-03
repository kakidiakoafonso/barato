import React, { useState }  from 'react'
import { View,Image, Text,Modal, TouchableOpacity,Pressable } from 'react-native'
import styles from './style'
import DownIcon from './../../assets/svg/desconhecido.svg'
import Facebook from './../../assets/svg/facebook-logo.svg'
import Google from './../../assets/svg/google-logo.svg'
import Telefone from './../../assets/svg/telephone.svg'
import { useNavigation } from '@react-navigation/core'





const corPrimaria = '#2CBF88'

export default function Sign() 
{
    const [modalVisible, setModalVisible] = useState(false);
    const [signUpModal, setsignUpModal] = useState(false)
    const modalToggle = ()=> setModalVisible(!modalVisible);
    const signUpModalToggle =()=> setsignUpModal(!signUpModal)


    const navigation = useNavigation()
    const navega = () => 
    {
        signUpModalToggle()
        navigation.navigate('signuptelefone')
    }


    return (
        <View style={styles.container}>
            
            <View style={styles.imageContainer}>
                <TouchableOpacity onPress={() => modalToggle()}
                activeOpacity={0.6} style={styles.btnIdioma}>
                    <Image style={styles.imgBandeira} 
                        source={require('./../../assets/img/bandeira.png')}/>
                    <Text style={styles.txtIdioma}>PT</Text>
                    <DownIcon width={10} heigth={10}/>
                </TouchableOpacity>
            <Image source={require('./../../assets/img/logo.png')} 
                style={styles.logo}/>
            </View>

            <View style={styles.wraper}>
                <View>
                    <Text style={styles.txtSlogan}> Os seus produtos preferidos </Text>
                    <Text style={styles.txtSlogan}> Entregues a sua porta!</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={()=> signUpModalToggle()}
                    activeOpacity={0.6}  style={styles.btnInscreverSe}>
                        <Text style={styles.txtSlogan}>Inscreve-se agora</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6}  style={styles.btnNavegar}>
                        <Text style={styles.txtNavegar}>APENAS NAVEGUE</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => modalToggle()}
            >
                <View style={styles.centeredView}>
                <Text style={styles.txtmodalInfo}>Selecione um idioma</Text>
                <View style={styles.modalView}>
                    <TouchableOpacity onPress={()=> modalToggle()} activeOpacity={0.4}  style={styles.btnModalOptions}>
                        <Text style={{color:'#000',fontWeight:'bold'}}>PORTUGUÊS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> modalToggle()} activeOpacity={0.4}  style={styles.btnModalOptions}>
                        <Text style={{color:'#000',fontWeight:'bold'}}>ENGLISH</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </Modal>
            
            <Modal 
                 animationType="slide"
                 transparent={true}
                 visible={signUpModal}
                 onRequestClose={()=>signUpModalToggle()}
                >
                    <View style={{flex:1,justifyContent:'flex-end'}}>
                        <View style={styles.containerModal2}>
                            
                                <Text style={styles.txtCadastraseCom}>Cadastre-se com</Text>
                                <View style={styles.iconContainer}>
                                    <TouchableOpacity style={styles.btnSignOpcion}>
                                        <Facebook width={40} height={40}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.btnSignOpcion}>
                                        <Google width={40} height={40}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={()=> navega()}
                                        style={styles.btnSignOpcion}>
                                        <Telefone width={40} height={40}/>
                                    </TouchableOpacity>
                                </View>
                            
                        </View>
                    </View>
            </Modal>
        </View>
    )
}
