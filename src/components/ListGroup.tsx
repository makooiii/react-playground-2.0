import { useState } from "react";

function ListGroup() {
  const items = ["Manila", "Baguio", "Davao", "Palawan", "Aklan"];

  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <ul className="list-group">
        {/* Conditonal statement to display */}
        {items.length === 0 && <p>No Items Found</p>}
        {items.map((item, index) => (
          <li
            className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
            key={index}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
