
import { useEffect, useMemo, useState } from 'react';
import LeadForm from '../components/LeadForm';
import LeadList from '../components/LeadList';
import LeadFilters from '../components/LeadFilters';
import Toast from '../components/Toast';
import { api } from '../api';

export default function LeadsPage() {
  const [leads, setLeads] = useState([]);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('');
  const [toast, setToast] = useState(null);

  const fetchLeads = async () => {
    const qs = new URLSearchParams();
    if (query) qs.set('q', query);
    if (status) qs.set('status', status);
    const data = await api(`/api/leads?${qs.toString()}`);
    setLeads(data);
  };

  useEffect(() => { fetchLeads(); }, []);

  const onCreated = () => { setToast({ type: 'success', message: 'Lead added' }); fetchLeads(); };
  const onUpdated = () => { setToast({ type: 'success', message: 'Lead updated' }); fetchLeads(); };
  const onDeleted = () => { setToast({ type: 'success', message: 'Lead deleted' }); fetchLeads(); };
  const onError = (e) => setToast({ type: 'error', message: e.message || 'Something went wrong' });

  const actions = { onCreated, onUpdated, onDeleted, onError };

  return (
    <div className="space-y-6">
      <LeadForm {...actions} />
      <LeadFilters 
        query={query} onQuery={setQuery}
        status={status} onStatus={setStatus}
        onSearch={fetchLeads}
      />
      <LeadList leads={leads} {...actions} />
      {toast && <Toast {...toast} onClose={() => setToast(null)} />}
    </div>
  );
}
