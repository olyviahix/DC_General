import {Row,Col,Card,Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
const CatList = ({cats,header})=>{
    return (
        <Container>
            <h2>{header}</h2>
            <Row xs={1} md={3}>
                {
                    cats.map((cat)=>(
                        <Col>
                            <Card>
                                <Card.Header>
                                    {cat.name}
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        {cat.description}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    More Info
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}
export default CatList;