import React from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import HomePages from './Pages/HomePages';
import About from './components/About';
import styled from 'styled-components';
import Post from './Data/Posts';
import {Link} from 'react-router-dom';
import PostArticulo from './components/PostArticulo';










const App = () => {
return (
    
  
<BrowserRouter>
    <ContenedorPrincipal>

        <Navbar/>
<Main>
<Routes>


<Route path = "/" element = {<div> <h1>Pagina de Inicio</h1> <p>Este es la pagina de Home</p></div>}/> 



      <Route path = "/blog" element = {<div> <h2>Blog</h2> 
    <ul>
     {Post.map((Post)=> {
         return (
         <li key={Post.id}>
            <Link to = {`/post/${Post.id}`} >{Post.titulo}</Link> 
         </li>
         )

     })}  
    </ul> 
    </div>}/> 


      <Route path = "/acercaDe" element = {<div> <h1>Acerca de</h1> <p>Me llamo Ariel</p></div>}/>
      <Route path= "/Home" element = {<HomePages/>} />
      <Route path= "usuarios" element = {<HomePages/>}/>
      <Route path= "postarticulo/:id" element = {<PostArticulo/>}/>
      <Route path= "about" element = {<About/>}/>



</Routes>
</Main>
        
    </ContenedorPrincipal>

   

</BrowserRouter>
  

  
);
}


const ContenedorPrincipal = styled.div`
padding:40px;
width: 90%;
max-width: 700px;

`;

const Main = styled.main`
background: #fff;
padding: 40px;
border-radius: 10px;
box-shadow: 0px 0px 5px rgba (129, 129, 129, 0.1);
margin-top: 15px;
`;
 
export default App;

