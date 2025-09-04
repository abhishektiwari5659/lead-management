
import { useState } from 'react';
import { api } from '../api';
import { PlusCircle } from 'lucide-react';

export default function LeadForm({ onCreated, onError }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', status: 'New', source: 'Web', notes: '' });
  const [loading, setLoading] = useState(false);

  const validate = () => {
    if (!form.name.trim()) return 'Name is required';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return 'Valid email is required';
    if (!/^\+?\d[\d\s-]{6,}$/.test(form.phone)) return 'Valid phone is required';
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) return onError?.(new Error(err));
    setLoading(true);
    try {
      await api('/api/leads', { method: 'POST', body: JSON.stringify(form) });
      setForm({ name: '', email: '', phone: '', status: 'New', source: 'Web', notes: '' });
      onCreated?.();
    } catch (e) {
      onError?.(e);
    } finally {
      setLoading(false);
    }
  };

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <form onSubmit={handleSubmit} className="card space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Add Lead</h2>
        <span className={`badge badge-${form.status}`}>{form.status}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input className="input" placeholder="Full name" value={form.name} onChange={update('name')} />
        <input className="input" placeholder="Email" type="email" value={form.email} onChange={update('email')} />
        <input className="input" placeholder="Phone" value={form.phone} onChange={update('phone')} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <select className="input" value={form.status} onChange={update('status')}>
          <option>New</option>
          <option>Contacted</option>
          <option>Qualified</option>
          <option>Lost</option>
        </select>
        <input className="input" placeholder="Source (Web, Referral, Ad…)" value={form.source} onChange={update('source')} />
        <input className="input" placeholder="Notes (optional)" value={form.notes} onChange={update('notes')} />
      </div>
      <button className="btn btn-primary w-full md:w-auto" disabled={loading}>
        <PlusCircle className="mr-2 h-5 w-5" /> {loading ? 'Saving…' : 'Add Lead'}
      </button>
    </form>
  );
}
