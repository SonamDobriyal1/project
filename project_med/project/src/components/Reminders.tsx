import React, { useState } from 'react';
import { Bell, Plus, Trash2 } from 'lucide-react';

interface Reminder {
  id: number;
  medicine: string;
  time: string;
  frequency: string;
}

const Reminders = () => {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [newReminder, setNewReminder] = useState({
    medicine: '',
    time: '',
    frequency: 'daily'
  });

  const addReminder = () => {
    if (newReminder.medicine && newReminder.time) {
      setReminders([
        ...reminders,
        {
          id: Date.now(),
          ...newReminder
        }
      ]);
      setNewReminder({ medicine: '', time: '', frequency: 'daily' });
      setShowForm(false);
    }
  };

  const deleteReminder = (id: number) => {
    setReminders(reminders.filter(reminder => reminder.id !== id));
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Reminders</h2>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white rounded-full p-2"
          >
            <Plus size={20} />
          </button>
        </div>

        {showForm && (
          <div className="mb-6 bg-gray-50 p-4 rounded-lg">
            <input
              type="text"
              placeholder="Medicine name"
              value={newReminder.medicine}
              onChange={(e) => setNewReminder({ ...newReminder, medicine: e.target.value })}
              className="w-full mb-3 p-2 border rounded"
            />
            <input
              type="time"
              value={newReminder.time}
              onChange={(e) => setNewReminder({ ...newReminder, time: e.target.value })}
              className="w-full mb-3 p-2 border rounded"
            />
            <select
              value={newReminder.frequency}
              onChange={(e) => setNewReminder({ ...newReminder, frequency: e.target.value })}
              className="w-full mb-3 p-2 border rounded"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
            <div className="flex gap-2">
              <button
                onClick={addReminder}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Add Reminder
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {reminders.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            <Bell size={48} className="mx-auto mb-4 opacity-50" />
            <p>No reminders set</p>
          </div>
        ) : (
          <div className="space-y-4">
            {reminders.map(reminder => (
              <div
                key={reminder.id}
                className="flex items-center justify-between bg-gray-50 p-4 rounded-lg"
              >
                <div>
                  <h3 className="font-semibold">{reminder.medicine}</h3>
                  <p className="text-sm text-gray-600">
                    {reminder.time} • {reminder.frequency}
                  </p>
                </div>
                <button
                  onClick={() => deleteReminder(reminder.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Reminders;