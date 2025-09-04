
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export async function api(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) {
    let msg = 'Request failed';
    try { const data = await res.json(); msg = data.error || data.message || JSON.stringify(data); } catch {}
    throw new Error(msg);
  }
  return res.json().catch(() => ({}));
}
