import "./BookingForm.css";

function BookingForm() {
  function onSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="booking" onSubmit={onSubmit}>
      <label>
        Choose Date: <input type="date" />
      </label>
      <label>
        Choose Time:
        <select>
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
      </label>
      <label>
        Number of guests: <input type="number" placeholder="1" min="1" max="10" />
      </label>
      <label>
        Occasion:
        <select>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </label>
      <input type="submit" value="Make your reservation" />
    </form>
  );
}

export default BookingForm;
