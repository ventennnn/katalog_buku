import Navbar from "../components/Navbar";

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-6 container mx-auto">
        <h2 className="text-2xl font-bold mb-4">📖 Admin Dashboard</h2>
        <p className="text-gray-700">
          Di sini nanti ada CRUD buku (Tambah/Edit/Hapus).
        </p>
      </div>
    </div>
  );
}

export default AdminDashboard;
