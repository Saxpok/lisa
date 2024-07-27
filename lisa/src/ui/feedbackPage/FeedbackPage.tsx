import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'

import feedback1 from './fb1.png'
import feedback2 from './fb2.png'
import feedback3 from './fb3.png'

import 'swiper/css';
import 'swiper/css/pagination';

import './FeedbackPage.style.css'
import Question from './question/Question'

const questions = [
    {
        question: 'Якщо я ніколи не викладала(в), для мене це актуально?',
        ansver: 'Цей курс - знайомство з професією викладача математики, тому звісно актуальний для вас, якщо ви ніколи не викладали'
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
                <Swiper 
                pagination={true} 
                modules={[Pagination]} 
                className="mySwiper">
                    <SwiperSlide>
                        <div 
                        className='slide'
                        style={{
                            backgroundImage: `url(${feedback2})`,
                            backgroundSize: 'cover'
                        }}
                        >
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div 
                        className='slide'
                        style={{
                            backgroundImage: `url(${feedback1})`,
                            backgroundSize: 'cover'
                        }}
                        >
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div 
                        className='slide'
                        style={{
                            backgroundImage: `url(${feedback3})`,
                            backgroundSize: 'cover'
                        }}
                        >
                        </div>
                    </SwiperSlide>
                </Swiper>
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