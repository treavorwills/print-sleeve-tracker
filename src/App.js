import Header from './components/Header.js';
import Footer from './components/Footer.js';
import NavBar from './components/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
