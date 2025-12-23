import { motion } from 'framer-motion';

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-bao-golden px-6 py-24">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-white font-display font-bold text-5xl sm:text-6xl md:text-7xl mb-4">
            Find Us
          </h1>
          <p className="text-white/80 text-xl">
            Opening Early 2026
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Address */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-5xl mb-6">📍</div>
            <h2 className="text-white font-display font-bold text-3xl mb-4">
              Location
            </h2>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Åboulevard+9+1635+København+V"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 text-xl hover:text-white transition-colors inline-block"
            >
              Åboulevard 9<br />
              1635 København V
            </a>
          </motion.div>

          {/* Hours */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">🕐</div>
              <h2 className="text-white font-display font-bold text-3xl mb-6">
                Opening Hours
              </h2>
            </div>

            <div className="max-w-md mx-auto space-y-4">
              <HoursRow day="Monday" hours="Closed" />
              <HoursRow day="Tuesday" hours="11:00 - 18:00" />
              <HoursRow day="Wednesday" hours="11:00 - 18:00" />
              <HoursRow day="Thursday" hours="11:00 - 18:00" />
              <HoursRow day="Friday" hours="11:00 - 18:00" />
              <HoursRow day="Saturday" hours="11:00 - 18:00" />
              <HoursRow day="Sunday" hours="11:00 - 18:00" />
            </div>

            <div className="mt-8 text-center">
              <p className="text-white/60 text-sm">
                Weekend Specials available Saturdays & Sundays
              </p>
            </div>
          </motion.div>

          {/* Service Info */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <InfoCard
              icon="🥡"
              title="Takeaway"
              description="Primary service - grab and go with your favorite baos"
            />
            <InfoCard
              icon="🪑"
              title="Dine In"
              description="Limited seating available for a quick bite"
            />
            <InfoCard
              icon="🚶"
              title="Walk-In Only"
              description="No reservations needed - just show up when you're hungry"
            />
            <InfoCard
              icon="💳"
              title="Payment"
              description="Card payments accepted (Mobile Pay, credit/debit cards)"
            />
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="aspect-video bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-white/60 text-lg">Interactive map coming soon</p>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Åboulevard+9+1635+København+V"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white rounded-full text-black font-bold text-lg hover:scale-105 transition-transform"
            >
              Open in Google Maps
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

interface HoursRowProps {
  day: string;
  hours: string;
}

function HoursRow({ day, hours }: HoursRowProps) {
  const isClosed = hours === 'Closed';
  return (
    <div className="flex justify-between items-center py-3 border-b border-white/10">
      <span className="text-white/80 font-medium">{day}</span>
      <span className={`font-bold ${isClosed ? 'text-white/40' : 'text-white'}`}>
        {hours}
      </span>
    </div>
  );
}

interface InfoCardProps {
  icon: string;
  title: string;
  description: string;
}

function InfoCard({ icon, title, description }: InfoCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
      <p className="text-white/70 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
