import { Icon } from 'native-base';
import React,{useRef} from 'react'
import { StyleSheet, Text,TouchableOpacity, View,ScrollView } from 'react-native'
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import DropDownMenuDays from './DropDownMenuDays';

const DropDownMenu = () => 
{
    const menu = useRef(null)
    const subMenu = useRef(null)
    const mostramenu = () => menu.current.show()
    const mostrasubmenu = () => subMenu.current.show()
    const diasDeSemana = ['Domingo','Segunda-feira','Terca-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sabado']
    const horarios = ['6:00 as 7:00','7:00 as 8:00','8:00 as 9:00','9:00 as 10:00','10:00 as 11:00','11:00 as 12:00']
    return (
        <Menu
            ref={menu}
            style={{height:200,width:110,marginRight:10}}
            button=
            {
                <TouchableOpacity style={styles.btn} onPress={()=>mostramenu()}>
                    <Text style={styles.txtBtn}>1h</Text>
                    <Icon name='caretdown' type='AntDesign' style={styles.iconBtn}/>
                </TouchableOpacity>
            }
        >
            {
                diasDeSemana.map((item,key)=>(
                    <MenuItem style={{height:27}} key={key} onPress={()=>mostrasubmenu()}>
                        {item}
                        <Menu style={{height:180,width:100,marginLeft:46}} ref={subMenu}
                            //horarios.map((item,key)=><Text key={key}>{item}</Text>)
                        >
                            {
                                horarios.map((item,key)=>
                                <MenuItem style={{width:'100%',height:25,
                                marginLeft:-13
                                    }} key={key}>
                                    {item}
                                </MenuItem>)
                            }
                        </Menu>
                    </MenuItem>
                ))
            }
        </Menu>
    )
}

export default DropDownMenu


const verde = '#2cbf88'
const  cinzaClaro = '#efefef'
const  preto = '#323232'
const  amarelo= '#c3e952'
const  cinzaEscuro= '#cecece'

const styles = StyleSheet.create({
    btn:
    {
        width:50,height:30,
        backgroundColor:cinzaEscuro,
        marginLeft:20,alignItems:"center",
        justifyContent:'space-evenly',
        borderRadius:5,
        flexDirection:'row'
    },
    txtBtn:
    {
        color:verde, fontFamily:'Montserrat-Bold',
        fontSize:18
    },
    iconBtn:
    {
        fontSize:11
    }
})
