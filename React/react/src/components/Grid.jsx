import Row from 'react-bootstrap/Row'
import BookDisplay from './BookDisplay'

const BookGrid = ()=>{
    const bookData  = [
        {
        "name":"Awesome book",
        "description":"This is a good book"
        },
        {
          "name":"Awesome book",
          "description":"This is a good book"
        },
        {
          "name":"Awesome book",
          "description":"This is a good book"
        },
        {
          "name":"Awesome book",
          "description":"This is a good book"
          },
          {
            "name":"Awesome book",
            "description":"This is a good book"
          },
          {
            "name":"Awesome book",
            "description":"This is a good book"
         }    
      ]    
    return (
        <Row xs={2} md={4} >
            <BookDisplay bookList={bookData}/>
        </Row>
    )
}

export default BookGrid;