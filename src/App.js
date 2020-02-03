import React from 'react';
import './App.css';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import CharactersList from './components/CharactersList';
import ChooseCharacter from './components/ChooseCharacter';
import Alert from './components/UI/Alert';

const alertTextMain = 'Move around items keys ARROWLEFT and ARROWRIGHT and press ENTER'

let history = createBrowserHistory()

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: [
        {
          name: 'Sub Zero',
          pic: 'https://upload.wikimedia.org/wikipedia/uk/thumb/e/e3/Subzeromk.png/200px-Subzeromk.png',
          select: false,
          id: 1
        },
        {
          name: 'Liu Kang',
          pic: 'https://vignette.wikia.nocookie.net/mkwikia/images/0/00/Liu_Kang_mk11.png/revision/latest?cb=20190329012026',
          select: false,
          id: 2
        },
        {
          name: 'Johnny Cage',
          pic: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Johnny_Render_mk_11.png/220px-Johnny_Render_mk_11.png',
          select: false,
          id: 3
        },
        {
          name: 'Shao Kahn',
          pic: 'https://vignette.wikia.nocookie.net/mkwikia/images/5/5f/Shao_Khan_mk11_default_2.png/revision/latest?cb=20190425000346',
          select: false,
          id: 4
        },
        {
          name: 'Kitana',
          pic: 'https://vignette.wikia.nocookie.net/mkwikia/images/5/59/Kitana_mk11.png/revision/latest?cb=20190413032708',
          select: false,
          id: 5
        },
        {
          name: 'Kung Lao',
          pic: 'https://vignette.wikia.nocookie.net/mkwikia/images/7/7f/Kung_Lao_Mk11.png/revision/latest?cb=20190328091539',
          select: false,
          id: 6
        },
        {
          name: 'Kano',
          pic: 'https://vignette.wikia.nocookie.net/mkwikia/images/6/67/Kano_MK11.png/revision/latest?cb=20190227221749',
          select: false,
          id: 7
        },
        {
          name: 'Major Jackson Briggs',
          pic: 'https://vignette.wikia.nocookie.net/mkwikia/images/4/4c/Jax_mk11.png/revision/latest?cb=20190328005321',
          select: false,
          id: 8
        },
        {
          name: 'Sonya Blade',
          pic: 'https://vignette.wikia.nocookie.net/mkwikia/images/7/72/Sonya_MK_11.png/revision/latest?cb=20190228013545',
          select: false,
          id: 9
        },
        {
          name: 'Shang Tsung',
          pic: 'https://vignette.wikia.nocookie.net/mkwikia/images/8/84/MK11YoungShangTsung.png/revision/latest?cb=20190815003314',
          select: false,
          id: 10
        }
      ],
      selectedCharacters: []
    }
  }

  componentDidUpdate() {
    if (this.state.selectedCharacters.length === 2) {
      history.push(`/choose-character/${this.state.selectedCharacters}`)
    }
  }

  selectCharacter = (evt, item, i) => {
    if (evt.keyCode === 13 && document.activeElement.dataset.id == item.id && this.state.selectedCharacters.length < 2) {
      let selectedCharacters = [...this.state.selectedCharacters]
      let characters = [...this.state.characters]

      characters.map((character, j) => {
        if (j === i) {
          return character.select = !character.select
        } else {
          return character
        }
      })
      this.setState({
        characters
      })

      if (this.state.selectedCharacters.includes(item.id)) {
        selectedCharacters = this.state.selectedCharacters.filter(id => id !== item.id)
        this.setState({
          selectedCharacters
        })
      } else {
        selectedCharacters.push(item.id)
        this.setState({
          selectedCharacters
        })
      }
    }
  }

  render() {
    return (
      <Router history={history}>
        <div className="container justify-content-center">
          <Route exact path="/">
            <CharactersList selectCharacter={this.selectCharacter} characters={this.state.characters} selectedCharacters={this.state.selectedCharacters} />
          </Route>
          <Route path="/choose-character/:id">
            <ChooseCharacter characters={this.state.characters} />
          </Route>
          <Alert text={alertTextMain} bgColor="primary" />
        </div>
      </Router>
    )
  }
}

export default App
