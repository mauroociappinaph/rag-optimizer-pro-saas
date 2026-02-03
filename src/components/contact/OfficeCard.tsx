import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

interface OfficeProps {
  office: {
    city: string;
    country: string;
    address: string;
    phone: string;
    email: string;
    isHQ: boolean;
  };
  index: number;
}

export function OfficeCard({ office, index }: OfficeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-red-500/50 transition-colors"
    >
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="w-5 h-5 text-red-500" />
        <h3 className="text-xl font-bold">{office.city}</h3>
        {office.isHQ && (
          <span className="px-2 py-0.5 bg-red-500/20 text-red-500 text-xs font-medium rounded-full">
            HQ
          </span>
        )}
      </div>
      <p className="text-gray-400 text-sm mb-1">{office.country}</p>
      <p className="text-gray-400 text-sm mb-4">{office.address}</p>
      <div className="space-y-2 text-sm">
        <p className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-gray-500" />
          <span className="text-gray-400">{office.phone}</span>
        </p>
        <p className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-gray-500" />
          <span className="text-gray-400">{office.email}</span>
        </p>
      </div>
    </motion.div>
  );
}
