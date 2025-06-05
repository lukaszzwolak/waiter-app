import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTables } from '../features/tables/tablesThunks';
import { Container } from 'react-bootstrap';
import LoadingScreen from '../components/common/LoadingScreen';
import TableRow from '../components/views/TableRow';

const Home = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.tables);

  useEffect(() => {
    dispatch(fetchTables());
  }, [dispatch]);

  if (loading) return <LoadingScreen />;
  if (error) return <p className="text-danger">Error: {error}</p>;

  return (
    <Container>
      <h2 className="my-4">All tables</h2>
      {data.map(table => (
        <TableRow key={table.id} id={table.id} status={table.status} />
      ))}
    </Container>
  );
};

export default Home;
