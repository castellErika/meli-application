import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { useFetchDetail } from "../hooks/useFetchDetail";
import { SearchBox } from "../components";
import Image from 'react-bootstrap/Image';

export const DetailsPage = () => {

  const params = useParams();
  const search = params.id;

  const { data } = useFetchDetail('https://api.mercadolibre.com/items/' + `${ search }`);
  return (
    <>
    <SearchBox />

    <Container className='content-detail mt-4 pt-4 rounded'>
      <Row className='content-detail-row'>
        <Col sm={6}>
          <Image src={data.thumbnail} rounded />
          <div className='cont-detail-desc mt-5'>
            <h3>Descripción del producto</h3>
            <p>
              {data.warranty}
            </p>
          </div>
        </Col>
        <Col sm={5}>
          <small className="text-body-secondary">{data.condition}</small>
          <h1>{data.title}</h1>
          <h2>${data.price}</h2>
          <Button variant="primary">Comprar</Button>{' '}
        </Col>
      </Row>
    </Container>
    </>
  )
}
