
import LeadCard from './LeadCard';

export default function LeadList({ leads, ...actions }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Leads</h2>
        <span className="text-sm text-gray-500">{leads.length} result(s)</span>
      </div>
      {leads.length === 0 ? (
        <div className="card text-center text-gray-500">No leads found. Try adding one above.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {leads.map(lead => <LeadCard key={lead._id} lead={lead} {...actions} />)}
        </div>
      )}
    </div>
  );
}
