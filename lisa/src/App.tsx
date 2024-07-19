import './App.css';
import TitlePage from './ui/titlePage/TitlePage';
import MainButton from './ui/mainButton/MainButton';
import IntroPage from './ui/introPage/IntroPage';
import ForWhoPage from './ui/forWhoPage/ForWhoPage';

function App() {
  return (
    <div className="App">
      <TitlePage />
      <IntroPage />
      <ForWhoPage />
      <MainButton />
    </div>
  );
}

export default App;
