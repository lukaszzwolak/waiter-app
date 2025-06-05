import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TableRow = ({ id, status }) => (
  <Row className="align-items-center py-2 border-bottom">
    <Col xs={6}>
      <strong>Table {id}</strong>{' '}
      <span className="ms-2">
        Status: <strong>{status}</strong>
      </span>
    </Col>
    <Col xs={6} className="text-end">
      <Link to={`/table/${id}`}>
        <Button variant="primary" size="sm">Show more</Button>
      </Link>
    </Col>
  </Row>
);

export default TableRow;
