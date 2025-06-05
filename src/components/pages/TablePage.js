import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Spinner, Button, Form, Row, Col } from 'react-bootstrap';
import { updateTable } from '../../redux/tablesSlice';
import LoadingScreen from '../common/LoadingScreen';


const TablePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, loading } = useSelector(state => state.tables);

  const table = data.find(table => table.id === id);
  const [form, setForm] = useState(null);

  useEffect(() => {
    if (table) setForm({ ...table });
    else if (!loading) navigate('/');
  }, [table, loading, navigate]);

  useEffect(() => {
    if (!form) return;

    const { status, peopleAmount, maxPeopleAmount } = form;

    if (['Cleaning', 'Free'].includes(status)) {
      setForm(prev => ({ ...prev, peopleAmount: 0 }));
    } else if (peopleAmount > maxPeopleAmount) {
      setForm(prev => ({ ...prev, peopleAmount: maxPeopleAmount }));
    }
  }, [form]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: name === 'bill' ? parseFloat(value) : value }));
  };

  const handleNumberChange = e => {
    const { name, value } = e.target;
    const num = Math.max(0, Math.min(10, Number(value)));
    setForm(prev => ({ ...prev, [name]: num }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateTable({ id, data: form })).then(() => navigate('/'));
  };

if (loading || !form) return <LoadingScreen />;

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Edit Table {id}</h2>

      <Form.Group className="mb-3">
        <Row className="align-items-center">
          <Col xs="auto">
            <Form.Label className="mb-0">Status:</Form.Label>
          </Col>
          <Col xs="auto">
            <Form.Select
              name="status"
              value={form.status}
              onChange={handleChange}
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

      <Form.Group className="mb-3">
        <Row className="align-items-center">
          <Col xs="auto">
            <Form.Label className="mb-0">People:</Form.Label>
          </Col>
          <Col>
            <div className="d-flex align-items-center gap-2">
              <Form.Control
                type="number"
                name="peopleAmount"
                value={form.peopleAmount}
                onChange={handleNumberChange}
                min="0"
                max={form.maxPeopleAmount}
                style={{ width: "80px" }}
              />
              <span>/</span>
              <Form.Control
                type="number"
                name="maxPeopleAmount"
                value={form.maxPeopleAmount}
                onChange={handleNumberChange}
                min="1"
                max="10"
                style={{ width: "80px" }}
              />
            </div>
          </Col>
        </Row>
      </Form.Group>

      <Form.Group className="mb-3">
        <Row className="align-items-center">
          <Col xs="auto">
            <Form.Label className="mb-0">Bill:</Form.Label>
          </Col>
          <Col xs="auto">
            <div className="d-flex align-items-center gap-2">
              <span>$</span>
              <Form.Control
                type="number"
                name="bill"
                value={form.bill}
                onChange={handleNumberChange}
                min="0"
                style={{ width: "100px" }}
              />
            </div>
          </Col>
        </Row>
      </Form.Group>

      <Button variant="primary" type="submit">Update</Button>
    </Form>
  );
};

export default TablePage;
