import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const BookDisplay = (props)=>{
    let bookList = props.bookList.map((book,index)=>{
        return (
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{book.name}</Card.Title>
                        <Card.Text>
                        {book.description}
                        </Card.Text>
                        <Button variant="primary">Buy</Button>
                    </Card.Body>
                </Card> 
            </Col>
        )
    })
    return bookList;
}

export default BookDisplay;