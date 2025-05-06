import { useState } from "react";
import Container from "./Container";

function Cards({ reviews }) {
  const [counter, setCounter] = useState(0);

  let first = 0;
  let last = reviews.length;

  return (
    <div>
      <Container
        review={reviews[counter]}
        counter={counter}
        setCounter={setCounter}
        first={first}
        last={last}
      />
    </div>
  );
}

export default Cards;
