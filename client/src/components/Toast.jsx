
import { useEffect } from 'react';

export default function Toast({ type = 'success', message, onClose }) {
  useEffect(() => { const t = setTimeout(onClose, 2500); return () => clearTimeout(t); }, [onClose]);
  return (
    <div className="fixed bottom-6 right-6">
      <div className={`rounded-2xl px-4 py-3 shadow-soft text-white ${type==='error' ? 'bg-rose-500' : 'bg-emerald-500'}`}>
        {message}
      </div>
    </div>
  );
}
