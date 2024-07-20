import Program, { ProgramProps } from './program/Program'
import './ProgramPage.style.css'
import gift from "./gift.png"
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

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

    const [scrolled, setScrolled] = useState(false)

    const { ref, inView, entry } = useInView({
        threshold: 0.1
    })

    useEffect(() => {   
        if(inView) {
            setScrolled(true)
        }
    }, [inView])

    return (
        <div className="programPage">
            <div ref={ref} className="programTitle">
                Програма курсу:
            </div>
            <div className='programs'>
            {
                scrolled && programs.map((item, i) => 
                    <Program 
                    content={item.content}
                    position={i}
                    key={i}
                    />
                )
            }
            </div>
            <div className="gift">
                <div
                    className='giftImg'
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