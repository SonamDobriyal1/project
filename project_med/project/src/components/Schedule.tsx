import React, { useState } from 'react';
import { Clock, Upload, AlertCircle } from 'lucide-react';

const Schedule = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [schedule, setSchedule] = useState([
    {
      id: 1,
      medicine: 'Aspirin',
      timing: 'Morning',
      instructions: 'Take with food',
      warning: 'Do not take on empty stomach'
    },
    {
      id: 2,
      medicine: 'Vitamin D',
      timing: 'Afternoon',
      instructions: 'Take after meal',
      warning: null
    }
  ]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      // Here you would typically process the image with OCR
      // and update the schedule based on the prescription
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Medicine Schedule</h2>

        <div className="mb-6">
          <label
            className="block w-full cursor-pointer bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center"
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
            <Upload className="mx-auto mb-2 text-gray-400" size={32} />
            <p className="text-sm text-gray-600">
              Upload prescription image to generate schedule
            </p>
            {selectedFile && (
              <p className="mt-2 text-sm text-blue-600">
                Selected: {selectedFile.name}
              </p>
            )}
          </label>
        </div>

        <div className="space-y-4">
          {schedule.map(item => (
            <div key={item.id} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold">{item.medicine}</h3>
                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <Clock size={16} className="mr-1" />
                    {item.timing}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {item.instructions}
                  </p>
                </div>
                {item.warning && (
                  <div className="flex items-center text-amber-600">
                    <AlertCircle size={20} />
                  </div>
                )}
              </div>
              {item.warning && (
                <div className="mt-2 text-sm text-amber-600 bg-amber-50 p-2 rounded">
                  {item.warning}
                </div>
              )}
            </div>
          ))}
        </div>

        {schedule.length === 0 && (
          <div className="text-center text-gray-500 py-8">
            <Clock size={48} className="mx-auto mb-4 opacity-50" />
            <p>No schedule available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Schedule;