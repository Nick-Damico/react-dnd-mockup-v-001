import React from 'react';
import CharacterCard from './CharacterCard';
import heros from './characters';

export default class CharacterContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: heros
    }
  }

  render() {
    const CharacterCards = this.state.characters.map(character =>
      <CharacterCard
        character={character}
      />
    )
    return (
      <main className="character__container">
        {CharacterCards}
      </main>
    )
  }
}
