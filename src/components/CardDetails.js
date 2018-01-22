import React from 'react';


export default class CardDetails extends React.Component {

  render() {
    const traitLis = this.props.racialTraits.map((trait,i) => {
        return <li key={i}>{trait},</li>
    })

    return(
      <div className="character__details">
        <h1>
          {this.props.name} <br />
          <span className="character__origin">{this.props.origin}</span>
        </h1>

        <p className="character__description">
          {this.props.description}
        </p>
        <ul className="character__traits">
          <h4>Racial Traits</h4>
          {traitLis}
        </ul>
      </div>
    )
  }
}
