import React from 'react'
import {Card,ListGroup,ListGroupItem,Button} from 'react-bootstrap'
import PropTypes from "prop-types";

const Profile = (props) => {
    const alertname =(n)=>(alert(n))
    return (
    <Card style={{ width: '20rem' }} className="cart">
        {props.children}
        <Card.Body>
            <Card.Title><b>{props.fullName}</b></Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem><b><p>? Bio ? </p></b> {props.bio}</ListGroupItem>
            <ListGroupItem><b><p>? Profession ? </p></b>{props.profession}</ListGroupItem>
        </ListGroup>
        <Card.Body>
            <Button variant="primary" onClick={()=>alertname(props.fullName+" is an "+props.profession)}>Info</Button>
        </Card.Body>
    </Card>

        
    )
}
Profile.defaultProps={
    fullName:"unknown",
    bio:"no bio entred",
    profession:"unknow"
};
Profile.propTypes={
    fullName:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string
};

export default Profile
