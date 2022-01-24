import Header from './components/Header';
import Banner from './components/Banner';
import Deals from './components/Deals';
import './App.css';
import Categories from './components/Categories';
import Main from './components/Main';
import Footers from './components/Footers';


function App() {
  return (
    
    <div className="app">
      
        
        <Header/>
        <Banner />
        <Deals/>
        <Categories/>
        <Main />
        <Footers />
        
        
    </div>
    
  );
}

export default App;
