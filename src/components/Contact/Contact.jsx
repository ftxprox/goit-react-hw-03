import s from './Contact.module.css';
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";

function Contact({ name, number, onDeleteContact }) {
  return (
    <li className={s.itemContact}>
      <IoMdPerson className={s.iconPeople}/><p className = {s.nameContact}>{name}</p><BsFillTelephoneFill className={s.iconPhone} /><p className={s.nameContact}>{number}</p>
      <button className={s.buttonDelete} onClick={onDeleteContact}>Delete</button>
    </li>
  );
}

export default Contact;