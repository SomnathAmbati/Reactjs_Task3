import {Component} from 'react'

import MiniContainer from './MiniContainer.js'

import './App.css'

const colorList = [
  {id: 1, color: 'red'},
  {id: 2, color: 'green'},
  {id: 3, color: 'blue'},
  {id: 4, color: 'yellow'},
  {id: 5, color: 'violet'},
  {id: 6, color: 'aqua'},
  {id: 7, color: 'orange'},
  {id: 8, color: 'violet'},
  {id: 9, color: 'pink'},
  {id: 10, color: 'green'},
  {id: 11, color: 'orange'},
  {id: 12, color: 'aqua'},
  {id: 13, color: 'brown'},
  {id: 14, color: 'orange'},
  {id: 15, color: 'blue'},
  {id: 16, color: 'yellow'},
]

class App extends Component {
  state = {
    clicked: false,
    clickedColor: 'pink',
  }

  isClicked = () => {
    this.setState(prevState => ({ clicked: !prevState.clicked }))
  }

  colorClicked = (id) => {
    const filterColor = colorList.find(item => item.id === id); // Use .find to get the specific color
    if (filterColor) {
      this.setState({
        clickedColor: filterColor.color,
      });
    }
  }

  render() {
    const { clicked, clickedColor } = this.state;
    return (
      <div className="main-cont">
        <h3>Color Picker</h3>
        <div className="cont" style={{ backgroundColor: clickedColor }}>
          {clicked && (
            <div className="m-cont">
              {colorList.map(eachList => (
                <MiniContainer
                  key={eachList.id} // Added a key prop for each MiniContainer
                  eachList={eachList}
                  colorClicked={this.colorClicked}
                />
              ))}
            </div>
          )}

          <button onClick={this.isClicked}>Pick a Color</button>
        </div>
      </div>
    );
  }
}

export default App;