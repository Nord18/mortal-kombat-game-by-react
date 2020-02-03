import React from 'react';
import Alert from '../components/UI/Alert';

const alertTextIconChange = 'Change Icons key QWERTY'

class IconsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      icons: {
        q: {
          indx: 0,
          items: ['fab fa-adversal', 'fas fa-ad', 'fas fa-address-card']
        },
        w: {
          indx: 0,
          items: ['fas fa-apple-alt', 'fab fa-angellist', 'fab fa-accessible-icon']
        },
        e: {
          indx: 0,
          items: ['fab fa-apper', 'fas fa-angle-double-up', 'fab fa-bimobject']
        },
        r: {
          indx: 0,
          items: ['fab fa-angrycreative', 'fas fa-ad', 'fas fa-arrow-alt-circle-right']
        },
        t: {
          indx: 0,
          items: ['fas fa-angry', 'fab fa-behance-square', 'fab fa-bluetooth-b']
        },
        y: {
          indx: 0,
          items: ['fas fa-angle-double-down', 'fab fa-black-tie', 'fas fa-bus']
        }
      }
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', evt => {
      let icons = null

      const changeIndexIcon = (field) => {
        this.setState(prevState => {
          icons = Object.assign({}, prevState.icons)
          icons[field].indx = this.state.icons[field].indx >= this.state.icons[field].items.length - 1 ? 0 : icons[field].indx + 1
          return {
            icons
          }
        })
      }

      switch (evt.keyCode) {
        case 81:
          changeIndexIcon('q')
          break;
        case 87:
          changeIndexIcon('w')
          break;
        case 69:
          changeIndexIcon('e')
          break;
        case 82:
          changeIndexIcon('r')
          break;
        case 84:
          changeIndexIcon('t')
          break;
        case 89:
          changeIndexIcon('y')
          break;
      }
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row align-items-center justify-content-center mb-4">
          {
            Object.keys(this.state.icons).map((item, i) => (
              <span key={i} style={{fontSize: '3rem'}} className="mr-5">
                <i className={this.state.icons[item].items[this.state.icons[item].indx]}></i>
              </span>
            ))
          }
        </div>
        <Alert text={alertTextIconChange} bgColor="warning" />
      </div>
    )
  }
}

export default IconsList
