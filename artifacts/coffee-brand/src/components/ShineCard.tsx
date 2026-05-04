interface ShineCardProps {
  children: React.ReactNode;
  className?: string;
}

export function ShineCard({ children, className = '' }: ShineCardProps) {
  return (
    <div className={`shine-card ${className}`}>
      {children}
    </div>
  );
}
