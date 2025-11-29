import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useMutation } from '@tanstack/react-query';
import { deleteBlog } from '../api/BlogApi';

export default function ConfirmDelete({blogId, refetch}:any) {
  const [open, setOpen] = React.useState(false);

  const {mutate:blogDelete} = useMutation({
    mutationFn:deleteBlog,
    onSuccess() {
        alert("Deleted Blog Successfully !")
        refetch()
        setOpen(false)
    },
}) 

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () =>{
    blogDelete({id:blogId})
  }

  return (
    <>
      <div
        onClick={handleClickOpen}
        className="bg-white rounded-full p-1 px-1.5 cursor-pointer"
      >
        <i className="fa-solid fa-trash-can text-[crimson]"></i>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Confirm Delete
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this blog?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' className='text-[crimson]! border-[crimson]!' onClick={handleClose}>Cancel</Button>
          <Button variant='contained' className='bg-[crimson]! text-white' onClick={handleDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
