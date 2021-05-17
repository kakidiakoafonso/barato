import React,{createContext,useState,useEffect} from 'react'

export const Carrinho = createContext()
export default function ContextCarrinho({children}) 
{
    const [carrinhoDados, setcarrinhoDados] = useState([])
    const adicionarNoCarrinho = (e) => setcarrinhoDados([...carrinhoDados, e])
    const removeNocarrinho = e => setcarrinhoDados([])//setcarrinhoDados(carrinhoDados.filter(i => i !==e))
    const estaNocarinho = e => carrinhoDados.includes(e)



    return (
        <Carrinho.Provider value={{setcarrinhoDados,carrinhoDados,adicionarNoCarrinho,estaNocarinho,removeNocarrinho}}>
            {children}
        </Carrinho.Provider>
    )
}
