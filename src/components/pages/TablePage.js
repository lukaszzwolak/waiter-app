import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useTableForm } from '../../hooks/useTableForm';
import { updateTable } from '../../redux/tablesSlice';
import { Button, Form } from 'react-bootstrap';
import StatusSelector from '../features/TableForm/StatusSelector';
import PeopleInputs from '../features/TableForm/PeopleInputs';
import BillInput from '../features/TableForm/BillInput';
import LoadingScreen from '../common/LoadingScreen';

const TablePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, loading } = useSelector(state => state.tables);
  const table = data.find(t => t.id === id);
  const [form, setForm] = useTableForm(table, loading, id);

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
    dispatch(updateTable({ id, data: form })).then(() => window.history.back());
  };

  if (loading || !form) return <LoadingScreen />;

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Edit Table {id}</h2>
      <StatusSelector value={form.status} onChange={handleChange} />
      <PeopleInputs form={form} onChange={handleNumberChange} />
      <BillInput value={form.bill} onChange={handleNumberChange} />
      <Button type="submit">Update</Button>
    </Form>
  );
};

export default TablePage;
