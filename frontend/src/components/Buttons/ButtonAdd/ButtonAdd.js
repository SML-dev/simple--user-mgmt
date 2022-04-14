import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const ButtonAdd = () => (
    <Link to="/add" style={{textDecoration: 'none'}}>
        <Button
            size="small"
            style={{
                backgroundColor: '#1d2602',
                color: '#F94D18'
            }}
            variant="contained"
            endIcon={<AddCircleOutlineIcon/>}>
            new Contact
        </Button>
    </Link>
);
