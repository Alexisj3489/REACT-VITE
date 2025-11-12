// src/components/Card/CardLink.tsx
interface CardLinkProps {
  href: string;
  label: string;
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'info' | 'dark'; // Opciones de color de Bootstrap
}

export function CardLink({ href, label, variant = 'info' }: CardLinkProps) { // Por defecto, usaremos 'info' para un azul más claro
  return (
    <a href={href} className={`btn btn-${variant}`} style={{ marginTop: '15px' }}>
      {label}
    </a>
  );
}