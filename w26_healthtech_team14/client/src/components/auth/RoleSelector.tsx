import React from 'react';

const roles = [
  { id: 'participant', label: 'Program Participant', emoji: '👤' },
  { id: 'volunteer', label: 'Volunteer', emoji: '🤝' },
  { id: 'researcher', label: 'Researcher', emoji: '🔬' },
  { id: 'staff', label: 'Staff Member', emoji: '👨‍💼' },
  { id: 'admin', label: 'Administrator', emoji: '⚙️' }
];

export default function RoleSelector({ selected, onSelect }: { selected?: string; onSelect: (id: string) => void; }): JSX.Element {
  return (
    <div className="grid grid-cols-2 gap-3">
      {roles.map(r => (
        <button key={r.id} onClick={() => onSelect(r.id)} className={`p-3 rounded border ${selected === r.id ? 'border-yellow-400' : 'border-gray-200'}`} aria-pressed={selected === r.id}>
          <div className="text-2xl">{r.emoji}</div>
          <div className="text-sm mt-2">{r.label}</div>
        </button>
      ))}
    </div>
  );
}
