import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useForm } from '../hooks/useForm';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';

export const SearchBox = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const {value = ''} = queryString.parse(location.search);

    const { search, onInputChange} = useForm({
      search: value
    });

    const onSearchSubmit = () => {
      if (search.trim().length <= 1) return;

      navigate('/items' + `?search=${ search }`)
    }


  return (
    <>
      <Navbar className="bg-body-tertiary" sticky="top">
          <Container>
            <Navbar.Brand href="/">
              <img
                alt=""
                src="/src/assets/img/Logo_ML.png"
                height="34"
                className="d-inline-block align-top"
                />{' '}
            </Navbar.Brand>
            <Form
            className='container'
            onSubmit={ onSearchSubmit }>
              <InputGroup>
                <Form.Control
                  placeholder="Nunca dejes de buscar"
                  aria-label="Nunca dejes de buscar"
                  name="search"
                  value={ search }
                  onChange={ onInputChange }
                  />
                <Button variant="secondary" id="button-addon2" onClick={ onSearchSubmit }>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#333" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                  </svg>
                </Button>
              </InputGroup>
            </Form>
          </Container>
      </Navbar>
    </>
    )
}
