import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { card, cards, card_2 } from "../data/data";
import Card from "../sertifikat/Card";
import "./Product.scss";

export default () => (
  <section id="product">
    <div className="container">
      <div className="product-top">
        <h2>
          Наша <span>продукция</span>
        </h2>
      </div>

      <div className="product-body">
        <Tabs>
          <TabList className={"tabs"}>
            <Tab className={"sam"}>
              <button className="product-btn"> Ламинатные тубы</button>
            </Tab>
            <Tab className={"sam"}>
              <button className="product-btn">Экструзионные тубы</button>
            </Tab>
            <Tab className={"sam"}>
              <button className="product-btn">Другая упаковка</button>
            </Tab>
          </TabList>

          <TabPanel className={"panel"}>
            {cards.map((card, index) => (
              <Card key={index} img={card.img} />
            ))}
          </TabPanel>
          <TabPanel className={"panel"}>
            {card_2.map((card, index) => (
              <Card key={index} img={card.img} />
            ))}
          </TabPanel>
          <TabPanel className={"panel"}>
        {cards.map((card, index) => (
              <Card key={index} img={card.img} />
            ))}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  </section>
);
