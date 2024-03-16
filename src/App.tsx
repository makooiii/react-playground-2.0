import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Manila", "Baguio", "Davao", "Palawan", "Aklan"];
  const handleSelectItem = (item : String) => {
    console.log(item);
  };

  return (
    <>
      <ListGroup items={items} heading="Places" onSelectItem={handleSelectItem} />
    </>
  );
}

export default App;
