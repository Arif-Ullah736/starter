import React, { useState } from "react";
import FormData from "./FormData";
function Form() {
  //   const [first, setFirst] = useState("");
  //   const [last, setLast] = useState("");

  //   const firstNameHandler = (event) => {
  //     setFirst(event.target.value);
  //     console.log("first changing", event.target.value);
  //   };
  //   const lastNameHandler = (event) => {
  //     setLast(event.target.value);
  //     console.log("last changing", event.target.value);
  //   };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisilble: true,
    mode: "",
    favCar: "",
  });

  const [isEmpty, setIsEmpty] = useState(true);
  console.log(formData);

  const handleFormData = (event) => {
    const { name, type, value, checked } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
    // if (event.target.name === "firstName") {
    //   console.log("first name changing", formData.firstName);
    // } else if (event.target.name === "lastName") {
    //   console.log("last name changing", formData.lastName);
    // } else {
    //   console.log("email changing", formData.email);
    // }
  };

  const handleSubmite = (event) => {
    event.preventDefault();
    console.log("Form submitted", formData);
    setIsEmpty(false);

    // alert("Form submitted");
    // setFirst("");
    // setLast("");
  };
  return (
    <div>
      <form onSubmit={handleSubmite}>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={handleFormData}
        />{" "}
        <br />
        <br />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={handleFormData}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          onChange={handleFormData}
        />
        <br />
        <br />
        <textarea
          placeholder="Enter Comments here"
          name="comments"
          onChange={handleFormData}
          value={formData.comments}
        />
        <br />
        <br />
        <input
          type="checkbox"
          name="isVisilble"
          checked={formData.isVisilble}
          onChange={handleFormData}
          id="isVisible"
        />
        <label htmlFor="isVisible">Are You Visible</label>
        <br />
        <br />
        <fieldset>
          <legend>Mode:</legend>

          <input
            type="radio"
            onChange={handleFormData}
            name="mode"
            value="online-mode"
            id="online-mode"
            checked={formData.mode === "online-mode"}
          />
          <label htmlFor="online-mode">Online</label>
          <input
            type="radio"
            onChange={handleFormData}
            name="mode"
            value="offline-mode"
            id="offline-mode"
            checked={formData.mode === "offline-mode"}
          />
          <label htmlFor="offline-mode">Offline</label>
        </fieldset>
        {/* ------------------------------------------------------------------------------------/ */}
        <label htmlFor="favCar">Select Your Favorite Car </label>
        <select
          name="favCar"
          id="favCar"
          onChange={handleFormData}
          value={formData.favCar}
        >
          <option value="audi">Audi</option>
          <option value="bmw">BMW</option>
          <option value="mercedes">Mercedes</option>
          <option value="toyota">Toyota</option>
          <option value="honda">Honda</option>
        </select>
        <br />
        <br />
        <button>Submite</button>
      </form>
      {!isEmpty ? (
        <FormData formData={formData} />
      ) : (
        <div>Data is not Submitted</div>
      )}
    </div>
  );
}
export default Form;
