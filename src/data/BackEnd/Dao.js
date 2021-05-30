import firestore from '@react-native-firebase/firestore';

export default DAO = {
    setCategoria: async function(set,setloading)
    {
        await firestore().collection('categorie').get().then(onfullfiled=>{
            const categorias = []
            onfullfiled.forEach(doc =>{
                categorias.push(doc.data())
            })
            set(categorias)
            setloading(false)
        },
        rejeitado=>{
            console.log("Rejeitado")
        })
    },
    PesquisarCategoria: async function(set,texto)
    {
        await firestore().collection('categorie').get().then(onfullfiled=>{
            const categorias = []
            onfullfiled.forEach(doc =>{
                if(doc.data().name==texto)
                {
                    categorias.push(doc.data())
                }
                
            })
            set(categorias)
        },
        rejeitado=>{
            console.log("Rejeitado")
        })

    },
    setProdutos: async function(set,setloading){
        await firestore().collection('product').get().then(onfullfiled=>{
            const Produtos = []
            onfullfiled.forEach(doc =>{
                console.log(doc.data())
                Produtos.push(doc.data())
            })
            set(Produtos)
            setloading(false)
        },
        rejeitado=>{
            console.log("Rejeitado :" + rejeitado)
        })
    },
    PesquisarProduto: async function(set,texto,setloading)
    {
        await firestore().collection('product').get().then(onfullfiled=>{
            const categorias = []
            onfullfiled.forEach(doc =>{
                if(doc.data().name==texto)
                {
                    categorias.push(doc.data())
                }
                
            })
            set(categorias)
            setloading(false)
        },
        rejeitado=>{
            console.log("Rejeitado")
        })

    },
    getFavoritos: async function(userId,set)
    {
        // await firestore().collection('cliente').doc(
        //     'wvWKRqW1bHW1LzhhxRVb'
        //     ).get().then(data =>{
        //         console.log("Certo"+ data.data());
        //     },
        //     erro=>{
        //         console.log("Erro", erro);
        //     }) 
       
        const doc = await firestore().collection("product").doc("J1nOeG5pd9bfXqerdywb").get()
        console.log(doc)
        
    },
    getUserInfo: async function (setuser)
    {
       
        const dados = await firestore().collection('cliente').doc("wvWKRqW1bHW1LzhhxRVb").get().then(
            resultado =>{
                console.log(resultado.data())
                setuser(resultado.data())
            },
            rejeitado =>{
                console.log(rejeitado);
            }
        )

    },
    updateUser: async function (nome,email,tel,setModal){
        //console.log(nome+" "+email+" "+tel);
        firestore().collection('cliente').doc('wvWKRqW1bHW1LzhhxRVb').update({
            name:nome,
            email: email,
            tel:tel
        }).then(
            resultado=> {
                setModal(true)
        },
            rejeitado=> {console.log(rejeitado)}
        )
    }
}














/*

 await firestore().collection('categorie').get().then(onfullfiled=>{
            const categorias = []
            onfullfiled.forEach(doc =>{
                if(doc.data().name==texto)
                {
                    categorias.push(doc.data())
                }
                
            })
            set(categorias)
        },
        rejeitado=>{
            console.log("Rejeitado")
        })

*/