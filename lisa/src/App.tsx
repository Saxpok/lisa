import './App.css';
import TitlePage from './ui/titlePage/TitlePage';
import MainButton from './ui/mainButton/MainButton';
import IntroPage from './ui/introPage/IntroPage';
import ForWhoPage from './ui/forWhoPage/ForWhoPage';
import ProgramPage from './ui/programPage/ProgramPage';
import PromisePage from './ui/promisePage/PromisePage';

function App() {
  return (
    <div className="App">
      <TitlePage />
      <IntroPage />
      <ForWhoPage />
      <ProgramPage />
      {/* <PromisePage /> */}
      <MainButton />
    </div>
  );
}

export default App;
