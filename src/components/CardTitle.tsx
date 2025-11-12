// src/components/Card/CardTitle.tsx
interface CardTitleProps {
  title: string;
}

export function CardTitle({ title }: CardTitleProps) {
  return (
    <h4 className="card-title mb-2" style={{ color: '#333', fontWeight: '600' }}>{title}</h4> // h4 para un título ligeramente más grande y más oscuro
  );
}