import './App.css';

// Uncomment untuk memuat daftar kontak
import { useState } from 'react';
import contactsJSON from './data/contacts.json';
import Header from './components/Header';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';

const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.                                                                                                                             com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const [contacts, setContacts] = useState(contactsJSON);

  const Add = (input) => {
    const newData = [...contacts, input];
    setContacts(newData);
  };

  return (
    <div className="App">
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <ContactForm fnAdd={ Add } />
        </Grid>
        <Grid item xs={4}>
          <List sx={{ width: '100%', minWidth: 360, bgcolor: 'background.paper' }}>
            {contacts.map((contact, i) => (
              <Contact data={contact} key={ i } />
            )) }
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
