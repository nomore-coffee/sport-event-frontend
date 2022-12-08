import React, { useEffect, useState } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import {  editEvent ,getEventbyID} from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";
const useStyle = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "$ >*": {
      marginTop: 50,
    },
  },
});

const initialValue = {
  name: "",
  date: "",
  time: "",
  venue: "",
  event_type: "",
};
const Editevent = () => {
  const [event_details, setevent_details] = useState(initialValue);
  const { name, date, time, venue, event_type } = event_details;
  const { id } = useParams();
  const classes = useStyle();
  const navigate = useNavigate();

  useEffect(() => {
    loadEventData();
  }, []);

  const loadEventData = async () => {   
      const response = await getEventbyID(id);
      console.log(response.data.message)

    setevent_details(response.data.message);
  };

  const onValueChange = (e) => {
    setevent_details({ ...event_details, [e.target.name]: e.target.value });
  };

  const editUserDetail = async () => {
    await editEvent(event_details);
    navigate("/dashboard");
  };

  return (
    <FormGroup className={classes.container}>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" value={name} />
      </FormControl>
      <FormControl>
        <InputLabel>date</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="date" value={date} />
      </FormControl>
      <FormControl>
        <InputLabel>time</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="time" value={time} />
      </FormControl>
      <FormControl>
        <InputLabel>venue</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="venue" value={venue} />
      </FormControl>
      <FormControl>
        <InputLabel>Type</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="event_type"
          value={event_type}
        />
      </FormControl>
      <Button
        variant="contained"
        onClick={() => {
          editUserDetail();
        }}
        color="primary"
      >
        Edit Event
      </Button>
    </FormGroup>
  );
};

export default Editevent;
