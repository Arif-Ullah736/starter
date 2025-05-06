function FormData({ formData }) {
  return (
    <div>
      <h1>Form Data</h1>
      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>Email: {formData.email}</p>
      <p>Comments: {formData.comments}</p>
      <p>Is Visible: {formData.isVisible ? "No" : "Yes"}</p>
      <p>Mode: {formData.mode}</p>
      <p>Favorite Car: {formData.favCar}</p>
    </div>
  );
}

export default FormData;
