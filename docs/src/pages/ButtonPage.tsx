import { Button } from '@/src/components/Button';
import { CodeBlock } from '../components/CodeBlock';
import { PropsTable, PropDefinition } from '../components/PropsTable';
import { DocSection } from '../components/DocSection';
import { Settings, Download } from 'lucide-react';

export const ButtonPage = () => {
  const buttonProps: PropDefinition[] = [
    {
      name: 'variant',
      type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"',
      defaultValue: '"default"',
      description: 'The visual style variant of the button.'
    },
    {
      name: 'size',
      type: '"default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg"',
      defaultValue: '"default"',
      description: 'The size of the button component.'
    },
    {
      name: 'loading',
      type: 'boolean',
      defaultValue: 'false',
      description: 'Whether to show a loading spinner and disable the button.'
    },
    {
      name: 'icon',
      type: 'ReactNode',
      description: 'Optional icon to display before the button label.'
    },
    {
      name: 'asChild',
      type: 'boolean',
      defaultValue: 'false',
      description: 'Change the default rendered element to the one passed as a child, merging their props and behavior.'
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: 'false',
      description: 'Whether the button should be interactive.'
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-16">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Button</h1>
        <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
          Displays a button or a component that looks like a button.
        </p>
      </header>

      <DocSection title="Installation">
        <CodeBlock code={`import { Button } from '@vskdev/web-oneui';`} />
      </DocSection>

      <DocSection title="Usage">
        <div className="rounded-lg border border-border p-8 flex items-center justify-center bg-card/50">
          <Button>Button</Button>
        </div>
        <CodeBlock code={`<Button>Button</Button>`} />
      </DocSection>

      <DocSection title="Variants">
        <div className="rounded-lg border border-border p-8 flex flex-wrap gap-4 items-center justify-center bg-card/50">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
        <CodeBlock code={`<Button variant="outline">Outline</Button>`} />
      </DocSection>

      <DocSection title="Sizes">
        <div className="rounded-lg border border-border p-8 flex flex-wrap gap-4 items-center justify-center bg-card/50">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon"><Settings size={16} /></Button>
        </div>
        <CodeBlock code={`<Button size="sm">Small</Button>`} />
      </DocSection>

      <DocSection title="Loading State">
        <div className="rounded-lg border border-border p-8 flex flex-wrap gap-4 items-center justify-center bg-card/50">
          <Button loading>Loading...</Button>
          <Button variant="outline" loading>Processing</Button>
        </div>
        <CodeBlock code={`<Button loading>Loading...</Button>`} />
      </DocSection>

      <DocSection title="Icons">
        <div className="rounded-lg border border-border p-8 flex flex-wrap gap-4 items-center justify-center bg-card/50">
          <Button icon={<Download size={16} />}>Download</Button>
          <Button variant="outline" icon={<Settings size={16} />}>Settings</Button>
        </div>
        <CodeBlock code={`<Button icon={<Download />}>Download</Button>`} />
      </DocSection>

      <DocSection title="API Reference">
        <PropsTable props={buttonProps} />
      </DocSection>
    </div>
  );
};
