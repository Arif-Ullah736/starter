import "./Container.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

function Container({ review, first, last, counter, setCounter }) {
  const forwardHandler = () => {
    if (counter === last - 1) {
      setCounter(first);
    } else {
      setCounter((prev) => prev + 1);
    }
  };

  const backwardHandler = () => {
    if (counter === first) {
      setCounter(last - 1);
    } else {
      setCounter((prev) => prev - 1);
    }
  };

  const surpriseHandler = () => {
    let randomNumber = Math.floor(Math.random() * (last - first) + first);
    setCounter(randomNumber);
  };

  return (
    <div className="container">
      <div className="title">
        <div className="profile">
          <img src={review.image} />
        </div>

        <h3>{review.name}</h3>
        <p>{review.job}</p>
      </div>

      <div className="icon">
        <RiDoubleQuotesL />
      </div>

      <div className="paragraph">
        <p>{review.text}</p>
      </div>
      <div className="icon">
        <RiDoubleQuotesR />
      </div>

      <div className="change-buttons">
        <button onClick={backwardHandler}>
          {" "}
          <IoIosArrowBack />
        </button>
        <button onClick={forwardHandler}>
          {" "}
          <IoIosArrowForward />
        </button>
      </div>
      <div>
        <button onClick={surpriseHandler} className="surprise-me">
          Surprise Me
        </button>
      </div>
    </div>
  );
}

export default Container;
