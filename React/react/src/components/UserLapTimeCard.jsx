import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

const UserLapTimeCard = () => {
    return (
    <Card style={{ width: '24rem' }}>
      <Card.Body>
      <Card.Title>Select Your Track From The Given Options</Card.Title>
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Select Track
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Cahuilla</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Glen Helen</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Fox Raceway</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        <Card.Text>
          Below, Enter Your Info And Lap Time For Selected Track
        </Card.Text>
        <Button variant="primary">Submit Lap Time</Button>
      </Card.Body>
    </Card>
      );
}

export default UserLapTimeCard