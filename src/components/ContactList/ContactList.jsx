import { Item, Text, Icon, Phone, Btn } from './ContactList.styled';
import { BsFillPersonFill, BsFillPersonXFill } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
// import { selectContacts, selectFilter } from 'redux/selectors';
import { selectFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
// import { useMemo } from 'react';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  // const contacts = useSelector(selectContacts);
  // const filter = useSelector(selectFilter);

  // const filteredContacts = useMemo(
  //   () =>
  //     contacts.filter(contact =>
  //       contact.name.toLowerCase().includes(filter.toLowerCase())
  //     ),
  //   [contacts, filter]
  // );

  return (
    <ul>
      {filteredContacts.map(({ name, phone, id }) => {
        return (
          <Item key={name} id={id}>
            <Icon>
              <BsFillPersonFill />
            </Icon>
            <Text>
              {name}:<Phone>{phone}</Phone>
            </Text>
            <Btn onClick={() => dispatch(deleteContact(id))}>
              <BsFillPersonXFill />
            </Btn>
          </Item>
        );
      })}
    </ul>
  );
};

export default ContactList;
