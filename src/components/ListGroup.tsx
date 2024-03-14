function ListGroup() {
  const items = ["Manila", "Baguio", "Davao", "Palawan", "Aklan"];

  return (
    <>
      <ul className="list-group">
        {/* Conditonal statement to display */}
        {items.length === 0 && <p>No Items Found</p>}
        {items.map((item, index) => (
          <li className="list-group-item" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
