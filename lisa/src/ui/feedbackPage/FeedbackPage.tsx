import './FeedbackPage.style.css'
import Question from './question/Question'

const questions = [
    {
        question: 'Якщо я ніколи не викладала(в), для мене це актуально?',
        ansver: 'subtext subtext subtext subtext subtext subtext subtext subtext subtext subtext subtext'
    }, 
    {
        question: 'Якщо мені не сподобається і я не знайду для себе це цікавим, ви повернете кошти?',
        ansver: 'Звісно. Впродовж 14 днів ви можете звернутися до нас і ми повернемо вам всю вартість без проблем'
    },
    {
        question: 'Як придбати курс?',
        ansver: 'Натисніть на плаваючу кнопку “Придбати курс” і ви перейдете до сторінки з оплатою'
    }
]

const FeedbackPage = () => {
    return (
        <div className="feedbackPage">
            <div className='feedbackTitle'>
                Що кажуть викладачі після проходження курсу:
            </div>
            <div className='feedbackSlides'>

            </div>
            <div className='questions'>
                {
                    questions.map((item) => 
                        <Question 
                        question={item.question}
                        ansver={item.ansver}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default FeedbackPage