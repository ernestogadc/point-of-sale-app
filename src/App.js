import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Button from './components/Button';
import Ticket from './components/Ticket';
import Pay from './components/Pay';
import Daytrack from './components/Daytrack';


function App() {

  const [burgers, setBurgers] = useState([
    { id: 1, type: 'Original', price: 89, amount: 0 },
    { id: 2, type: 'Hot', price: 98, amount: 0 },
    { id: 3, type: 'Honey', price: 99, amount: 0 },
    { id: 4, type: 'BBQ', price: 99, amount: 0 },
    { id: 5, type: 'Tamarindo-Chipotle', price: 99, amount: 0 },
    { id: 6, type: 'French Fries', price: 99, amount: 0 },
    { id: 7, type: '10 Boneless', price: 89, amount: 0 },
    { id: 8, type: '20 Boneless', price: 169, amount: 0 },
    { id: 9, type: '30 Boneless', price: 249, amount: 0 },
    { id: 10, type: 'Papas gajo', price: 49, amount: 0 },
    { id: 11, type: 'Papas a la francesa', price: 49, amount: 0 },
    { id: 12, type: 'Aros de cebolla', price: 49, amount: 0 },
    { id: 13, type: 'Aderezo extra', price: 5, amount: 0 },
    { id: 14, type: 'Ensalada extra', price: 15, amount: 0 },
    { id: 15, type: 'Descuento Original', price: -89, amount: 0 },
    { id: 16, type: 'Descuento Hot', price: -98, amount: 0 },
    { id: 17, type: 'Desc Honey BBQ Tam', price: -99, amount: 0 },
    { id: 18, type: 'Desc Papas Aros', price: -99, amount: 0 },


  ])

  const [ticket, setTicket] = useState([])
  const [acount, setAcount] = useState([])
  const [total, setTotal] = useState(0)

  const recreateArray = () => {
    setBurgers([
      { id: 1, type: 'Original', price: 89, amount: 0 },
      { id: 2, type: 'Hot', price: 98, amount: 0 },
      { id: 3, type: 'Honey', price: 99, amount: 0 },
      { id: 4, type: 'BBQ', price: 99, amount: 0 },
      { id: 5, type: 'Tamarindo-Chipotle', price: 99, amount: 0 },
      { id: 6, type: 'French Fries', price: 99, amount: 0 },
      { id: 7, type: '10 Boneless', price: 89, amount: 0 },
      { id: 8, type: '20 Boneless', price: 169, amount: 0 },
      { id: 9, type: '30 Boneless', price: 249, amount: 0 },
      { id: 10, type: 'Papas gajo', price: 49, amount: 0 },
      { id: 11, type: 'Papas a la francesa', price: 49, amount: 0 },
      { id: 12, type: 'Aros de cebolla', price: 49, amount: 0 },
      { id: 13, type: 'Aderezo extra', price: 5, amount: 0 },
      { id: 14, type: 'Ensalada extra', price: 15, amount: 0 },
      { id: 15, type: 'Descuento Original', price: -89, amount: 0 },
      { id: 16, type: 'Descuento Hot', price: -98, amount: 0 },
      { id: 17, type: 'Desc Honey BBQ Tam', price: -99, amount: 0 },
      { id: 18, type: 'Desc Papas Aros', price: -99, amount: 0 },
    ])
  }


  const addToTicket = id => {
    if (id.amount === 0) {
      setTicket([...ticket, id])
    }
    id.amount++
    setTotal(total + id.price)
  }

  const reset = () => {
    let newTicketState = ticket.filter((el) => el.amount !== 0)
    setTicket(newTicketState)
  }


  const addItem = (product) => {
    product.amount++
    setTotal(total + product.price)

  }
  const restItem = (product) => {
    product.amount--
    setTotal(total - product.price)
  }

  const confirm = (tick) => {


    if (tick.length === 0) {
      alert("no hay nada en la cuenta")
    } else {

      setAcount([...acount, tick])
      setTicket([])
      recreateArray()
      setTotal(0)


    }

  }

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <div className="App">
            <>
              <div className='container'>
                <div className='ticket'>
                  <div className='ticketList'> {ticket.length > 0 ? ticket.map(ticketEl => (
                    (ticketEl.amount > 0 ? (<Ticket
                      key={ticketEl.id}
                      total={total}
                      product={ticketEl}
                      onAddItem={addItem}
                      onRestItem={restItem}
                    />) : reset())
                  )) : <h1 style={{ color: "lightgray" }}>Cuenta nueva</h1>}</div>
                  <div className='total'>
                    <Pay
                      ticket={ticket}
                      confirm={confirm}
                      total={total} />
                  </div>
                </div>
                <div className='buttons'>{burgers.map(burger => (
                  <Button
                    key={burger.id}
                    burgerInfo={burger}
                    onAddBurger={addToTicket} />
                ))}
                </div>

              </div></>
          </div>
        </Route>
        <Route path='/track'>
          <Daytrack
            ticket={acount}
          />
        </Route>
      </Switch>
    </Router>);
}

export default App;
