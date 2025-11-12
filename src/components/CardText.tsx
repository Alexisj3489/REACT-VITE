// src/components/Card/CardText.tsx
interface CardTextProps {
  text: string;
}

export function CardText({ text }: CardTextProps) {
  return (
    <p className="card-text" style={{ color: '#555', fontSize: '0.95em' }}>{text}</p> // Texto un poco más oscuro y ligeramente más pequeño
  );
}