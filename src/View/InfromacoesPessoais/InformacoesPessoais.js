import { Icon } from 'native-base';
import React,{useState} from 'react'
import { Modal, Text, View ,TouchableOpacity,TextInput,KeyboardAvoidingView,ActivityIndicator} from 'react-native'
import style from "./Style";


//SVGs
import IconEditar from "../../assets/svg/pencil-square.svg";
import IconAlteradoSucesso from "../../assets/svg/Grupo 556.svg";
const InformacoesPessoais = ({navigation}) => 
{
    const [modalVisivel, setmodalVisivel] = useState(false)
    const modalToggle =()=> setmodalVisivel(!modalVisivel)
    return (
        <View style={style.container}>
            <View style={{marginTop:5}}>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Icon name='left' type='AntDesign'/>
                </TouchableOpacity>
            </View>
            <KeyboardAvoidingView behavior='height'  style={style.containerWraper}>
                <View style={style.txtView}>
                    <Text style={style.txtEdite}>Edite as informações pessoais</Text>
                </View>
                
                <View behavior='position' style={style.infoItens}>
                    <Text style={style.txtinfoItens}>Nome completo</Text>
                    <View style={style.inputContainerView}>
                       <View style={style.inputIcon}>
                            <TextInput style={style.txtInput} value="Kakidiako Afonso Antonio" 
                                />
                            <TouchableOpacity style={{marginRight:15}}>
                                <IconEditar width={20} height={20}/>
                            </TouchableOpacity>
                       </View>
                    </View>
                </View>

                <View behavior='position' style={style.infoItens}>
                    <Text style={style.txtinfoItens}>E-mail</Text>
                    <View style={style.inputContainerView}>
                       <View style={style.inputIcon}>
                            <TextInput style={style.txtInput} keyboardType='email-address' value="kakidiakoafonso@gmail.com" 
                                />
                            <TouchableOpacity style={{marginRight:15}}>
                                <IconEditar width={20} height={20}/>
                            </TouchableOpacity>
                       </View>
                    </View>
                </View>
                <View style={style.infoItens}>
                    <Text style={style.txtinfoItens}>Número de telefone</Text>
                    <View style={style.inputContainerView}>
                       <View style={style.inputIcon}>
                            <TextInput style={style.txtInput} keyboardType='phone-pad' value="945176405" 
                                />
                            <TouchableOpacity style={{marginRight:15}}>
                                <IconEditar width={20} height={20}/>
                            </TouchableOpacity>
                       </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
            <TouchableOpacity activeOpacity={0.6} style={style.btnSalvar}
                onPress={()=>modalToggle()}>
                    <Text style={style.txtSalvar}>Salvar</Text>
            </TouchableOpacity>
            <Modal visible={modalVisivel} transparent>
                <View style={style.Modal}>
                    <View style={style.modalWraper}>
                        <View style={style.iconSuceso}>
                            <IconAlteradoSucesso width={50} height={50}/>
                        </View>
                        <Text style={style.txtInformacoesAlterada}>Informações alteradas</Text>

                        <TouchableOpacity onPress={()=>modalToggle()} >
                            <Text>CONTINUAR</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default InformacoesPessoais
