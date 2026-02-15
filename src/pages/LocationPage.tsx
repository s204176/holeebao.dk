import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Footer from '../components/layout/Footer';

// SVG Icon component
const LocationIcon = ({ type }: { type: string }) => {
  const iconClass = "w-12 h-12 text-white/90";
  const smallIconClass = "w-10 h-10 text-white/90";

  switch (type) {
    case 'pin':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case 'clock':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 'takeaway':
      return (
        <svg className={smallIconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      );
    case 'dine':
      return (
        <svg className={smallIconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      );
    case 'walk':
      return (
        <svg className={smallIconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      );
    case 'card':
      return (
        <svg className={smallIconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      );
    case 'map':
      return (
        <svg className="w-16 h-16 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      );
    default:
      return null;
  }
};

export default function LocationPage() {
  // Force scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <div className="min-h-screen bg-bao-golden px-6 pt-24 pb-8 w-full max-w-full overflow-x-hidden">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-white font-display font-bold text-5xl sm:text-6xl md:text-7xl mb-4">
            Find Us
          </h1>
          <p className="text-white/80 text-xl">
            Copenhagen's newest bao destination
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-6">
          {/* Address */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex justify-center mb-6">
              <LocationIcon type="pin" />
            </div>
            <h2 className="text-white font-display font-bold text-3xl mb-4">
              Location
            </h2>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Åboulevard+7+st+tv+1635+København+V"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 text-xl hover:text-white transition-colors inline-block"
            >
              Åboulevard 7, st tv<br />
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
              <div className="flex justify-center mb-4">
                <LocationIcon type="clock" />
              </div>
              <h2 className="text-white font-display font-bold text-3xl mb-6">
                Opening Hours
              </h2>
            </div>

            <div className="max-w-md mx-auto space-y-4">
              <HoursRow day="Monday" hours="Closed" />
              <HoursRow day="Tuesday" hours="15:00 - 20:00" />
              <HoursRow day="Wednesday" hours="15:00 - 20:00" />
              <HoursRow day="Thursday" hours="15:00 - 20:00" />
              <HoursRow day="Friday" hours="15:00 - 20:00" />
              <HoursRow day="Saturday" hours="11:00 - 20:00" />
              <HoursRow day="Sunday" hours="11:00 - 20:00" />
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
              iconType="takeaway"
              title="Takeaway"
              description="Primary service - grab and go with your favorite baos"
            />
            <InfoCard
              iconType="dine"
              title="Dine In"
              description="Limited seating available for a quick bite"
            />
            <InfoCard
              iconType="walk"
              title="Walk-In Only"
              description="No reservations needed - just show up when you're hungry"
            />
            <InfoCard
              iconType="card"
              title="Payment"
              description="Cash preferred (card accepted but we prefer cash to avoid fees)"
            />
          </motion.div>

          {/* Interactive Map */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d281.1709186023836!2d12.556688519382373!3d55.68260085897042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46525300347d3373%3A0xdc1fd089fd21f1ad!2sHo%20Lee%20Bao!5e0!3m2!1sen!2sdk!4v1768868254575!5m2!1sen!2sdk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ho Lee Bao Location"
              ></iframe>
            </div>
            <div className="p-6 text-center">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Åboulevard+7+1635+København+V"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full text-black font-bold hover:scale-105 transition-transform"
              >
                Open in Google Maps
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
        <Footer className="mt-8" />
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
  iconType: string;
  title: string;
  description: string;
}

function InfoCard({ iconType, title, description }: InfoCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <div className="mb-3">
        <LocationIcon type={iconType} />
      </div>
      <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
      <p className="text-white/70 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
