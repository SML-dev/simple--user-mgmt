import react from 'react';
import {Button} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from 'react-router-dom';
import React from 'react';

export const BtnBackToHome = () => (
    <Link to="/" style={{textDecoration: 'none'}}>
        <Button
            style={{backgroundColor: '#1d2602', color: '#F94D18'}}
            variant="contained"
            color="success"
            size="small"
            startIcon={<ArrowBackIcon/>}>
            Back to Home
        </Button>
    </Link> );
