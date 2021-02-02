import React from 'react';
import { Slide } from 'react-slideshow-image';
import Card from './components/Card'
import {useBreakpointBox} from './components/hooks.js'

import 'react-slideshow-image/dist/styles.css'
import './App.css'

const profile = {
name: "J-C. L'Aubervière",
contrat: "CDI",
profession: "Profession libérale",
candidat: "2600$",
garants: "5300$",
date: "Visite du 13 mars à 10h15"
}

const getCards = (nb) => {
  let tab = []
  for(let i = 0; i < nb; i++)
   tab[i] = <Card nb={nb} {...profile}/>
  return tab
}

function App() {

  const slidesToShow = useBreakpointBox() - 1
  const cards = getCards(slidesToShow)

  return (
          <div className="slide-container">
            <Slide autoplay={false}>
              <div className="each-slide">
                  {[...cards]}
              </div>
              <div className="each-slide">
                  {[...cards]}
              </div>
            </Slide>
          </div>
        )
}

export default App;
