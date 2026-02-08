import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { icon: '🎯', title: 'Align teams toward a shared mission', desc: 'Connect work to organization-wide goals. Track progress, spot blockers, and provide real-time status updates with help from AI.' },
  { icon: '📈', title: 'Drive innovation and impact for patients', desc: 'Get everyone from researchers to care teams on one platform to speed up time-sensitive decisions and innovation.' },
  { icon: '🔒', title: 'Accelerate your work and teams securely', desc: 'Keep all of your data secure and compliant with regulatory standards, no matter the size of your organization.' }
];

export default function FeaturesGrid(): JSX.Element {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {features.map((f, i) => (
        <motion.article key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-white p-6 rounded shadow-sm hover:-translate-y-1 hover:shadow-md transform transition">
          <div className="text-3xl mb-4" aria-hidden>{f.icon}</div>
          <h3 className="font-semibold mb-2">{f.title}</h3>
          <p className="text-sm text-gray-600">{f.desc}</p>
        </motion.article>
      ))}
    </div>
  );
}
