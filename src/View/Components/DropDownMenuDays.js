import { Icon } from 'native-base';
import React,{useRef} from 'react'
import { StyleSheet, Text,TouchableOpacity, View } from 'react-native'
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

const DropDownMenuDays = ({ref}) => 
{
    const menu = useRef(null)
    const mostramenu = () => menu.current.show()
    const dias = [1,2,3,4,5,6,7]
    return (
        <Menu
        
            ref={ref}
            
        >
            {
                dias.map((item,key)=>(
                    <MenuItem  key={key}>
                        {item}
                    </MenuItem>
                ))
            }
        </Menu>
    )
}

export default DropDownMenuDays


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
