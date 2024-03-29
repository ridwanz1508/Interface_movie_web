import './App.css';
import NavigationBar from './components/NavigationBar'
import Intro from './components/Intro'
import Trending from './components/Trending'
import Superhero from './components/Superhero'
import Footer from './components/Footer'

import './style/landingPage.css'

function App() {
  return (
    <div>

      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>

      <div className='trending'>
        <Trending />
      </div>

      <div className='superhero'>
        <Superhero />
      </div>

      <div className='footer'>
        <Footer />
      </div>

    </div>
  );
}

export default App;
