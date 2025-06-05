import { Form, Row, Col } from 'react-bootstrap';

const StatusSelector = ({ value, onChange }) => (
  <Form.Group className="mb-3">
    <Row className="align-items-center">
      <Col xs="auto"><Form.Label className="mb-0">Status:</Form.Label></Col>
      <Col xs="auto">
        <Form.Select
          name="status"
          value={value}
          onChange={onChange}
          style={{ width: '160px' }}
        >
          <option>Free</option>
          <option>Reserved</option>
          <option>Busy</option>
          <option>Cleaning</option>
        </Form.Select>
      </Col>
    </Row>
  </Form.Group>
);

export default StatusSelector;
