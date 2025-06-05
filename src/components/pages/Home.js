import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTables } from '../../redux/tablesSlice';
import { Spinner, Button, Card, Row, Col } from 'react-bootstrap';
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
    <>
      <h2>All Tables</h2>
      <Row>
        {data.map(table => (
          <Col xs={12} md={6} lg={4} key={table.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Table {table.id}</Card.Title>
                <Card.Text>Status: <strong>{table.status}</strong></Card.Text>
                <Link to={`/table/${table.id}`}>
                  <Button variant="primary">Show more</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
