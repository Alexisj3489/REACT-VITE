// src/components/Card/CardFooter.tsx
import React from 'react';

interface CardFooterProps {
  children: React.ReactNode;
}

export function CardFooter({ children }: CardFooterProps) {
  return (
    <div className="card-footer bg-light text-muted" style={{ padding: '10px 15px', borderTop: '1px solid #f0f0f0', fontSize: '0.85em' }}>
      {children}
    </div>
  );
}