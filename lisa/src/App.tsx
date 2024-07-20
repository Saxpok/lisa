import './App.css';
import TitlePage from './ui/titlePage/TitlePage';
import MainButton from './ui/mainButton/MainButton';
import IntroPage from './ui/introPage/IntroPage';
import ForWhoPage from './ui/forWhoPage/ForWhoPage';
import ProgramPage from './ui/programPage/ProgramPage';
import PromisePage from './ui/promisePage/PromisePage';
import FeedbackPage from './ui/feedbackPage/FeedbackPage';

function App() {
  return (
    <div className="App">
      <TitlePage />
      <IntroPage />
      <ForWhoPage />
      <ProgramPage />
      <PromisePage />
      <FeedbackPage />
      <MainButton />
    </div>
  );
}

export default App;
