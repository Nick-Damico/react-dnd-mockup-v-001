import React from 'react';

import CardDetails from './CardDetails';

export default class CharacterCard extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div className="hero__card">
        <CardDetails
          name={this.props.character.name}
          origin={this.props.character.origin}
          description={this.props.character.description}
          racialTraits={this.props.character.racialTraits}
          pic={this.props.character.image}
        />
      </div>
    )
  }
}
