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
 const [selectShowAlert, setShowAlert ] = useState(false)

  return (
    <>
      {/* <ListGroup items={items} heading="Places" onSelectItem={handleSelectItem} /> */}
      {/* <TestButton color="danger" onClick={() => {}}>my button</TestButton> */}
      {selectShowAlert && <Alert onClose={() =>setShowAlert(false)}>This is my alert!!</Alert>}
      <DismissBtn  onClick={() =>setShowAlert(true)} ></DismissBtn>
        
        
    </>
  );
}

export default App;
