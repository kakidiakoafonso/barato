import React,{useState,useContext} from 'react'
import { View, Text,Modal ,TouchableOpacity,Image} from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import { Icon } from 'native-base'
import style from './Style'


//Components
import RemoveAccount from "./Components/RemoveAccount";

//SVGs

import LocationIcon from '../../assets/svg/Grupo 647.svg'
import NoteIcon from '../../assets/svg/Grupo 648.svg'
import CallIcon from '../../assets/svg/Grupo 649.svg'
import PersonIcon from '../../assets/svg/person.svg'
import GlobeIcon from '../../assets/svg/globe-1.svg'
import PrivacidadeIcon from '../../assets/svg/confidentiality-1.svg'
import CloseIcon from '../../assets/svg/Grupo 588.svg'
import LogoutIcon from '../../assets/svg/logout-1.svg'
import Logout from './Components/Logout'

//Context
import {UserContext} from '../../data/Contexts/ContextUsuario'


export default function Perfil({navigation}) 
{
    const [mostraModal, setmostraModal] = useState(false)
    const [remover, setremover] = useState(true)

    const modalToggle =()=> setmostraModal(!mostraModal)

    const {btn,user} = useContext(UserContext)
    console.log(user)
    return (
        <View style={style.container}>


        <Modal
            animationType="slide"
            transparent={true}
            visible={mostraModal}>
                <View style={style.Modal}>
                    {
                       remover? <RemoveAccount modalToggle={modalToggle}/>:<Logout modalToggle={modalToggle}/>
                    }
                </View>
        </Modal>


            <View style={style.headerView}>
                <View style={style.perfilView}>
                    <Text style={style.perfilViewTxt}>Perfil</Text>
                </View>
                <View style={style.profileView}>
                    <View style={{width:80,height:80,
                        backgroundColor:'#ccc',borderRadius:40}}>
                    </View>
                    <View style={{marginLeft:10}}>
                        <Text style={[style.txtProfileView,style.txtProfileViewName]}>Kakidiako Afonso</Text>
                        <Text style={style.txtProfileView}>945 176 405</Text>
                        <Text style={style.txtProfileView}>kakidiakoafonso@gmail.com</Text>
                    </View>
                </View>


                <View style={style.headerViewContacts}>
                   <TouchableOpacity style={[style.headerViewContactsItens,{alignItems:'center'}]}>
                       <NoteIcon width={30} height={30}/>
                       <Text numberOfLines={2} style={style.txtHeader}>Histórico</Text>
                   </TouchableOpacity>
                   <TouchableOpacity style={style.headerViewContactsItens}>
                       <CallIcon width={30} height={30}/>
                       <Text textBreakStrategy='balanced' numberOfLines={2} style={style.txtHeader}>Contacte-nos</Text>
                   </TouchableOpacity>
                   <TouchableOpacity style={style.headerViewContactsItens}
                   onPress={()=>navigation.navigate("enderecos")}>
                       <LocationIcon width={30} height={30}/>
                       <Text numberOfLines={2} style={style.txtHeader}>Endereço</Text>
                   </TouchableOpacity>
                </View>
            </View>
        
            <View style={{flex:1}}>
                <View style={[style.wraper,{marginTop:45}]}>
                    <TouchableOpacity  style={style.wraperItens}
                        onPress={()=>navigation.navigate('informacoespessoais')}>
                        <View style={style.wraperItens}>
                            <PersonIcon width={20} height={20} />
                            <Text style={style.txtWraperItens}>Informações pessoais</Text>
                        </View>
                        <Icon name='right' type='AntDesign' style={style.rightIcon}/>
                    </TouchableOpacity>
                    <Divider style={{height:1,backgroundColor:'#ccc',width:'100%',alignSelf:'center'}}/>
                </View>
                <View style={[style.wraper]}>
                    <TouchableOpacity style={style.wraperItens}>
                        <View style={style.wraperItens}>
                            <GlobeIcon width={20} height={20} />
                            <Text style={style.txtWraperItens}>Idioma</Text>
                        </View>
                        <Icon name='right' type='AntDesign' style={style.rightIcon}/>
                    </TouchableOpacity>
                    <Divider style={{height:1,backgroundColor:'#ccc',width:'100%',alignSelf:'center'}}/>
                </View>
                <View style={[style.wraper]}>
                    <TouchableOpacity style={style.wraperItens}>
                        <View style={style.wraperItens}>
                            <PrivacidadeIcon width={20} height={20} />
                            <Text style={style.txtWraperItens}>Privacida e Termos</Text>
                        </View>
                        <Icon name='right' type='AntDesign' style={style.rightIcon}/>
                    </TouchableOpacity>
                    <Divider style={{height:1,backgroundColor:'#ccc',width:'100%',alignSelf:'center'}}/>
                </View>

                <View style={style.footerView}>
                    <Text style={style.txtFooterMais}>Mais</Text>
                    <TouchableOpacity style={[style.footerItens,{marginTop:10}]} onPress={()=>
                        { 
                            modalToggle()
                            setremover(true)
                        }}>
                        <View style={style.wraperItens}>
                            <CloseIcon width={20} height={20} />
                            <Text style={style.txtFooter}>Eliminar conta</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[style.footerItens,{marginTop:10}]} onPress={()=>
                        { 
                            modalToggle()
                            setremover(false)
                        }}>
                        <View style={style.wraperItens}>
                            <LogoutIcon width={20} height={20} />
                            <Text style={style.txtFooter}>Sair</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}
