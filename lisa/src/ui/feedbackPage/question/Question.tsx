import { useState } from 'react'
import './Question.style.css'

interface QuestionProps {
    question: string
    ansver: string
}

const Question = ({ question, ansver }: QuestionProps) => {
    const [active, setActive] = useState(false)

    return (
        <div
            className="questionContainer"
            onClick={() => setActive(!active)}
            style={{
                backgroundColor: active ? '#E899A6' : '#E82E81'
            }}
        >
            <div className='question'>
                <div className='questionText'>
                    {question}
                </div>
                <div className='questionArrow'>
                    {active ?
                        <svg 
                        width="35" 
                        height="20" 
                        viewBox="0 0 35 20" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path 
                        d="M17.0512 5.53819L31.3333 19.8203L34.1024 17.0512L17.0512 2.28882e-05L-3.8147e-06 17.0512L2.76908 19.8203L17.0512 5.53819Z" 
                        fill="white" 
                        />
                        </svg>
                        :
                        <svg
                        width="35"
                        height="20"
                        viewBox="0 0 35 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M17.0512 14.2821L2.76908 0L0 2.76908L17.0512 19.8203L34.1024 2.76908L31.3333 0L17.0512 14.2821Z"
                            fill="white"
                        />
                    </svg>
                    }
                </div>
            </div>
            <svg
                width="300"
                height="2"
                viewBox="0 0 300 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0.5 1L300 1"
                    stroke="white"
                />
            </svg>
            <div className='ansver'>
                {active && ansver}
            </div>
        </div>
    )
}

export default Question