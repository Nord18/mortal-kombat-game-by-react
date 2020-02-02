import React from 'react';
import focusCharacter from '../mixins/focusCharacter'
import PropTypes from 'prop-types';

class CharactersList extends React.Component {
  constructor(props) {
    super(props)
    this.characters = React.createRef()
  }

  componentDidMount() {
    if (this.props.selectedCharacters.length < 2) {
      const charactersItems = [...this.characters.children]
      charactersItems[0].focus()

      document.addEventListener('keydown', evt => {
        if (evt.keyCode === 37) {
          evt.preventDefault()
          focusCharacter(charactersItems, -1)
        } else if (evt.keyCode === 39) {
          evt.preventDefault()
          focusCharacter(charactersItems, 1)
        }
      })
    }
  }

  render() {
    return (
      <div className="row justify-content-center" ref={ el => this.characters = el }>
        {
          this.props.characters.map((item, index) =>
            <div onKeyDown={(evt) => this.props.selectCharacter(evt, item, index)} data-id={item.id} key={item.id} tabIndex="0" className={`col-md-4 mb-4 ${item.select ? 'border border-success' : ''}`}>
              <div className="card">
                <div style={{background: `url(${item.pic}) center top`, backgroundSize: 'cover', height: '150px'}} className="card-img-top"></div>
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                </div>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

CharactersList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedCharacters: PropTypes.arrayOf(PropTypes.number).isRequired
}

export default CharactersList
