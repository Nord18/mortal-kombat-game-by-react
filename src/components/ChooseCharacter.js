import React from 'react';
import focusCharacter from '../mixins/focusCharacter';
import Modal from '../components/UI/Modal'
import IconsList from '../components/IconsList'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

let loadModal = null

class ChooseCharacter extends React.Component {
  constructor(props) {
    super(props)
    this.activeCharacter = React.createRef()
    this.state = {
      selectedCharacters: [],
      selectCharacter: {},
      showModal: false
    }
  }

  componentDidMount() {
    const selectedCharacters = this.props.characters.filter(item => {
      return this.props.match.params.id.split(',').includes(item.id.toString())
    })

    this.setState({
      selectedCharacters
    })

    setTimeout(() => {
      const charactersItems = [...this.activeCharacter.children]
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
    }, 500)
  }
  componentDidUpdate() {

    if (this.state.showModal) {
      loadModal = setTimeout(() => {
        [...this.activeCharacter.children][0].focus()
        this.setState({
          showModal: false
        })
      }, 10000)
    } else {
      window.clearTimeout(loadModal)
    }
  }

  selectCharacter = (evt, item, i) => {
    if (evt.keyCode === 13 && document.activeElement.dataset.id == item.id) {
      [...this.activeCharacter.children][i].blur()
      this.setState({
        selectCharacter: item,
        showModal: true
      })
    }
  }

  closeModal = (evt) => {
    if (evt.keyCode === 13 || evt.keyCode === 27) {
      [...this.activeCharacter.children][0].focus()
      this.setState({
        showModal: false
      })
    }
  }

  render() {
    return (
      <div className="row justify-content-center align-items-center vh-100" ref={ el => this.activeCharacter = el }>
        {
          this.state.selectedCharacters.map((item, index) =>
            <div onKeyDown={(evt) => this.selectCharacter(evt, item, index)} data-id={item.id} key={item.id} tabIndex="0" className="col-md-6">
              <div className="card text-center">
                <div style={{background: `url(${item.pic}) center top`, backgroundSize: 'cover', height: '350px'}} className="card-img-top"></div>
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                </div>
              </div>
            </div>
          )
        }
        {
          <IconsList />
        }
        {this.state.showModal && <Modal closeModal={this.closeModal} yourCharacter={this.state.selectCharacter} />}
      </div>
    )
  }
}

ChooseCharacter.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default withRouter(ChooseCharacter)
