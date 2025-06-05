import { Form, Row, Col } from 'react-bootstrap';
import styles from './TableForm.module.scss';

const BillInput = ({ value, onChange }) => (
  <Form.Group className={styles.formGroup}>
    <Row className="align-items-center">
      <Col xs="auto">
        <Form.Label className="mb-0">Bill:</Form.Label>
      </Col>
      <Col xs="auto">
        <div className={styles.inlineInputs}>
          <span>$</span>
          <Form.Control
            type="number"
            name="bill"
            value={value}
            onChange={onChange}
            min="0"
            className={styles.billInput}
          />
        </div>
      </Col>
    </Row>
  </Form.Group>
);

export default BillInput;
