
import { useState } from 'react';
import { api } from '../api';

export default function EditLeadModal({ lead, onClose, onUpdated, onError }) {
  const [form, setForm] = useState({
    name: lead.name, email: lead.email, phone: lead.phone,
    status: lead.status, source: lead.source, notes: lead.notes || ''
  });
  const [loading, setLoading] = useState(false);
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const save = async () => {
    if (!form.name.trim()) return onError?.(new Error('Name is required'));
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return onError?.(new Error('Valid email is required'));
    if (!/^\+?\d[\d\s-]{6,}$/.test(form.phone)) return onError?.(new Error('Valid phone is required'));
    setLoading(true);
    try {
      await api(`/api/leads/${lead._id}`, { method: 'PATCH', body: JSON.stringify(form) });
      onUpdated?.();
      onClose?.();
    } catch (e) {
      onError?.(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-2xl rounded-3xl bg-white p-6 shadow-soft">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Edit Lead</h3>
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>✕</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input className="input" placeholder="Full name" value={form.name} onChange={update('name')} />
          <input className="input" placeholder="Email" type="email" value={form.email} onChange={update('email')} />
          <input className="input" placeholder="Phone" value={form.phone} onChange={update('phone')} />
          <select className="input" value={form.status} onChange={update('status')}>
            <option>New</option>
            <option>Contacted</option>
            <option>Qualified</option>
            <option>Lost</option>
          </select>
          <input className="input" placeholder="Source" value={form.source} onChange={update('source')} />
          <input className="input" placeholder="Notes" value={form.notes} onChange={update('notes')} />
        </div>
        <div className="mt-6 flex justify-end gap-3">
          <button className="btn btn-ghost" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={save} disabled={loading}>{loading ? 'Saving…' : 'Save changes'}</button>
        </div>
      </div>
    </div>
  );
}
