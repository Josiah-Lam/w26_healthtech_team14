import React from 'react';

export default function SecuritySection(): JSX.Element {
  return (
    <div className="bg-slate-900 text-white p-6 rounded">
      <h3 className="text-2xl font-semibold mb-3">Security you can count on</h3>
      <p className="text-gray-200 mb-6">CCCARE's industry-standard data protection and compliance ensures all of your sensitive data is secure.</p>
      <div className="flex gap-3">
        <div className="bg-white/10 rounded p-4 flex-1 text-center">
          <div className="text-3xl mb-2">HIPAA</div>
        </div>
        <div className="bg-white/10 rounded p-4 flex-1 text-center">
          <div className="text-3xl mb-2">GDPR</div>
        </div>
        <div className="bg-white/10 rounded p-4 flex-1 text-center">
          <div className="text-3xl mb-2">ISO</div>
        </div>
      </div>
    </div>
  );
}
