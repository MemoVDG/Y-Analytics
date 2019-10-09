import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PayPal from './PayPal';
import PaymentIcon from '@material-ui/icons/Payment';
import Divider from '@material-ui/core/Divider';





class PaymentModal extends React.Component {


    state = {
        open: false,
        empty: true,
        openSnack: false
    };


    handleClickOpen = () => {
        this.setState({ open: true })
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div style={{ padding: "100 px" }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleClickOpen}
                >
                    <PaymentIcon />
                    Subscribe
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Subscription to Y-Analytics</DialogTitle>
                    <Divider/>
                    <DialogContent>
                        <PayPal />
                    </DialogContent>
                </Dialog>
            </div>
        )
    }
}


export default PaymentModal;