import { useLocation } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

import { useFetch } from "../hooks/useFetch";
import { SearchBox } from "../components";
import queryString from 'query-string';

export const ResultsPage = () => {
  const location = useLocation();

  const {search = ''} = queryString.parse(location.search);

  const { data } = useFetch('https://api.mercadolibre.com/sites/MLA/search?q=' + `${ search }` + '&limit=4');

  return (
    <>
    <SearchBox />
    <Container className='mt-4'>
      {
        data.map((data) => (
          <ListGroup key={data.id} variant="flush" className='list-results'>
              <ListGroup.Item>
                <Row>
                  <Col className='result-image'>
                    <Card.Link href={'/items/' +  data.id}>
                      <Image src={data.thumbnail} rounded />
                    </Card.Link>
                  </Col>
                  <Col className='result-content-wrapper'>
                    <Card.Body>
                      <Card.Link href={'/items/' +  data.id} >
                        <Card.Title className='d-flex w-100 justify-content-between mt-3'>
                          <h5 className=''>
                          $ {data.price}
                          </h5>
                          <small className="text-body-secondary">{data.condition}</small>
                        </Card.Title>
                        <Card.Text>{data.title}</Card.Text>
                      </Card.Link>
                    </Card.Body>
                  </Col>
                </Row>
              </ListGroup.Item>
          </ListGroup>

        ))
      }
    </Container>

    </>
  )
}
