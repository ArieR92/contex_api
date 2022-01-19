import React from 'react';
import Posts from '../Data/Posts';
import { useParams } from 'react-router-dom';



const PostArticulo = () => {
    const {id} = useParams();
    console.log(Posts[id])

    return ( 
    <>
    <h1>{Posts[id-1].titulo}</h1> 
        <p>{Posts[id-1].texto}</p>
    </>
        
        );
}
 
export default PostArticulo ;