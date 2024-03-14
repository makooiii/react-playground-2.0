import { useState } from "react";
// TypeScript function to define shape of data or interface
interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
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
