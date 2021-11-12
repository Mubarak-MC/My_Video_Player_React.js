
import './App.css';
// import ShakaPlayer from 'shaka-player-react';
// import 'shaka-player/dist/controls.css';
import Navbar from './component/Navbar';
import React, { Component } from 'react'
import Video from './component/Video';
import Footer from './component/Footer'


export class App extends Component {


  render() {
    return (
      <div>
        
        <Navbar/>
        <Video/>
        <Footer/>
     {/* <ShakaPlayer />; */}
     
    

      </div>
    )
  }
}

export default App




// function App() {
//   return (
//     <div className="App">
//      <h1>Hello</h1>
//      <Navbar/>
//      <ShakaPlayer 
//       autoPlay 
//      src="https://images.all-free-download.com/footage_preview/webm/rooster_193.webm" />;
    
//     </div>
//   );
// }

// export default App;
