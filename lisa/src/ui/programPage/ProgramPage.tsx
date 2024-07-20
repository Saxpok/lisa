import Program, { ProgramProps } from './program/Program'
import './ProgramPage.style.css'
import gift from "./gift.png"
import { useState } from 'react'

interface Program {
    content: string
}

const programs : Program[] = [
    {
        content: 'Технічна частина репетиторства (Що потрібно викладачу для якісного проведення уроку)'
    },
    {
        content: 'Організаційна частина (як встановити правильні відносини з батьками учнів та самими учнями)'
    },
    {
        content: 'Оплата занять (як встановити високий чек)'
    },
    {
        content: 'Умови співпраці (про що не треба забувати)'
    },
    {
        content: 'Види занять та для кого вони підходять'
    },
    {
        content: 'З чого починається співпраця з учнем та які аспекти роботи є обовʼязковими'
    },
    {
        content: 'Створювання плану роботи відповідно до рівня та мети учня'
    },
    {
        content: 'Джерела інформації для створення інтерактивних уроків '
    },
    {
        content: 'Універсальна схема уроку'
    },
    {
        content: 'Використання асоціацій як інструменту для пояснення теми'
    }
]

const ProgramPage = () => {

    const [done, setDone] = useState(false)

    return (
        <div className="programPage">
            <div className="programTitle">
                Програма курсу:
            </div>
            {
                programs.map((item, i) => 
                    <Program 
                    content={item.content}
                    position={i}
                    />
                )
            }
            <div className="gift">
                <div
                    style={{
                        backgroundImage: `url(${gift})`,
                        height: '70px',
                        width: '70px',
                        backgroundSize: 'cover'
                    }}
                >
                </div>
                <div className='giftTitle'>
                    Бонус у вигляді переліку сайтів та збірників 
                    необхідних для будь якого віку 
                </div>
            </div>
        </div>
    )
}

export default ProgramPage