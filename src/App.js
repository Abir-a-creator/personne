import React, {Component} from 'react';
import './App.css';
import Counter from './Component/Counter';

class App extends React.Component {
  state = {
    Person: {
      fullName: "Eckhart Tolle",
      bio: "né le 16 février 1948 à Lünen, Allemagne",
      imgSrc: <img src={"/Eckartimage.jpg"} alt="Image" />,
      profession: "un écrivain et conférencier canadien d'origine allemande"
    },
    show: true
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  render() {
    return (
      <>
        {this.state.show && (
          <>
            <h1>{this.state.Person.fullName}</h1>
            <h2>{this.state.Person.bio}</h2>
           <img src={this.state.Person.imgSrc} alt="Image"></img> 
            <h2>{this.state.Person.profession}</h2>
            <br></br>
          </>
        )}

        <button onClick={this.handleShowPerson}>click here</button>
        <Counter/>
      </>
    );
  }
}
export default App;
