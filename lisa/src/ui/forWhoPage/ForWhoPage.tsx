import "./ForWhoPage.style.css"
import image1 from './image1.png'
import image2 from './image2.png'
import image3 from './image3.png'
import image4 from './image4.png'


interface feature {
    tille: string,
    image: string
}

const features : feature[] = [
    {
        tille: 'новачок у викладанні математики',
        image: image1
    },
    {
        tille: 'випускник педагогічного університету',
        image: image2
    },
    {
        tille: 'досвідчений вчитель математики, який шукає нові методики',
        image: image3
    },
    {
        tille: 'мама/тато, які хочут допомогати дитині з домашнім завданням',
        image: image4
    },
]

const ForWhoPage = () => {



    return (
        <div className="forWhoPage">
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
            <div className="forWhoDescription">
                Цей курс створений з метою допомогти вам стати впевненим викладачем
                математики і використовувати найефективніші методики викладання для
                досягнення цілей ваших учнів.
            </div>
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
            <div className="forWhoTitle">
                Цей курс точно для тебе, якщо ти...
            </div>
            {
            features.map((feature) => 
                <div className="feature">
                    <div
                        className="featureImage"
                        style={{
                            backgroundImage: `url(${feature.image})`
                        }}
                        >
                    </div>
                    <div className="featureDescription">
                        {feature.tille}
                    </div>
                </div>
            )
             
            }
        </div>

    )
}

export default ForWhoPage