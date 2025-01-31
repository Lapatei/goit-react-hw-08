import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactForm from '../../components/ContactForm/ContactForm';

const ContactsPage = () => (
  <div>
    <h1>Contacts</h1>
    <ContactForm />
    <SearchBox />
    <ContactList />
  </div>
);

export default ContactsPage;