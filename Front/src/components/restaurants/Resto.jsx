import "./restaurant.css";
import Carrousel from "../outils/carroussel/Carroussel";
// image
import bayern from '../../assets/equipe/bayern.png'
import city from '../../assets/equipe/city.png'
import resto1 from '../../assets/resto/resto1.jpg'
import match from '../../../../backend/Api/match.json'

import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatchesFromAPI = async () => {
      const apiURL = '/backend/Api/match.json';

      try {
        const response = await fetch(apiURL);

        if (!response.ok) {
          throw new Error('La requête n\'a pas abouti.');
        }

        const data = await response.json();
        setMatches(data);
      } catch (error) {
        console.error('Erreur :', error);
      }
    };
    
    fetchMatchesFromAPI();
  }, []); // Le tableau vide en deuxième argument signifie que cette fonction useEffect s'exécutera une seule fois après le montage initial du composant.
  
  return (
    <div>
      {/* Affichez les données récupérées ici */}
      {matches.map((match) => (
        <div key={match.id}>
          <p>Date: {match.date}</p>
          <p>Heure: {match.heure}</p>
          {/* Affichez les autres informations du match ici */}
        </div>
      ))}
    </div>
  );
}
console.log(data, "la valeur de mon est objet est ");



const Resto = () => {
    return <>
        <Carrousel/>
      <main id="resto">
        
      <h2 id="restaurants">Restaurants</h2>
      <section>

          <article className="resto">
          <figure>
            <img src={resto1} alt="" />
          </figure>
          <h3>Nom du Restaurant</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro similique sed neque, fuga laudantium in assumenda numquam hic sunt qui, esse itaque necessitatibus mollitia id illo, eum eligendi soluta vitae.</p>
          <div>
            <figure>
                <img src={bayern} alt="" />
            </figure>

            <p>VS</p>

            <figure>
                <img src={city} alt="" />
            </figure>
          </div>
          <a href="/assets/html/restaurant.html"> En savoir plus </a>
          </article>

          <article className="resto">
          <figure>
            <img src={resto1} alt="" />
          </figure>
          <h3>Nom du Restaurant</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro similique sed neque, fuga laudantium in assumenda numquam hic sunt qui, esse itaque necessitatibus mollitia id illo, eum eligendi soluta vitae.</p>
          <div>
            <figure>
                <img src={bayern} alt="" />
            </figure>

            <p>VS</p>

            <figure>
                <img src={city} alt="" />
            </figure>
          </div>
          <a href="/assets/html/restaurant.html"> En savoir plus </a>
          </article>

          <article className="resto">
          <figure>
            <img src={resto1} alt="" />
          </figure>
          <h3>Nom du Restaurant</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro similique sed neque, fuga laudantium in assumenda numquam hic sunt qui, esse itaque necessitatibus mollitia id illo, eum eligendi soluta vitae.</p>
          <div>
            <figure>
                <img src={bayern} alt="" />
            </figure>

            <p>VS</p>

            <figure>
                <img src={city} alt="" />
            </figure>
          </div>
          <a href="/assets/html/restaurant.html"> En savoir plus </a>
          </article>

          <article className="resto">
          <figure>
            <img src={resto1} alt="" />
          </figure>
          <h3>Nom du Restaurant</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro similique sed neque, fuga laudantium in assumenda numquam hic sunt qui, esse itaque necessitatibus mollitia id illo, eum eligendi soluta vitae.</p>
          <div>
            <figure>
                <img src={bayern} alt="" />
            </figure>

            <p>VS</p>

            <figure>
                <img src={city} alt="" />
            </figure>
          </div>
          <a href="/assets/html/restaurant.html"> En savoir plus </a>
          </article>

          <article className="resto">
          <figure>
            <img src={resto1} alt="" />
          </figure>
          <h3>Nom du Restaurant</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro similique sed neque, fuga laudantium in assumenda numquam hic sunt qui, esse itaque necessitatibus mollitia id illo, eum eligendi soluta vitae.</p>
          <div>
            <figure>
                <img src={bayern} alt="" />
            </figure>

            <p>VS</p>

            <figure>
                <img src={city} alt="" />
            </figure>
          </div>
          <a href="/assets/html/restaurant.html"> En savoir plus </a>
          </article>

      </section>

    </main>
        
    </>
}

export default Resto;