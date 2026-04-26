import React from 'react';

export interface PropDefinition {
  name: string;
  type: string;
  defaultValue?: string;
  description: string;
}

interface PropsTableProps {
  props: PropDefinition[];
}

export const PropsTable = ({ props }: PropsTableProps) => {
  return (
    <div className="rounded-md border border-border bg-card/50">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-muted/50 text-muted-foreground font-medium border-b border-border">
            <tr>
              <th className="px-4 py-3">Prop</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Default</th>
              <th className="px-4 py-3">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {props.map((prop) => (
              <tr key={prop.name} className="hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-mono text-primary font-medium">{prop.name}</td>
                <td className="px-4 py-3 text-muted-foreground font-mono text-[11px]">{prop.type}</td>
                <td className="px-4 py-3 text-muted-foreground font-mono text-[11px]">
                  {prop.defaultValue || '-'}
                </td>
                <td className="px-4 py-3 text-foreground/80">{prop.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
