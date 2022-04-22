import imgPer from './Abel.jpg';
import './App.css';
import React,{Component} from 'react';
class App extends Component{
   state={
     Person : {
       fullName:"KONAN Kouakou Abel",
       bio:"I love react",
       imgSrc:imgPer,
       profession:"Développeur fullstack Junior"
     },
     show:false,
     count:0,
     intervalId:0
   }
    handlClick=()=>{
      const newIntervalId = setInterval(() => {
        this.setState(prevState => {
          return {
            ...prevState,
            show:!prevState.show,
            count: prevState.count + 1,
          };
        });
      }, 3000);
      this.setState(prevState => {
        return {
          ...prevState,
          show:!prevState.show,
          intervalId: newIntervalId,
        };

      });
    };
   
  render(){
    return (
      <div className="App">
        {this.state.show && (
        <>
          <div className='container'>
          <img src={this.state.Person.imgSrc} className="App-logo" alt="" />
          <h2>{this.state.Person.fullName} </h2>
          <h4>{this.state.Person.bio} </h4>
          <span>{this.state.Person.profession}</span>
      </div> 
        </>
       )}
        <div className='content'>
          <div className='btn'>
              <button className='button' onClick={this.handlClick}>Click me </button>
            </div>
            <div className='intervalle'>
              <span>Intervalle:</span>
                <input type="text" name="count" value={this.state.intervalId} />
            </div>
        </div>


      </div>
    );
  }
}
export default App;
