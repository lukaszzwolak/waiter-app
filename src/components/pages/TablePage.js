import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateTable } from '../../redux/tables/tablesThunks';
import LoadingScreen from '../common/LoadingScreen';
import TableFormView from '../views/TableFormView';
import { useTableForm } from '../../hooks/useTableForm';

const TablePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, loading } = useSelector(state => state.tables);

  const table = data.find(table => table.id === id);
  const [form, setForm] = useTableForm(table, loading, id); 

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: name === 'bill' ? parseFloat(value) : value,
    }));
  };

  const handleNumberChange = e => {
    const { name, value } = e.target;
    const num = Math.max(0, Math.min(10, Number(value)));
    setForm(prev => ({ ...prev, [name]: num }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateTable({ id, data: form })).then(() => window.location.href = '/');
  };

  if (loading || !form) return <LoadingScreen />;

  return (
    <TableFormView
      id={id}
      form={form}
      onChange={handleChange}
      onNumberChange={handleNumberChange}
      onSubmit={handleSubmit}
    />
  );
};

export default TablePage;
