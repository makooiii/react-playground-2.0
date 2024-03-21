// import ListGroup from "./components/ListGroup";
// import TestButton from "./components/TestButton";
import { useState } from "react";
import Alert from "./components/Alert";
import DismissBtn from "./components/DismissBtn";

function App() {
  // const items = ["Manila", "Baguio", "Davao", "Palawan", "Aklan"];
  // const handleSelectItem = (item : String) => {
  //   console.log(item);
  // };
  //  const [selectShowAlert, setShowAlert ] = useState(false)

  // updating state
  // const [game, setGame] = useState({
  //   id: 1,
  //   player: {
  //     name: 'John'
  //   }
  // })
  // const handleClick = () => {
  //   setGame({...game, player: { name: 'Wario'}})
  // }

  // const [pizza, setPizza] = useState({
  //   name: 'Spicy Pepperoni',
  //   toppings: ['Mushroom']
  // });

  // const handleClick = () => {
  //   setPizza({...pizza, toppings: [...pizza.toppings, 'Cheese' ]})
  // }

  // const [cart, setCart] = useState({
  //   discount: 1,
  //   items: [
  //     {id: 1, title: 'Product1', quantity: 1},
  //     {id: 2, title: 'Product2', quantity: 1}
  //   ]
  // })

  // const handleClick = () => {
  //   setCart({...cart, items:cart.items.map(item => item.id === 1 ? {...item, quantity: item.quantity + 1} : item)})
  // }

  return (
    <>
      {/* <ListGroup items={items} heading="Places" onSelectItem={handleSelectItem} /> */
      /* <TestButton color="danger" onClick={() => {}}>my button</TestButton> */
      /* {selectShowAlert && <Alert onClose={() =>setShowAlert(false)}>This is my alert!!</Alert>
      <DismissBtn  onClick={() =>setShowAlert(true)} ></DismissBtn> */}
    </>
  );
}

export default App;
