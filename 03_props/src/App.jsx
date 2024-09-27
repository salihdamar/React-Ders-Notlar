import './App.css'

import Product from './Product'

import Container from './Container'

function App() {
 

  return (
    <>
      <div>

        <Container>
        <Product productName="Nike" price={4500}/>
        </Container>
      </div>
    </>
  )
}

export default App
