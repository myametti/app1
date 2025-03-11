import './Vistas/Inicio.css';
import grammy from './Vistas/imagenes/grammy1.png';
import grammy2 from './Vistas/imagenes/1989.webp';
import Noticias from '../Noticias';
import React, { useState, useEffect } from 'react';
const Inicio=()=>{
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    process.env.PUBLIC_URL + '/imagenes/inicio.jpg',
    process.env.PUBLIC_URL + '/imagenes/inicio2.webp',
    process.env.PUBLIC_URL + '/imagenes/inicio3.png',
  ];
  
//hook useEffect: lo uso para sincronizar componentes con sistemas externos, nos permite controlar efectos secundarios provocados por cambios de estados
//recibe dos argumentos, primero la funcion de callback con acciones a ejecutra que la primera vez se hace siempre, segundo un arreglo de dependecnias donde se indica que estados deben cambiar para que se vuelva
//a ejecutar la funcion del primero
//useEffect(fn) es con todos los estados, puede llegar a hacer loops como en el caso del effect de noticias, si no le pongo estado cada 5 segundos se ejecutara por 
//el intervalo del cambio del fondo
//useEffect(fn,[]) con ningun estado, se ejecuta la priemra vez y despues nunca mas ya que no recibe ningun estado el cual fijarse si cambio o no
//useEffect(fn,[con,estos,estados]), cuando se realiza un cambio en alguno de estos estados, realiza la funcion del efecto

//PROMESAS: son como funciones que se ejecutan y retornan algo, ya sea un objeto como una variable o una funcion o un arreglo
//Puede tener 3 estados: PENDING (cuando no se completa ni rechaza, esta vacia), FULFILLED (cuando se resuelve y retorna algo con exito, seria el then/try), REJECTED (cuando se rechaza y da algun error, seria el catch)
//en este caso estoy haciendo una promesa de que cuando se resuelva me devuelva el indice actual
    useEffect(() => {
      //esta seria mi funcion a ejecutar
      let intervalId;
      const promesa =new Promise((resolve,reject) =>{
        const aleatorio= Math.random() < 0.5;//esto hace que se elija aleatoriamente si se rechaza o no la promesa, si se rechaza se para de sincronizar y se queda asi hasta q se recsargue al pagina
        if(aleatorio)
        resolve(imageIndex);//lo que sea que ponga no importa porque con el resolve ya se acepta la promesa y se completa, si pongo reject lo que sea que ponga ya se rechazo la promesa
        else
        reject("Fallo la sincronizaicon de imagenes");//puedo tener ambas, pero se toma la que este primera escrita, es decir que si primero esta el reject entonces se ejecuta esa
      });
      
      console.log(promesa);
      //se pueden concatenar "then", por si quiero que se haga algo mas ademas de la resolucion o rechazo
      promesa.then(exito =>{//si se resuelve va a la primera variable (onfulfilled), en este caso exito, si se rechaza va a la segunda(onrejected), en este caso error
        console.log("El indice actual es: "+ exito);
         intervalId = setInterval(() => {//la funcion hace que en un intervalo de 5seg se cambie el indice del arreglo de imagenes si la promesa se resuelve, sino se queda congelada en una
          setImageIndex((prevIndex) => (prevIndex + 1) % images.length);  
        }, 3000);
      }, error =>{
        console.log(error);
        
      }
      ).then(() =>{
        console.log("SIEMPRE TS");
      }).finally(()=>{//me cierra la promesa y me indica cuando termina todo, tanto las acciones de algo completado como de algo rechazado, es el ultimo paso y se ejecuta siempre
        console.log("finalizada");
      });
      return () => clearInterval(intervalId);//por eso siempre el intervalo debe estar dentro de una variable, para poder cancelarlo
    }, 
    //images.length seria mi estado, en este caso es solo 1
    [images.length,imageIndex]);

//entonces en este caso se sincroniza el efecto con el estado de la foto,se va a settear una imagen segun el indice del arreglo con el images.length
    return(
        <div className="inicio" style={{  backgroundImage: `url(${images[imageIndex]})`,backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <Noticias imagenes={[grammy, grammy2 ]} title={[{t:"Taylor en los Grammys!"},{t:"Nuevo Album!"}]} 
          text={['Se veia hermosa con ese vestido rojo bejeweled, la T de Taylor (o Travis) en su upper thigh fue espectacular', 'Se anuncio la regrabacion de 1989']}/>

        </div>
    )
}

export default Inicio;