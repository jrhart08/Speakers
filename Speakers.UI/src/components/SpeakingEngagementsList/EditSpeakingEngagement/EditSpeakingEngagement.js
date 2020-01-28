import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import FilledInput from '@material-ui/core/FilledInput';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const {
    children, classes, onClose, ...other
  } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const EditSpeakingEngagement = (speakerName, attendance, talkName, startDate, endDate, hostGroupName, city, state) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Edit Speaking Engagement
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Edit Speaking Engagement
        </DialogTitle>
        <DialogContent dividers>
          <FilledInput
            autoFocus
            margin="dense"
            id="talkName"
            label="Talk Name"
            fullWidth
            value={talkName}
          />
          <FilledInput
            autoFocus
            margin="dense"
            id="speakerName"
            label="Speaker Name"
            fullWidth
            value={speakerName}
          />
          <FilledInput
            autoFocus
            margin="dense"
            id="attendance"
            label="Attendance"
            fullWidth
            value={attendance}
          />
          <FilledInput
            autoFocus
            margin="dense"
            id="startDate"
            label="StartDate"
            fullWidth
            value={startDate}
          />
          <FilledInput
            autoFocus
            margin="dense"
            id="endDate"
            label="End Date"
            fullWidth
            value={endDate}
          />
          <FilledInput
            autoFocus
            margin="dense"
            id="hostGroup"
            label="Host Group"
            fullWidth
            value={hostGroupName}
          />
          <FilledInput
            autoFocus
            margin="dense"
            id="city"
            label="City"
            fullWidth
            value={city}
          />
          <FilledInput
            autoFocus
            margin="dense"
            id="state"
            label="State"
            fullWidth
            value={state}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

EditSpeakingEngagement.propTypes = {
  speakerName: PropTypes.string.isRequired,
  attendance: PropTypes.number,
  talkName: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  hostGroupName: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
};

export default EditSpeakingEngagement;
