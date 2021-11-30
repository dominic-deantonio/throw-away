import './App.css';
import MyCard from './components/card';
import React from 'react';
import Header from './components/header';

let rememberedCards = [
  {
    id: 'a',
    creator: 'nellysugu',
    title: 'Farm in Nebraska',
    text: 'This is a picture of a farm',
    imgUrl: "https://foodtank.com/wp-content/uploads/2020/04/COVID-19-Relief_Small-Farms-.jpg"
  },
  {
    id: 'b',
    creator: 'dom',
    title: 'Dairy Cow',
    text: 'Milk this cow',
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Cow_female_black_white.jpg"
  },
  {
    id: 'c',
    creator: 'someoneelse',
    title: 'Chicken',
    text: 'Bok bok bok bok',
    imgUrl: "https://www.goodfood.com.au/content/dam/images/h/1/v/m/6/n/image.related.wideLandscape.460x259.h1vgpj.png/1620349377081.jpg"
  },
  {
    id: 'd',
    creator: 'nellysugu',
    title: 'Pig',
    text: 'Oink oink',
    imgUrl: "https://media.istockphoto.com/photos/cute-pig-leaning-on-railing-of-his-cot-picture-id140462837?k=20&m=140462837&s=612x612&w=0&h=PM_57ox9n_WE_1Q7JdgNeg7kK5SI4Y8C8Z3UYM1m_JY="
  },
];

class App extends React.Component {
  state = {
    learnCount: 0,
    editCount: 0,
    deleteCount: 0,
    cards: [...rememberedCards]
  };

  onDelete = (cardIndex) => {
    const deletedCard = this.state.cards.splice(cardIndex, 1)[0]; // Remove the object at the card index and capture it

    if (rememberedCards.length > 0) {
      // We are currently searching. Need to delete the card from the remembered cards
      rememberedCards = rememberedCards.filter(card => card.id !== deletedCard.id);
    }

    this.setState(
      {
        deleteCount: this.state.deleteCount + 1,
        cards: this.state.cards
      }
    );
  }

  onEdit = () => this.setState({ editCount: this.state.editCount + 1 });

  onLearnMore = () => this.setState({ learnCount: this.state.learnCount + 1 });

  runSearch = (queryString) => {
    let searchResults = [];
    if (queryString) {
      if (rememberedCards.length < 1)
        rememberedCards = [...this.state.cards]; // Save the state of the cards before the search

      // Find the card using the query
      searchResults = rememberedCards.filter(card => card.title.toLowerCase().startsWith(queryString.toLowerCase()));
    } else {
      // If here, the queryString was erased. The search is over
      searchResults = [...rememberedCards]; // Set the search results to whatever the value was before the search
      rememberedCards = []; // Clear the remembered cards to preserve state for the next use 
    }
    this.setState({ cards: searchResults });
  }

  render() {
    const noCards = this.state.cards.length < 1;
    return (
      <>
        <Header {...this.state} runSearch={this.runSearch} />
        {noCards && <div className='d-flex justify-content-center'>No cards found</div> /*In case no cards in list*/}
        <div className="App container">
          {this.state.cards.map((card, i) =>
            <MyCard {...card}
              key={i}
              index={i}
              onLearnMore={this.onLearnMore}
              onEdit={this.onEdit}
              onDelete={this.onDelete}
            />)}
        </div>
      </>
    );
  }
}

export default App;
