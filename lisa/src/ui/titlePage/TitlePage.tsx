import React from "react";
import "./TitlePage.style.css";
import titleImage from "./title.png";
import { makePurchase } from "../../api/buyRequest/buyRequest";

const TitlePage = () => {
  return (
    <div 
    className="titlePage"
    style={{backgroundImage: `url(${titleImage})`}}
    >
      <div className="titleTitle">
        Стартуй у кар’єрі вчителя математики
        з нуля 
      </div>
      <div className="titleSubtitle">
        Почни викладати вже за 14 днів з експрес курсом та заробляй гроші не виходячи з дому
      </div>
      <div className="priceBlock">
        <div className="priceContainer">
            <div className="price">
                    ВСЬОГО 299 ГРН
            </div>
            <div className="priceOld">
                ̶1̶2̶0̶0̶
            </div>
            <div 
            className="buyButton"
            onClick={makePurchase}
            >
                КУПИТИ КУРС
            </div>
        </div>
      </div>
    </div>
  );
};

export default TitlePage;
