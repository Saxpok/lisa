import React from "react";
import './IntroPage.style.css'
import intro1 from './intro1.png'
import intro2 from './intro2.png'

const IntroPage = () => {
    return (
        <div className="introPage">
            <div className="introTitle">
                Привіт, мене звати Єлизавета Шішініна
            </div>
            <div className="introSubTitle">
                я твій провідник у репетиторство
            </div>
            <div 
                className="intro1Photo"
                style={{
                    backgroundImage: `url(${intro1})`
                }}
            >
            </div>
            <div className="introDescription">
            Я маю більше 7 років досвіду у викладанні математики дітям різного віку. 
            Мої кейси приголомшують, бо для підготовки до НМТ нам треба лише 3 місяці.
            Близько року тому я заснувала свою онлайн школу математики "WAVE school math", де навчила всіх викладачів своїм принципам у викладанні і навчу тебе.
            </div>
            <div 
                className="intro2Photo"
                style={{
                    backgroundImage: `url(${intro2})`
                }}
            >
            </div>
        </div>
    )
}

export default IntroPage