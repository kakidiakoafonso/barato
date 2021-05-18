import React,{useState} from 'react'
import { StyleSheet,TouchableOpacity, Text, View ,Modal} from 'react-native'
import { Header, Icon, CheckBox } from 'native-base'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import styles from './Style'


//SVGs

import LocationIcon from '../../assets/svg/placeholder-2.svg'
import CarrinhoIcon from '../../assets/svg/Grupo 481.svg'
import TargetIcon from '../../assets/svg/target.svg'
import SucessIcon from  "../../assets/svg/Grupo 556.svg";


//Components
import DropDownMenu from '../Components/DropDownMenu'


export default function Encomenda({navigation}) 
{
    const [modalSucessoShow, setmodalSucessoShow] = useState(false)
    const TerminarEncomenda =()=> setmodalSucessoShow(!modalSucessoShow)
    return (
        <View style={{flex:1,backgroundColor:'#fff'}}>
            
            <Header style={{backgroundColor:'#fff',justifyContent:'flex-start',alignItems:'center'}}  
                transparent={true}>
                    <TouchableOpacity style={{width:50,height:40,justifyContent:'center'}}
                        onPress={()=>navigation.goBack()}>
                        <Icon name='left' type='AntDesign' />
                    </TouchableOpacity>
            </Header>
            <Text style={styles.txtEncomenda}>Detalhes do pagamento</Text>
            <View style={{flex:1}}>
                <View style={styles.counterContainerView}>
                    <View style={styles.countItemView}>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Text style={styles.txtCountLef}>Sub total</Text>
                            <Text style={styles.txtCountRight}>100 KZ</Text>
                        </View>
                        <Divider style={{height:1,backgroundColor:'#ccc',width:'95%',alignSelf:'center'}}/>
                    </View>
                    <View style={styles.countItemView}>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Text style={styles.txtCountLef}>Entrega</Text>
                            <Text style={styles.txtCountRight}>700 KZ</Text>
                        </View>
                        <Divider style={{height:1,backgroundColor:'#ccc',width:'95%',alignSelf:'center'}}/>
                    </View>
                    <View style={styles.countItemView}>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Text style={styles.txtCountLef}>Total</Text>
                            <Text style={[styles.txtCountRight,styles.txtTotal]}>1100 KZ</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.LocalizacaoContainerView}>
                    <Text>Entrega para</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:4}}>
                        <LocationIcon width={30} height={30}/>
                        <TouchableOpacity style={styles.btnLocation}>
                            <Text style={{fontFamily:'Montserrat-Regular'}}>Kilamba, Luanda</Text>
                            <Icon name='caretdown' type='AntDesign' style={{fontSize:12}}/>
                        </TouchableOpacity>
                        <TargetIcon width={30} height={30}/>
                    </View>
                    <Divider style={{height:1,backgroundColor:'#ccc',width:'100%',alignSelf:'center'}}/>
                </View>

                <View style={{height:50,justifyContent:'space-between',width:'90%',alignSelf:'center'}}>
                    <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                        <Icon name='clockcircleo' type='AntDesign' style={{fontSize:17,marginRight:5}}/>
                        <Text>Tempo de entrega</Text>
                        <DropDownMenu/>
                    </View>
                <Divider style={{height:1,backgroundColor:'#ccc',width:'100%',alignSelf:'center'}}/>
                </View>
                <View style={styles.pagamentoView}>
                    <View style={{width:300}}>
                        <Text style={{marginTop:10,marginBottom:5}}>Forma de pagamento</Text>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <View style={{flexDirection:'row'}}>
                                <CheckBox style={styles.checkboxSelecionado} checked={true} />
                                <Text style={{marginLeft:15}}>Multicaixa</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <CheckBox style={styles.checkboxNaoSelecionado} checked={false} />
                                <Text style={{marginLeft:15}}>Dinheiro</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{position:'absolute',width:'100%',bottom:5,flexDirection:'row',
                    justifyContent:'space-evenly'}}>
                    <View style={styles.precoView}>
                        <CarrinhoIcon width={25} height={25} />
                        <Text style={{fontWeight:'bold'}}>900 KZ</Text>
                    </View>
                    <TouchableOpacity onPress={()=>TerminarEncomenda()}
                        style={styles.btnEncomenda}> 
                        <Text style={{fontFamily:'Montserrat-Regular',color:'#fff',
                            fontWeight:'bold',fontSize:16}}>
                            Faça encomenda</Text>
                        <Icon name='rightcircle' type='AntDesign' style={styles.iconeIr}/>
                    </TouchableOpacity>
                </View>
            </View>
            <Modal transparent visible={modalSucessoShow}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalWrapper}>

                            <View style={styles.infos}>
                                <View style={styles.ModalSucessIconView}>
                                    <SucessIcon width={50} height={50}/>
                                </View>
                                <Text style={styles.txtInfoAviso}>Sua encomenda foi feita com sucesso</Text>
                                <Text style={styles.txtDetalhe}>
                                    Os produtos serão entregues dentro de 1h
                                </Text>
                                <TouchableOpacity onPress={()=> setmodalSucessoShow(!modalSucessoShow)}>
                                    <Text style={styles.txtContinuar}>CONTINUAR</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
            </Modal>
        </View>
    )
}