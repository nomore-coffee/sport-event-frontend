import React, { useEffect, useState } from "react";
import {
  TableCell,
  TableHead,
  Table,
  TableRow,
  TableBody,
  makeStyles,
  Button,
  Typography,
  FormGroup , FormControl , InputLabel ,Input 
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { getEvent, deleteEvent ,addEvent} from "../../services/api";
import "./create.css";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const useStyle = makeStyles({
  table: {
    width: "90%",
    margin: "50px 0 0 50px",
  },
  thead: {
    "$ > *": {
      background: "#000000",
      color: "#FFFFFF",
    },
  },
});
const initialValue ={
  name:'',
  date:'',
  time:'',
  venue:'',
  event_type:''
}
function Create() {
  // const classes = useStyle();
  const[event_details , setEventDetails] = useState(initialValue); 
  const{name , date , time,venue,event_type}= event_details;

  const onValueChange = (e)=>{
    setEventDetails({...event_details,[e.target.name]:e.target.value})
}
  useEffect(() => {
    getallevent();
  }, []);
  const  addEventDetail =async ()=>{
    if(event_details.name!=='' && event_details.date !=='' && event_details.time!=='' && event_details.venue!=='' && event_details.event_type!==''){
      const response = addEvent(event_details);
      console.log("addddddd",response)
    }
    alert("Enter Details")
 }
  const classes = useStyle();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [events, setEvent] = useState([]);

  const getallevent = async () => {
    const response = await getEvent();
    console.log("eventlist", response.data.message);
    setEvent(response.data.message);
  };

  const deleteEventdata = async (name) => {
    console.log("eevenet",name)
    await deleteEvent(name);
    getallevent();
  };
  return (  
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <FormGroup className={classes.container}>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='name' value={name}/>
      </FormControl>
      <FormControl>
        <InputLabel>date</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='date' value={date}/>
      </FormControl>
      <FormControl>
        <InputLabel>time</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='time' value={time}/>
      </FormControl>
      <FormControl>
        <InputLabel>venue</InputLabel>
        <Input onChange={(e)=>onValueChange(e)}  name='venue' value={venue} />
      </FormControl>
      <FormControl>
        <InputLabel>Type</InputLabel>
        <Input onChange={(e)=>onValueChange(e)}  name='event_type' value={event_type} />
      </FormControl>
     <Button variant='contained' onClick={()=> {addEventDetail();handleClose()}} color='primary' >Add Event</Button>
    </FormGroup>
        </Box>
      </Modal>
      <div className="addbutton" onClick={handleOpen}>
        <button className="addevent">Add Event</button>
      </div>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.thead}>
            <TableCell>Name</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Venue</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Edit/Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {events.map((event) => (
            <TableRow>
              <TableCell>{event.name}</TableCell>
              <TableCell>{event.date}</TableCell>
              <TableCell>{event.time}</TableCell>
              <TableCell>{event.venue}</TableCell>
              <TableCell>{event.event_type}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link} to={`/edit_event/${event._id}`}
                >
                  Edit
                </Button>
                &nbsp;
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => deleteEventdata(event.name)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Create;
