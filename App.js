import React from 'react'
import UserProvider from "./src/data/Contexts/ContextUsuario"
import Rotas from "./src/Route"

export default function Route() 
{
  return (
        <UserProvider>
          <Rotas/>
        </UserProvider>
  )
}
