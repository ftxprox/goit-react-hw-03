import s from './ContactForm.module.css';
import { useState } from "react";

export default function ContactForm({ onAddContact }) {
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form className={s.formContact} onSubmit={handleSubmit}>
      <label className={s.labelContact}>Name</label>
      <input
        className={s.field}
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label className={s.labelContact}>Number</label>
      <input
        className={s.field}
        type="tel"
        name="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        required
      />
      <button className={s.buttonAdd} type="submit">Add contact</button>
    </form>
  );
}