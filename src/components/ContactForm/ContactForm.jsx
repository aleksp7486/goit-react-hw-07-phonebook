import { BsFillPersonPlusFill } from 'react-icons/bs';
import { Formik, Form } from 'formik';
import { Label, Input, Btn, Error } from './ContactForm.styled';
import * as yup from 'yup';
// import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

const initialValues = {
  name: '',
  phone: '',
};

const schema = yup.object().shape({
  name: yup.string().max(40).required('Укажите имя'),
  phone: yup
    .number()
    .typeError('Это не похоже на номер телефона')
    .positive('Номер телефона не может начинаться с минуса')
    .integer('Номер телефона не может содержать десятичную точку')
    .min(8, 'Число должно быть больше или равно 8')
    .required('Укажите номер телефона'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onFormSubmit = ({ name, phone }, { resetForm }) => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    if (contacts.find(contact => contact.phone === phone)) {
      alert(`phone ${phone} already exists`);
      return;
    }
    const newContact = {
      name,
      phone,
    };
    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onFormSubmit}
    >
      <Form noValidate>
        <Label>
          Name:
          <Input type="text" name="name" placeholder="Введите имя" required />
          <Error name="name" component="p" />
        </Label>

        <Label>
          phone:
          <Input
            type="tel"
            name="phone"
            placeholder="Введите номер телефона"
            required
          />
          <Error name="phone" component="p" />
        </Label>
        <Btn type="submit">
          <span>
            <BsFillPersonPlusFill />
          </span>
          Add contact
        </Btn>
      </Form>
    </Formik>
  );
};

export default ContactForm;
