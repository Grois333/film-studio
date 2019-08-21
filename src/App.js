import React from 'react';
import './App.css';

import scenes from './imgs/';

class App extends React.Component{

  state ={
    scene: 0,
    frame: 0,
    isWaiting: false,
  }

  nextImage = ()=> {
    if(this.state.isWaiting) return;

    this.setState({ isWaiting: true});

    setTimeout(()=>{


    this.setState({
      isWaiting: false,
      frame: (this.state.frame + 1) % 3,
      scene: this.state.frame === 2 ?
             (this.state.scene + 1)  % 3 :
              this.state.scene,
    })
  }, 1000);
}

startLoop = ()=> {
this.loopInterval =  setInterval(this.nextImage, 1500);
}

stopLoop = ()=> {
  clearInterval(this.loopInterval);
}

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img onClick={this.nextImage} alt='' className='hero-img'
            src={scenes[this.state.scene][this.state.frame]} />

          <div className='film-strip'>
           <div className='edge' />
            <div className='cell-container' >
              <img alt='' src={scenes[this.state.scene][0]} style={{
                  border: '1px solid '+(this.state.frame === 0 ? 'orange' : 'black')
                }}/>

              <img alt='' src={scenes[this.state.scene][1]} style={{
                  border: '1px solid '+(this.state.frame === 1 ? 'orange' : 'black')
                }}/>

              <img alt='' src={scenes[this.state.scene][2]} style={{
                  border: '1px solid '+(this.state.frame === 2 ? 'orange' : 'black')
                }}/>
            </div>
            <div className='edge' />
          </div>



           <button onClick={this.startLoop}>START</button>
           <button onClick={this.stopLoop}>STOP</button>

        </header>
      </div>
    );
  }
}

export default App;
