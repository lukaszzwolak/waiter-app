import { Form } from 'react-bootstrap';
import styles from './TableForm.module.scss';

const PeopleInputs = ({ peopleAmount, maxPeopleAmount, onChange }) => (
  <div className={styles.inlineInputs}>
    <Form.Control
      type="number"
      name="peopleAmount"
      value={peopleAmount}
      onChange={onChange}
      min="0"
      max={maxPeopleAmount}
      className={styles.smallInput}
    />
    <span>/</span>
    <Form.Control
      type="number"
      name="maxPeopleAmount"
      value={maxPeopleAmount}
      onChange={onChange}
      min="1"
      max="10"
      className={styles.smallInput}
    />
  </div>
);

export default PeopleInputs;
