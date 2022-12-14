import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import classes from "./App.module.css"
import React, { useState } from "react";
import About from "../../pages/about/About";
import Home from "../../pages/home/Home";
import WhereToRide from "../../pages/WhereToRide";
import Contacts from "../../pages/contacts/Contacts";
import Error from "../../pages/error/Error";
import Header from "../header/Header";
import User from "../../pages/user/User";
import Feedback from "../../pages/feedback/Feedback";
import Delivery from "../../pages/delivery/Delivery";
import Footer from "../footer/Footer";
import Rewiews from "../../pages/rewiews/Reviews";
import Rules from "../../pages/rules/Rules";
import Policy from "../../pages/policy/Policy";
import Main from "../main/main";
import { YearContext } from "../../context";


let commentsList = [
  {
    id: 1,
    author: "Александр Н.1",
    value: "Безусловно, семантический разбор внешних противодействий способствует повышению качества вывода текущих активов противодействий способствует повышению качества вывода текущих активов."
  },
  {
    id: 2,
    author: "Александр Н.2",
    value: "Пьер был неуклюж. Толстый, выше обыкновенного роста, широкий, с огромными красными руками, он, как говорится, не умел войти в салон и еще менее умел из него выйти, то есть перед выходом сказать что-нибудь особенно приятное. Кроме того, он был рассеян. Вставая, он вместо своей шляпы захватил треугольную шляпу с генеральским плюмажем и держал ее, дергая султан, до тех пор, пока генерал не попросил возвратить ее. Но вся его рассеянность и неуменье войти в салон и говорить в нем выкупались выражением добродушия, простоты и скромности."
  },

  {
    id: 3,
    author: "Александр Н.3",
    value: "Наступило молчание. Графиня глядела на гостью, приятно улыбаясь, впрочем, не скрывая того, что не огорчится теперь нисколько, если гостья поднимется и уедет. Дочь гостьи уже оправляла платье, вопросительно глядя на мать, как вдруг из соседней комнаты послышался бег к двери нескольких мужских и женских ног, грохот зацепленного и поваленного стула, и в комнату вбежала тринадцатилетняя девочка, запахнув что-то короткою кисейною юбкою, и остановилась посередине комнаты. Очевидно было, она нечаянно, с нерассчитанного бега, заскочила так далеко. В дверях в ту же минуту показались студент с малиновым воротником, гвардейский офицер, пятнадцатилетняя девочка и толстый румяный мальчик в детской курточке."
  },

  {
    id: 4,
    author: "Александр Н.4",
    value: "Два молодых человека, студент и офицер, друзья с детства, были одних лет и оба красивы, но не похожи друг на друга. Борис был высокий белокурый юноша с правильными тонкими чертами спокойного и красивого лица. Николай был невысокий курчавый молодой человек с открытым выражением лица. На верхней губе его уже показывались черные волосики, и во всем лице выражались стремительность и восторженность."
  },
  {
    id: 5,
    author: "Александр Н.5",
    value: "Графиня так устала от визитов, что не велела принимать больше никого, и швейцару приказано было только звать непременно кушать всех, кто будет еще приезжать с поздравлениями."
  },
  {
    id: 6,
    author: "Александр Н.6",
    value: "Она вынула платок и заплакала. — Мне нужно пятьсот рублей, а у меня одна двадцатипятирублевая бумажка. Я в таком положении… Одна моя надежда теперь на графа Кирилла Владимировича Безухова."
  },
  {
    id: 7,
    author: "Александр Н.7",
    value: "На мужском конце стола разговор все более и более оживлялся. Полковник рассказал, что манифест об объявлении войны уже вышел в Петербурге и что экземпляр, который он сам видел, доставлен ныне курьером главнокомандующему."
  },
  {
    id: 8,
    author: "Александр Н.8",
    value: "И разговор опять сосредоточился — дамский на своем конце стола, мужской на своем."
  },
  {
    id: 9,
    author: "Александр Н.9",
    value: "Марья Дмитриевна и графиня засмеялись, и за ними все гости. Все смеялись не ответу Марьи Дмитриевны, но непостижимой смелости и ловкости этой девочки, умевшей и смевшей так обращаться с Марьей Дмитриевной."
  },
]



function App() {
  let date = new Date();
  let year = date.getFullYear();
  const [currentYear, setCurrentYear] = useState(year)
  return (
    <div className={classes.wrapper}>
      <YearContext.Provider value={{currentYear, setCurrentYear}}>
        <Router>
          <Header />
          <Main>
            <Routes>
              <Route path="/about" element={<About commentsList={commentsList.slice(0, 9)} />}></Route>
              <Route path="/" element={<Home />}></Route>
              <Route path="/wheretoride" element={<WhereToRide />}></Route>
              <Route path="/contacts" element={<Contacts />}></Route>
              <Route path="/user" element={<User />}></Route>
              <Route path="/feedback" element={<Feedback />}></Route>
              <Route path="/delivery" element={<Delivery />}></Route>
              <Route path="/reviews" element={<Rewiews commentsList={commentsList} />}></Route>
              <Route path="/rules" element={<Rules />}></Route>
              <Route path="/policy" element={<Policy />}></Route>
              <Route path="*" element={<Error />}></Route>
            </Routes>
          </Main>
          <Footer />
        </Router>
      </YearContext.Provider>
    </div>
  );
}

export default App;
