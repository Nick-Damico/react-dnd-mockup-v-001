import React from 'react';


export default class CharacterCard extends React.Component {

  render() {
    const { name, origin, description, racialTraits, image } = this.props.character;
    const traitLis = racialTraits.map((trait,i) => {
        return <li key={i}>{trait},</li>
    })

    return(
      <div className="hero__card">
        <div className="character__details">
          <div className="character__info">
            <h1>
              {name} <br />
              <span className="character__origin">{origin}</span>
            </h1>

            <p className="character__description">
              {description}
            </p>
            <ul className="character__traits">
              <h4>Racial Traits</h4>
              {traitLis}
            </ul>
          </div>
          <div className="character__photo_container">
            <img src={image} alt={name} />
          </div>
        </div>
      </div>
    )
  }
}
