import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTables } from '../../redux/tablesSlice';
import { Spinner, Button, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.tables);

  useEffect(() => {
    dispatch(fetchTables());
  }, [dispatch]);

  if (loading) return <Spinner animation="border" />;
  if (error) return <p className="text-danger">Error: {error}</p>;

  return (
    <Container>
      <h2 className="my-4">All tables</h2>
      {data.map(table => (
        <Row
          key={table.id}
          className="align-items-center py-2 border-bottom"
        >
          <Col xs={6}>
            <strong>Table {table.id}</strong>{' '}
            <span className="ms-2">
              Status: <strong>{table.status}</strong>
            </span>
          </Col>
          <Col xs={6} className="text-end">
            <Link to={`/table/${table.id}`}>
              <Button variant="primary" size="sm">Show more</Button>
            </Link>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Home;
