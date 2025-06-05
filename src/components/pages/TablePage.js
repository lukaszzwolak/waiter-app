import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Spinner, Button, Form, Row, Col } from 'react-bootstrap';
import { updateTable } from '../../redux/tablesSlice';

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
    if (['Cleaning', 'Free'].includes(form.status)) {
      setForm(prev => ({ ...prev, peopleAmount: 0 }));
    }
    if (form.peopleAmount > form.maxPeopleAmount) {
      setForm(prev => ({ ...prev, peopleAmount: form.maxPeopleAmount }));
    }
  }, [form.status, form.maxPeopleAmount]);

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

  if (loading || !form) return <Spinner animation="border" />;

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Edit Table {id}</h2>
      <Form.Group className="mb-3">
        <Form.Label>Status</Form.Label>
        <Form.Select name="status" value={form.status} onChange={handleChange}>
          <option>Free</option>
          <option>Reserved</option>
          <option>Busy</option>
          <option>Cleaning</option>
        </Form.Select>
      </Form.Group>

      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>People</Form.Label>
            <Form.Control
              type="number"
              name="peopleAmount"
              value={form.peopleAmount}
              onChange={handleNumberChange}
              max="10"
              min="0"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Max People</Form.Label>
            <Form.Control
              type="number"
              name="maxPeopleAmount"
              value={form.maxPeopleAmount}
              onChange={handleNumberChange}
              max="10"
              min="0"
            />
          </Form.Group>
        </Col>
      </Row>

      {form.status === 'Busy' && (
        <Form.Group className="mb-3">
          <Form.Label>Bill</Form.Label>
          <Form.Control
            type="number"
            name="bill"
            value={form.bill}
            onChange={handleNumberChange}
          />
        </Form.Group>
      )}

      <Button variant="primary" type="submit">Update</Button>
    </Form>
  );
};

export default TablePage;
