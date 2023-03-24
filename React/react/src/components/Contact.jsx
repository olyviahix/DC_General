import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

const Contact = () => {
    return (
    <Card style={{ width: '24rem' }}>
      <Card.Body>
      <Card.Title>Select Your Reason For Contact</Card.Title>
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Select Reason
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Question</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Comment</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Concern</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        <Card.Text>
          We are open to comments, questions, or concerns! Please let us know if you have any of these!
        </Card.Text>
        <Button variant="primary">Send It!</Button>
      </Card.Body>
    </Card>
      );
}

export default Contact