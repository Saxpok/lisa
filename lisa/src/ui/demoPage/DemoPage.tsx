import './DemoPage.style.css'
import demo1 from './demo1.png'
import demo2 from './demo2.png'

const DemoPage = () => {
    return (
        <div className="demoPage">
            <div className='demoTitle'>
                Що ви отримаєте після придбання навчання?
            </div>
            <div 
            className='demoSample'
            style={{
                backgroundImage: `url(${demo1})`,
            }}
            >
            </div>
            <div className='sampleTitle'>
                7 теоретичних уроків
            </div>
            <div 
            className='demoSample'
            style={{
                backgroundImage: `url(${demo2})`,
            }}
            >
            </div>
            <div className='sampleTitle'>
                1 бонусного уроку
            </div>
            <div className='demoOffer'>
                + 2 практичних урока, на яких ви відпрацюєте всі отриманні навички
            </div>
        </div>
    )
}

export default DemoPage