
import { useState } from 'react';
import { Edit2, Trash2 } from 'lucide-react';
import EditLeadModal from './EditLeadModal';
import ConfirmDialog from './ConfirmDialog';
import { api } from '../api';

export default function LeadCard({ lead, onUpdated, onDeleted, onError }) {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const remove = async () => {
    try {
      await api(`/api/leads/${lead._id}`, { method: 'DELETE' });
      onDeleted?.();
    } catch (e) {
      onError?.(e);
    } finally {
      setOpenDelete(false);
    }
  };

  return (
    <div className="card">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-semibold">{lead.name}</h3>
            <span className={`badge badge-${lead.status}`}>{lead.status}</span>
          </div>
          <p className="text-sm text-gray-700"><strong>Email:</strong> {lead.email}</p>
          <p className="text-sm text-gray-700"><strong>Phone:</strong> {lead.phone}</p>
          <p className="text-sm text-gray-600"><strong>Source:</strong> {lead.source} {lead.notes ? `• ${lead.notes}` : ''}</p>
          <p className="text-xs text-gray-500">Updated {new Date(lead.updatedAt).toLocaleString()}</p>
        </div>
        <div className="flex gap-2 shrink-0">
          <button className="btn btn-ghost" onClick={()=>setOpenEdit(true)}><Edit2 className="mr-2 h-4 w-4" />Edit</button>
          <button className="btn btn-ghost" onClick={()=>setOpenDelete(true)}><Trash2 className="mr-2 h-4 w-4" />Delete</button>
        </div>
      </div>

      {openEdit && (
        <EditLeadModal
          lead={lead}
          onClose={()=>setOpenEdit(false)}
          onUpdated={onUpdated}
          onError={onError}
        />
      )}
      {openDelete && (
        <ConfirmDialog
          title="Delete lead?"
          message={`Are you sure you want to delete ${lead.name}? This cannot be undone.`}
          onCancel={()=>setOpenDelete(false)}
          onConfirm={remove}
        />
      )}
    </div>
  );
}
