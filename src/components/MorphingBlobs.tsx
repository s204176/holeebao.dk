import { motion } from 'framer-motion';

export default function MorphingBlobs() {
  const blobs = [
    {
      size: 'w-96 h-96',
      color: 'from-bao-golden/30 to-yellow-500/30',
      position: 'top-0 -left-48',
      duration: 20
    },
    {
      size: 'w-[500px] h-[500px]',
      color: 'from-orange-400/20 to-bao-golden/20',
      position: 'top-1/4 right-0',
      duration: 25
    },
    {
      size: 'w-80 h-80',
      color: 'from-yellow-600/25 to-orange-500/25',
      position: 'bottom-1/3 left-1/4',
      duration: 22
    },
    {
      size: 'w-[450px] h-[450px]',
      color: 'from-bao-golden/20 to-yellow-400/20',
      position: 'bottom-0 -right-32',
      duration: 18
    }
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className={`absolute ${blob.size} ${blob.position}`}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
            borderRadius: ['60% 40% 30% 70%', '40% 60% 70% 30%', '60% 40% 30% 70%']
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          <div className={`w-full h-full bg-gradient-to-br ${blob.color} blur-3xl`} />
        </motion.div>
      ))}

      {/* Animated gradient mesh overlay */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 20%, rgba(232,184,77,0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 80%, rgba(232,184,77,0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 80%, rgba(232,184,77,0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(232,184,77,0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 20%, rgba(232,184,77,0.1) 0%, transparent 50%)'
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
    </div>
  );
}
