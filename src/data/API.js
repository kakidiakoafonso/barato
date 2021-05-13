import axios from 'axios'

const baseEndpoint = "https://baratoserver.herokuapp.com/api/v1"
const categorias = [
    {id:1,categoria:'Frutas',titulo:'Frutas e legumes',img:'https://i.pinimg.com/originals/eb/1f/86/eb1f86ed31ca44edfc10105a711db8f4.jpg'},
    {id:2,categoria:'Frutas',titulo:'Frutas e legumes',img:'https://i.pinimg.com/originals/eb/1f/86/eb1f86ed31ca44edfc10105a711db8f4.jpg'},
    {id:3,categoria:'Petisco',titulo:'Petisco',img:'https://www.dicasdemulher.com.br/wp-content/uploads/2020/02/petiscos-capa-1200x738.jpg'},
    {id:4,categoria:'Petisco',titulo:'Petisco',img:'https://www.dicasdemulher.com.br/wp-content/uploads/2020/02/petiscos-capa-1200x738.jpg'},
    {id:5,categoria:'Bebidas',titulo:'Bebidas',img:'https://veja.abril.com.br/wp-content/uploads/2018/11/saide-cerveja-gim-20180225-004.jpg'},
    {id:6,categoria:'Frescos',titulo:'Frescos',img:'https://veja.abril.com.br/wp-content/uploads/2018/11/saide-cerveja-gim-20180225-004.jpg'},
    {id:7,categoria:'Ervas',titulo:'Ervas',img:'https://octoshop.sfo2.digitaloceanspaces.com/lojas/padellasaobenedito/uploads_produto/couve-manteiga-5e975d60d4256.png'},
    {id:8,categoria:'Utensilios',titulo:'Utensilios',img:'https://a-static.mlcdn.com.br/618x463/kit-utensilios-de-cozinha-euro-home-inox-gadgets-4-pecas/magazineluiza/221900000/de6be6cb8a1c7096571f5e2a9a6d9936.jpg'},
    {id:9,categoria:'Limpeza',titulo:'Limpeza',img:'https://img.imageboss.me/consul/cdn/animation:true/wp-content/uploads/2020/09/thumb-Lista-de-produtos-de-limpeza-que-nao-podem-faltar-na-sua-casa.jpg'},
]


export const produtos = [
    {id:1,nome:'Coca Cola',quantidade:10,descricao:'Coca Cola Fresca',preco:350,img:'https://araujo.vteximg.com.br/arquivos/ids/4042618-1000-1000/07894900010015.jpg?v=637436775975100000'},
    {id:2,nome:'Coca Cola',quantidade:10,descricao:'Coca Cola Fresca',preco:350,img:'https://araujo.vteximg.com.br/arquivos/ids/4042618-1000-1000/07894900010015.jpg?v=637436775975100000'},
    {id:3,nome:'Coca Cola',quantidade:10,descricao:'Coca Cola Fresca',preco:350,img:'https://araujo.vteximg.com.br/arquivos/ids/4042618-1000-1000/07894900010015.jpg?v=637436775975100000'},
    {id:4,nome:'Coca Cola',quantidade:10,descricao:'Coca Cola Fresca',preco:350,img:'https://araujo.vteximg.com.br/arquivos/ids/4042618-1000-1000/07894900010015.jpg?v=637436775975100000'},
    
]
export const getCategorias = async ()=>
{
   axios.get("https://baratoserver.herokuapp.com/api/v1/categories").
        then((resposta)=>
        {
           console.log(r)
        }).catch((erro)=>
        {
            console.log(e)
        })
   return {dados}
}
export const getUserInfo = async (setUserinfo)=>
{
    const dados = await axios.get("https://baratoserver.herokuapp.com/api/v1/user/60759e2614f19337960d11fb")
    await setUserinfo(dados.data)
   //console.log(dados.data)
}
export default categorias; 