import cards from "./data";
import Card from "./components/card";
import Banner from "./components/Banner";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Banner />
      <div className="cards-grid">
        {cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
            category={card.category}
          />
        ))}
      </div>
    </div>
  );
}

export default App;