import { Form, Button, Row, Col } from 'react-bootstrap';
import StatusSelector from '../../features/tables/components/StatusSelector';
import PeopleInputs from '../../features/tables/components/PeopleInputs';
import BillInput from '../../features/tables/components/BillInput';
import styles from '../../features/tables/components/TableForm.module.scss';

const TableFormView = ({ id, form, onChange, onNumberChange, onSubmit }) => (
  <Form onSubmit={onSubmit}>
    <h2>Edit Table {id}</h2>

    <Form.Group className={styles.formGroup}>
      <Row className="align-items-center">
        <Col xs="auto">
          <Form.Label className="mb-0">Status:</Form.Label>
        </Col>
        <Col xs="auto">
          <StatusSelector value={form.status} onChange={onChange} />
        </Col>
      </Row>
    </Form.Group>

    <Form.Group className={styles.formGroup}>
      <Row className="align-items-center">
        <Col xs="auto">
          <Form.Label className="mb-0">People:</Form.Label>
        </Col>
        <Col xs="auto">
          <PeopleInputs
            peopleAmount={form.peopleAmount}
            maxPeopleAmount={form.maxPeopleAmount}
            onChange={onNumberChange}
          />
        </Col>
      </Row>
    </Form.Group>

    <BillInput value={form.bill} onChange={onNumberChange} />

    <Button variant="primary" type="submit">Update</Button>
  </Form>
);

export default TableFormView;
