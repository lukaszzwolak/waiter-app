import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useTableForm = (table, loading, id) => {
  const navigate = useNavigate();
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

  return [form, setForm];
};
