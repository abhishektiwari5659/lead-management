
import LeadsPage from './pages/LeadsPage';

export default function App() {
  return (
    <div className="min-h-screen">
      <header className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Lead Management</h1>
          <p className="opacity-90 hidden md:block">Capture, Track & Manage Leads Seamlessly</p>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-6 py-6">
        <LeadsPage />
      </main>
      <footer className="text-center text-sm text-gray-500 py-6">Built with React + Tailwind</footer>
    </div>
  );
}
