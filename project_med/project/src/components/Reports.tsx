import React from 'react';
import { FileText, Share2 } from 'lucide-react';

const Reports = () => {
  const reports = [
    {
      id: 1,
      date: '2024-03-15',
      medicines: ['Aspirin', 'Vitamin D', 'Omega-3'],
      adherence: 92,
    },
    {
      id: 2,
      date: '2024-03-14',
      medicines: ['Aspirin', 'Vitamin D'],
      adherence: 85,
    }
  ];

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Medical Reports</h2>
          <button
            className="bg-blue-600 text-white rounded-lg px-4 py-2 flex items-center gap-2"
          >
            <Share2 size={20} />
            Share with Caretaker
          </button>
        </div>

        <div className="space-y-4">
          {reports.map(report => (
            <div key={report.id} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold">{report.date}</h3>
                  <p className="text-sm text-gray-600">
                    {report.medicines.join(', ')}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold text-blue-600">
                    {report.adherence}%
                  </div>
                  <div className="text-xs text-gray-500">Adherence</div>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${report.adherence}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {reports.length === 0 && (
          <div className="text-center text-gray-500 py-8">
            <FileText size={48} className="mx-auto mb-4 opacity-50" />
            <p>No reports available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reports;