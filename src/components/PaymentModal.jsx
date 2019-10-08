import React from 'react';
import NavbarLinks from './NavbarLinks/NavbarPage';
import { Typography } from '@material-ui/core';
import BarChart from './BarChart';
import Button from '@material-ui/core/Button';
import { Route, Link, BrowserRouter as Router, NavLink } from 'react-router-dom';
import AssessmentIcon from '@material-ui/icons/Assessment';



import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import PayPal from './PayPal';






class PaymentModal extends React.Component {


    state = {
        open: false,
        empty: true,
        openSnack : false
    };


    handleClickOpen = () => {
        this.setState({ open: true})
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div style={{padding:"100 px"}}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleClickOpen}
                >
                    Agregar
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Agregar metodo de pago</DialogTitle>
                    <DialogContent>
                        <PayPal/>
                    </DialogContent>
                </Dialog>
            </div>
        )
    }
}


export default PaymentModal;