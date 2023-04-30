import { useState } from "react";
import "./BookingForm.css";

function BookingForm() {
  const [fields, setFields] = useState({ date: "", time: "", guests: 0, occasion: "" });
  const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);

  const onChangeFields = (e) => setFields((state) => ({ ...state, [e.target.name]: e.target.value }));
  const onSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <form className="booking" onSubmit={onSubmitForm}>
      <label>
        Choose Date: <input type="date" name="date" value={fields.date} onChange={onChangeFields} />
      </label>
      <label>
        Choose Time:
        <select name="time" value={fields.time} onChange={onChangeFields}>
          <option hidden>-- Select Time --</option>
          {availableTimes.map((hour) => (
            <option key={hour}>{hour}</option>
          ))}
        </select>
      </label>
      <label>
        Number of guests: <input type="number" name="guests" value={fields.guests} onChange={onChangeFields} placeholder="1" />
      </label>
      <label>
        Occasion:
        <select name="occasion" value={fields.occasion} onChange={onChangeFields}>
          <option hidden>-- Select Occasion --</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </label>
      <input type="submit" value="Make your reservation" />
    </form>
  );
}

export default BookingForm;
