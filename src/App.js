import './App.css';
import MyCard from './components/card';
import React from 'react';
import ClickCount from './components/click-count';

const cards = [
  {
    creator: 'nellysugu',
    title: 'Title here 1!',
    text: 'Something',
    imgUrl: "https://foodtank.com/wp-content/uploads/2020/04/COVID-19-Relief_Small-Farms-.jpg"
  },
  {
    creator: 'dom',
    title: 'Title here 2!',
    text: 'Something',
    imgUrl: "https://foodtank.com/wp-content/uploads/2020/04/COVID-19-Relief_Small-Farms-.jpg"
  },
  {
    creator: 'someoneelse',
    title: 'Title here 2!',
    text: 'Something',
    imgUrl: "https://foodtank.com/wp-content/uploads/2020/04/COVID-19-Relief_Small-Farms-.jpg"
  }
]

class App extends React.Component {
  state = {
    clickCount: 0,
  };

  handleDefaultBtnClick = () => {
    this.setState({
      clickCount: this.state.clickCount + 1
    })
  };

  render() {
    return (
      <>
        <ClickCount count={this.state.clickCount} />
        <div className="App container">
          {cards.map((card, i) => <MyCard {...card}
            key={i}
            handleDefaultBtnClick={this.handleDefaultBtnClick} />)}
        </div>
      </>
    );
  }
}

export default App;
