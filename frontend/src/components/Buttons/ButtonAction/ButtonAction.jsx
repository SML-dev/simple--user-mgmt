import React from 'react';
import {Button, ButtonGroup} from '@mui/material';
import {Link} from 'react-router-dom';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

export const ButtonAction = ({item, deleteUser}) => {
    return (
        <ButtonGroup size="small" aria-label="small button group">
            <Link to={`/edit/${item.id}`} style={{textDecoration: 'none'}}>
                <Button
                    style={{weight: '5px', marginRight: '10px'}}
                    variant="contained"
                    color="success"
                    endIcon={<ModeEditIcon/>}>
                    Edit
                </Button>
            </Link>
            <Button
                style={{weight: '5px', marginRight: '10px'}}
                variant="contained"
                color="error"
                onClick={() => deleteUser(item.id)}
                endIcon={<DeleteIcon/>}>
                Delete
            </Button>
            <Link to={`view/${item.id}`} style={{textDecoration: 'none'}}>
                <Button
                    variant="contained"
                    color="primary"
                    endIcon={<VisibilityIcon/>}>
                    View
                </Button>
            </Link>
        </ButtonGroup>
    );
};
