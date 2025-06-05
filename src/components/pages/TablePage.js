import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { updateTable } from '../../redux/tablesSlice';
import LoadingScreen from '../common/LoadingScreen';
import TableFormView from '../views/TableFormView';

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
    dispatch(updateTable({ id, data: form })).then(() => navigate('/'));
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
