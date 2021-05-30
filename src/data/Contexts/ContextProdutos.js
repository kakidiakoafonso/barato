import React,{createContext,useState,useEffect} from 'react'
import Dao from '../BackEnd/Dao'
export const Produtos = createContext()
export default function ContextProdutos({children}) 
{
    const [categorias, setcategorias] = useState([])
    const [produtos, setprodutos] = useState([])
    const [favoritos, setfavoritos] = useState([])
    //Categoria Funcoes
    const getCategorias = async (setloading) => Dao.setCategoria(setcategorias,setloading)
    const PesquisaCategoria = async (e) =>  Dao.PesquisarCategoria(setcategorias,e)

    //Produtos
    const getProdutos = async (setloading) => Dao.setProdutos(setprodutos,setloading)
    const pesquisarProdutos = async (setloading,texto) => Dao.PesquisarProduto(setprodutos,texto,setloading)
    
    //Fatoritos
    const setFavoritos = (userId) => Dao.getFavoritos(userId,setFavoritos)


    
    return (
        <Produtos.Provider value={{getCategorias,categorias, produtos, 
        getProdutos, PesquisaCategoria,pesquisarProdutos,setFavoritos,favoritos
        }}>
            {children}
        </Produtos.Provider>
    )
}
