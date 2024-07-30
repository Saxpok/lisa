import './App.css';
import TitlePage from './ui/titlePage/TitlePage';
import MainButton from './ui/mainButton/MainButton';
import IntroPage from './ui/introPage/IntroPage';
import ForWhoPage from './ui/forWhoPage/ForWhoPage';
import ProgramPage from './ui/programPage/ProgramPage';
import PromisePage from './ui/promisePage/PromisePage';
import FeedbackPage from './ui/feedbackPage/FeedbackPage';
import DemoPage from './ui/demoPage/DemoPage';
import Footer from './ui/footer/Footer';
import { useEffect, useState } from 'react';
import OwnerInfo from './ui/ownerInfo/OwnerInfo';


function App() {

  const [isFooterVisible, setIsFooterVisible] = useState(false);

    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const fullHeight = document.documentElement.scrollHeight;
        const scrollPosition = window.scrollY + windowHeight;

        if (scrollPosition >= fullHeight + 175) {
            setIsFooterVisible(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <div className="App">
      <TitlePage />
      <IntroPage />
      <ForWhoPage />
      <DemoPage />
      <ProgramPage />
      <PromisePage />
      <FeedbackPage />
      {isFooterVisible ? <></> : <MainButton />}
      <OwnerInfo/>
      <Footer isFooterVisible={isFooterVisible} />
    </div>
  );
}

export default App;
