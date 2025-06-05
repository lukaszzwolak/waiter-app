import { Form } from 'react-bootstrap';

const StatusSelector = ({ value, onChange }) => (
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
);

export default StatusSelector;
