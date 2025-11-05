export default function PlasmaBackground() {
  return (
    <div className="fixed inset-0 bg-bao-golden overflow-hidden" style={{ zIndex: 0 }}>
      {/* Plasma SVG Filter */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <filter id="plasma-filter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.005 0.003"
              numOctaves="5"
              seed="2"
            >
              <animate
                attributeName="baseFrequency"
                dur="60s"
                values="0.005 0.003;0.007 0.005;0.005 0.003"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 18 -7"
            />
            <feBlend mode="screen" in2="SourceGraphic" />
          </filter>

          <filter id="plasma-glow">
            <feGaussianBlur stdDeviation="30" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0
                      0.9 0.7 0 0 0
                      0 0 0.3 0 0
                      0 0 0 0.8 0"
            />
            <feBlend mode="screen" in2="SourceGraphic" />
          </filter>
        </defs>

        {/* Plasma layers */}
        <rect
          width="100%"
          height="100%"
          fill="#F5CF6B"
          filter="url(#plasma-filter)"
          opacity="0.4"
        />

        {/* Animated gradient blobs */}
        <g filter="url(#plasma-glow)">
          <circle cx="20%" cy="30%" r="25%" fill="#E8B84D" opacity="0.6">
            <animate
              attributeName="cx"
              dur="40s"
              values="20%;30%;20%"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              dur="35s"
              values="30%;50%;30%"
              repeatCount="indefinite"
            />
          </circle>

          <circle cx="80%" cy="60%" r="30%" fill="#D4A03A" opacity="0.5">
            <animate
              attributeName="cx"
              dur="45s"
              values="80%;70%;80%"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              dur="38s"
              values="60%;40%;60%"
              repeatCount="indefinite"
            />
          </circle>

          <circle cx="50%" cy="70%" r="35%" fill="#F5CF6B" opacity="0.4">
            <animate
              attributeName="cx"
              dur="50s"
              values="50%;60%;50%"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              dur="42s"
              values="70%;50%;70%"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* Subtle noise texture overlay */}
        <rect
          width="100%"
          height="100%"
          fill="url(#noise-pattern)"
          opacity="0.15"
        />

        <defs>
          <pattern id="noise-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <rect width="100" height="100" fill="#E8B84D" />
            <rect width="1" height="1" x="12" y="34" fill="#F5CF6B" opacity="0.5" />
            <rect width="1" height="1" x="45" y="67" fill="#F5CF6B" opacity="0.5" />
            <rect width="1" height="1" x="78" y="23" fill="#D4A03A" opacity="0.5" />
            <rect width="1" height="1" x="23" y="89" fill="#F5CF6B" opacity="0.5" />
            <rect width="1" height="1" x="67" y="45" fill="#D4A03A" opacity="0.5" />
          </pattern>
        </defs>
      </svg>

      {/* Additional subtle gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(245, 207, 107, 0.3) 0%, transparent 70%)',
          animation: 'pulse 8s ease-in-out infinite',
        }}
      />

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}
