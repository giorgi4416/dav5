import './App.css'
import cards from './data'
import ProductCard from './components/ProductCard'
import Button from './components/Button'
import Badge from './components/Badge'

function App() {
  const handleVisit = () => {
    window.open('https://lichess.org', '_blank')
  }

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">მაღაზია </h1>
        <Badge text={`სულ: ${cards.length} პროდუქტი`} />
      </div>

      <Button
        text=" Lichess-ზე გადასვლა"
        backgroundColor="#e87c2e"
        width="220px"
        height="48px"
        onClick={handleVisit}
      />

      <div className="grid">
        {cards.map(card => (
          <ProductCard
            key={card.id}
            name={card.name}
            price={card.price}
            quantity={card.quantity}
            description={card.description}
            color={card.color}
            image={card.image}
          />
        ))}
      </div>
    </div>
  )
}

export default App