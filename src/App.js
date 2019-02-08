
import React, { Component } from 'react';
import './App.css';

var wisdoms = [

  "Semper Ubi Sub Ubi. (Always wear underwear.)",
  "The first time I got a universal remote control I thought to myself, 'This changes everything.'",
  "As I watched the dog chasing his tail I thought 'Dogs are easily amused', then I realized I was watching the dog chasing his tail.",
  "If doctors were like software engineers, they would say things like 'Have you tried killing yourself and being reborn?.'",
  "'Debugging' is like being the detective in a crime drama where you are also the murderer.",
  "!false(It’s funny because it’s true.)",
  "A programmer puts two glasses on his bedside table before going to sleep. A full one, in case he gets thirsty, and an empty one, in case he doesn’t.",
  "Floss your teeth every day.",
  "What did the router say to the doctor?'It hurts when IP'",
  "There are only 10 types of people in the world: those that understand binary and those that don’t.",
  "Computers make very fast, very accurate mistakes.",
  "Artificial intelligence usually beats real stupidity.",
  "The Internet: where men are men, women are men, and children are FBI agents.",
  "You will pay for your sins. If you have already paid, please disregard this message.",
  "Today is a day for firm decisions!! Or is it?",
  "Caution: Keep out of reach of children.",
  "You're growing out of some of your problems, but there are others that you're growing into.",
  "Every cloud engenders not a storm."
]


class App extends Component {
  constructor(props) {
    super(props);
    
    var index = Math.floor(Math.random() * wisdoms.length);
    
    this.state = {
      wisdom: wisdoms[index]
    };
    
    this.setRandomWisdom = this.setRandomWisdom.bind(this);
    this.addWisdom = this.addWisdom.bind(this);
    setInterval(this.setRandomWisdom,15000);

 }

  
  setRandomWisdom() {
   var index = Math.floor(Math.random() * wisdoms.length);
    
   while (this.state.wisdom === wisdoms[index]){
      var index = Math.floor(Math.random() * wisdoms.length);
 }
 
    this.setState({
      wisdom: wisdoms[index]
    });
  }
  
  addWisdom() {
    wisdoms.push(prompt("What new wisdom do you offer?"));
  }
  
  removeCurrentWisdom() {
    var index = wisdoms.indexOf(this.state.wisdom);
    wisdoms.splice(index, 1);
  }

 // wisdomsAsList(){
//	var listOfWisdoms=[];
//	for (var i=0; i< wisdom.length; i+=1){
//		listOfWisdoms.push(<li>{wisdoms[i]</li>);
//}

  render() {
	 return (
      <div className="App">
	<h1> Wisdsom</h1>
        {this.state.wisdom}
        <button className="more" onClick={this.setRandomWisdom}>Another</button>
        <button className="new-wisdom" onClick={this.addWisdom}>Give Me Some Wisdom</button>
      </div>
    );
  }
}

export default App; 
