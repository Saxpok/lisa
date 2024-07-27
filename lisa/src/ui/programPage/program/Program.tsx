import { useEffect, useState } from "react"
import './Program.style.css'

export interface ProgramProps {
    content: string
    position: number
}

const Program = ({content, position} : ProgramProps) => {

    const [currentContent, setCureentContent] = useState('...')
    const [currentStatus, setCurrentStatus] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setCureentContent(content)
            setCurrentStatus(true)
        }, 500 + position * 500)
    }, [])

    return (
        <div 
        className="progContainer"
        style={{
            justifyContent: (position % 2 === 0) ? "flex-start" : "flex-end",
            opacity: (position % 2 === 0) ? "100%" : "70%"
        }}
        >
            <div className={currentStatus ? "progTitle" : "loading"}>
                {currentContent}
            </div>
            
        </div>
    )
}

export default Program