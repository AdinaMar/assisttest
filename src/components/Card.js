import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import '../style/Card.css';
import Modalpopup from './Modalpopup';

const Card = () => {

    const [cards, setCards] = useState([]);

    useEffect(()=> {
        axios.get('https://techcrunch.com/wp-json/wp/v2/posts?per_page=100&context=embed')
        .then(res=> {
            console.log(res)
            setCards(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    }, []);

 

    const cardDelete = (id) => {
        axios.delete(`https://techcrunch.com/wp-json/wp/v2/posts?per_page=100&context=embed/${id}`)
        .then(res=> console.log("delete", res))
        .catch(err => console.log(err))
    } 

const [buttonPopup, setButtonPopup] = useState(false);



  return (
    <div className="cards-container"> 
    {
        cards.map(card => <div className="card" key={card.id}><p className="title"> {card.title.rendered} </p>
        <img src={card.jetpack_featured_media_url} alt="image" />
        <p>{card.excerpt.rendered}</p>
        <p className="date">{card.date}</p>
        <div className="buttons">
            <button>EDIT</button>
            <button onClick={()=> setButtonPopup(true)}>DELETE</button>
            <Modalpopup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h3>Are you sure you want to remove " {card.title.rendered} " ?</h3>

            </Modalpopup>
            
         </div>
        
    
          </div>)  
          }
        
    
    
  
    </div>
  )
}

export default Card
