import React from 'react';


//creamos contexto = estado global.
const ContextoTema = React.createContext();

const proveedorTema  = ({children}) => {
    return(
    <ContextoTema.Provider value={{nombre: 'Ariel'}}>
        {children}
    </ContextoTema.Provider>
        
    );
}
 
export {ContextoTema, proveedorTema } ;
