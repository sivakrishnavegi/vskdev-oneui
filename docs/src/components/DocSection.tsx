import React from 'react';

interface DocSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const DocSection = ({ title, description, children }: DocSectionProps) => {
  return (
    <section className="space-y-4">
      <div className="space-y-1">
        <h2 className="text-lg font-semibold tracking-tight text-foreground">
          {title}
        </h2>
        {description && <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>}
      </div>
      {children}
    </section>
  );
};
