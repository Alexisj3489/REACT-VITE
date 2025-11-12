// src/components/Card/CardContainer.tsx
import React from 'react';

interface CardContainerProps {
  children: React.ReactNode;
  width?: string;
  // Puedes añadir más props si quieres variar el estilo del contenedor
}

export function CardContainer({ children, width = '350px' }: CardContainerProps) {
  return (
    <div className="card shadow-sm" style={{ width: width, border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden' }}>
      {children}
    </div>
  );
}