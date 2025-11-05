import Plasma from './Plasma';

export default function PlasmaBackground() {
  return (
    <div className="fixed inset-0" style={{ zIndex: 0 }}>
      <Plasma
        color="#E8B84D"
        speed={0.6}
        direction="forward"
        scale={1.1}
        opacity={0.8}
        mouseInteractive={true}
      />
    </div>
  );
}
