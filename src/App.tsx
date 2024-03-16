import ListGroup from "./components/ListGroup";
import TestButton from "./components/TestButton";

function App() {
  const items = ["Manila", "Baguio", "Davao", "Palawan", "Aklan"];
  const handleSelectItem = (item : String) => {
    console.log(item);
  };

  return (
    <>
      <ListGroup items={items} heading="Places" onSelectItem={handleSelectItem} />
        <TestButton color="danger" onClick={() => {}}>my button</TestButton>
        
    </>
  );
}

export default App;
