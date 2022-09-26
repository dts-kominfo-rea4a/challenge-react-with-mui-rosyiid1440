// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useState } from 'react';

const ContactForm = (props) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [newContact, setNewContact] = useState({
        name: "Orang",
        email: "orang@orang.com",
        phone: "0823123123",
        photo: "http://placekitten.com/100"
    });
    
    const submitHandler = (e) => {
        e.preventDefault();

        props.fnAdd(newContact);
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <Card sx={{ width: '100%', minWidth: 360, bgcolor: 'background.paper', mb:5 }}>
                    <CardContent>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '100%' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                required
                                id="outlined-required"
                                label="Name"
                                value={newContact.name}
                                onChange={(e) => { setNewContact({ ...newContact, name: e.target.value  }) } }
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Phone"
                                value={newContact.phone}
                                onChange={(e) => { setNewContact({ ...newContact, phone: e.target.value  }) } }
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Email"
                                value={newContact.email}
                                onChange={(e) => { setNewContact({ ...newContact, email: e.target.value  }) } }
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Photo URL"
                                value={newContact.photo}
                                onChange={(e) => { setNewContact({ ...newContact, photo: e.target.value }) } }
                            />
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Button type="submit" size="small">ADD NEW</Button>
                    </CardActions>
                </Card>
            </form>
        </>
    );
}

export default ContactForm;