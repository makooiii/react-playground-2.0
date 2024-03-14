import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Manila", "Baguio", "Davao", "Palawan", "Aklan"];
  return (
    <>
      <ListGroup items={items} heading="Places" />
    </>
  );
}

export default App;
