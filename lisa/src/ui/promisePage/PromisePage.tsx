import './PromisePage.style.css'

const promises = [
    `Налаштувати правильні умови співпраці з батьками? <br /> Не проблема`,
    'Створити та провести відкрите пробне заняття? <br /> Вже зроблено',
    'Написати план занять для нового учня? <br /> Легко',
    'Пояснити тему, яку учень не може зрозуміти? <br /> Хоч на пальцях',
    'Створити якісний інтерактивний урок з математики? <br /> З заплющеними очима'
]

const PromisePage = () => {
    return (
        <div className="promisePage">
            <div className='promiseTitle'>
                Лише уяви <span style={{ color: '#F1305E'}}>скільки нового</span> ти будеш вміти після 10 уроків цього курсу
            </div>
            <div className='promises'>
                {
                    promises.map((item, i) => 
                        <div 
                        className='promise'
                        key={i}
                        dangerouslySetInnerHTML={{ __html: item }}
                        >
                        </div>
                    )
                }
            </div>
            <div className="promisePageDescription">
            <svg
                width="368"
                height="12"
                viewBox="0 0 368 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0.665223 6.51498C0.673497 9.46049 3.06801 11.8416 6.01352 11.8333C8.95902 11.825 11.3401 9.43053 11.3318 6.48502C11.3236 3.53951 8.92906 1.15841 5.98355 1.16669C3.03805 1.17496 0.656949 3.56947 0.665223 6.51498ZM356.665 5.51498C356.673 8.46049 359.068 10.8416 362.014 10.8333C364.959 10.825 367.34 8.43053 367.332 5.48502C367.324 2.53951 364.929 0.158414 361.984 0.166688C359.038 0.174961 356.657 2.56947 356.665 5.51498ZM6.00134 7.5L362.001 6.5L361.996 4.5L5.99573 5.5L6.00134 7.5Z"
                    fill="#E82E81"
                />
            </svg>
            На цьому курсі я навчу тебе всьому необхідному у викладанні. Ти дізнаєшся, як ефективно починати знайомство з новим учнем, встановлювати з ним контакт та супроводжувати його на кожному етапі навчання, аж до досягнення всіх поставлених цілей
            <svg
                width="368"
                height="12"
                viewBox="0 0 368 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0.665223 6.51498C0.673497 9.46049 3.06801 11.8416 6.01352 11.8333C8.95902 11.825 11.3401 9.43053 11.3318 6.48502C11.3236 3.53951 8.92906 1.15841 5.98355 1.16669C3.03805 1.17496 0.656949 3.56947 0.665223 6.51498ZM356.665 5.51498C356.673 8.46049 359.068 10.8416 362.014 10.8333C364.959 10.825 367.34 8.43053 367.332 5.48502C367.324 2.53951 364.929 0.158414 361.984 0.166688C359.038 0.174961 356.657 2.56947 356.665 5.51498ZM6.00134 7.5L362.001 6.5L361.996 4.5L5.99573 5.5L6.00134 7.5Z"
                    fill="#E82E81"
                />
            </svg>
            </div>
        </div>
    )
}

export default PromisePage