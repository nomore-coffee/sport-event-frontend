import axios from "axios";

const url='http://127.0.0.1:3003/event';

export const getEvent = async(id)=>{
    id = id || '';
    return await axios.get(`${url}/event_list${id}`)
}

export const getEventbyID = async(id)=>{
    console.log('axios',id)
    id = id || '';
    return await axios.post(`${url}/event_list_id/${id}`)
}


export const addEvent = async(user)=>{
    return await axios.post(`${url}/create_event`,user);
}

export const editEvent = async(user)=>{
    return await axios.put(`${url}/edit_event`,user);
}

export const deleteEvent = async(name)=>{
    console.log('axios',name)
    return await axios.post(`${url}/delete_event`,name);
}