
import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { deleteContact } from "../../redux/contacts/contactsSlice";

const ContactList = () => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.contacts.items);

  const filter = useSelector((state) => state.filter.name);

  const filteredContacts = items.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const onDelete = (itemId) => {
    const action = deleteContact(itemId);
    dispatch(action);
  };
  return (
    <ul>
      {filteredContacts.map((contactItem) => {
        return (
          <li key={contactItem.id}>
            <Contact contactItem={contactItem} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
