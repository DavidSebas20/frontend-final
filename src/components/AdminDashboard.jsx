// filepath: /c:/Users/nexar/Desktop/Octavo-Noveno/Programacion Distribuida/PROYECTO/FRONT/frontend-final/src/components/AdminDashboard.jsx
import React, { useState } from 'react';
import SectionTitle from "@components/section/SectionTitle.astro";
import ButtonMain from "@components/base/ButtonMain.astro";
import DoctorModal from "@components/DoctorModal.jsx"; // Componente React

const doctors = [
  { id: 1, name: "Dr. John Doe", email: "john.doe@example.com", specialty: "Cardiology" },
  { id: 2, name: "Dr. Jane Smith", email: "jane.smith@example.com", specialty: "Dermatology" },
  { id: 3, name: "Dr. Alice Johnson", email: "alice.johnson@example.com", specialty: "Pediatrics" },
];

const metrics = {
  totalVisits: 12345,
  activeUsers: 890,
  systemUptime: "99.9%",
  averageLoadTime: "1.2s",
};

const AdminDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const openModal = (doctor = null) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedDoctor(null);
    setIsModalOpen(false);
  };

  const handleSave = (doctorData) => {
    if (selectedDoctor) {
      console.log("Doctor updated:", doctorData);
    } else {
      console.log("New doctor created:", doctorData);
    }
    closeModal();
  };

  const handleDelete = (id) => {
    console.log("Doctor deleted:", id);
  };

  return (
    <div className="py-10">
      <div className="flex justify-between items-center mb-8">
        <SectionTitle
          title="Admin Dashboard"
          subtitle="Manage your doctors and monitor your platform."
        />
        <ButtonMain onClick={() => openModal()} className="w-40">Add Doctor</ButtonMain>
      </div>

      <SectionTitle
        title="Platform Metrics"
        subtitle="Monitor the performance and usage of your platform."
        className="mb-6"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white dark:bg-muted-900 rounded-lg shadow-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-300">Total Visits</h3>
          <p className="text-2xl font-bold text-primary-600">{metrics.totalVisits}</p>
        </div>
        <div className="bg-white dark:bg-muted-900 rounded-lg shadow-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-300">Active Users</h3>
          <p className="text-2xl font-bold text-green-500">{metrics.activeUsers}</p>
        </div>
        <div className="bg-white dark:bg-muted-900 rounded-lg shadow-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-300">System Uptime</h3>
          <p className="text-2xl font-bold text-blue-500">{metrics.systemUptime}</p>
        </div>
        <div className="bg-white dark:bg-muted-900 rounded-lg shadow-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-300">Average Load Time</h3>
          <p className="text-2xl font-bold text-red-500">{metrics.averageLoadTime}</p>
        </div>
      </div>

      {/* Aquí puedes incluir el modal para agregar o editar doctores */}
      {isModalOpen && (
        <DoctorModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onSave={handleSave}
          doctor={selectedDoctor}
        />
      )}
    </div>
  );
};

export default AdminDashboard