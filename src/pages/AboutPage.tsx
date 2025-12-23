import { motion } from 'framer-motion';

export default function AboutPage() {
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
            Our Story
          </h1>
          <p className="text-white/80 text-xl">
            From Lee's Kitchen to Holee Bao
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Section 1 */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-6xl mb-6 text-center">🥟</div>
            <h2 className="text-white font-display font-bold text-3xl mb-6 text-center">
              Born from Obsession
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              Same team behind <span className="font-bold text-white">Lee's Kitchen</span> (established 2021).
              We've been perfecting baos for years, and now we're ready to share our obsession with Copenhagen.
            </p>
          </motion.div>

          {/* Section 2 */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-white font-display font-bold text-3xl mb-6">
              What Makes Us Different
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeatureCard
                icon="🔥"
                title="Fresh Steamed to Order"
                description="Not sitting in warmers. Every bao is steamed fresh when you order."
              />
              <FeatureCard
                icon="🎯"
                title="Hyper-Focused Menu"
                description="Baos, bowls, and sides. That's it. We do one thing and do it really well."
              />
              <FeatureCard
                icon="🥢"
                title="Modern + Traditional"
                description="Traditional technique meets modern fillings and flavors."
              />
              <FeatureCard
                icon="⚡"
                title="Quick Service"
                description="Fast, efficient, no-nonsense. In and out, with amazing food."
              />
            </div>
          </motion.div>

          {/* Section 3 - Philosophy */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-white font-display font-bold text-3xl mb-6">
              Our Philosophy
            </h2>
            <blockquote className="text-white/90 text-2xl md:text-3xl font-display italic leading-relaxed text-center">
              "Modern Chinese food without the fuss.<br />
              Quality ingredients, no-nonsense execution."
            </blockquote>
          </motion.div>

          {/* Section 4 - Walk-in Only */}
          <motion.div
            className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-2 border-white/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="text-center">
              <div className="text-5xl mb-4">🚶</div>
              <h2 className="text-white font-display font-bold text-3xl mb-4">
                Walk-In Only
              </h2>
              <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
                No reservations. No bookings. Just like Lee's Kitchen, we keep it real and keep it moving.
                Walk in, get amazing food, walk out happy.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
      <p className="text-white/70 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
