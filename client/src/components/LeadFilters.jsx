
import { Search, Filter } from 'lucide-react';

export default function LeadFilters({ query, onQuery, status, onStatus, onSearch }) {
  return (
    <div className="card grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
      <div className="md:col-span-2">
        <label className="text-sm text-gray-600">Search</label>
        <div className="flex items-center gap-2">
          <input className="input" placeholder="Name, email, phone…" value={query} onChange={(e)=>onQuery(e.target.value)} />
          <button className="btn btn-ghost" onClick={onSearch}><Search className="mr-2 h-4 w-4" />Search</button>
        </div>
      </div>
      <div>
        <label className="text-sm text-gray-600">Status</label>
        <select className="input" value={status} onChange={(e)=>onStatus(e.target.value)}>
          <option value="">All</option>
          <option>New</option>
          <option>Contacted</option>
          <option>Qualified</option>
          <option>Lost</option>
        </select>
      </div>
      <div className="flex gap-2">
        <button className="btn btn-primary w-full" onClick={onSearch}><Filter className="mr-2 h-4 w-4" />Apply</button>
        <button className="btn btn-ghost w-full" onClick={()=>{onQuery(''); onStatus(''); onSearch();}}>Reset</button>
      </div>
    </div>
  );
}
