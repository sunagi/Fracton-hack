import React from 'react';
import Timeicon from './Timeicon.png'
import Participantsicon from './Participantsicon.png'

const Hackathonitem = (props) =>{
    return (
        <div>
            <img src={"./${props.img}"}/>  
            <p>{props.name}</p>
            <img src={Timeicon}></img>
            <img src={Participantsicon}></img>
            <p>{props.date}</p>
            <p>{props.about}</p>
            <p>{props.islive}</p>
        </div>
    )
}

export default Hackathonitem;