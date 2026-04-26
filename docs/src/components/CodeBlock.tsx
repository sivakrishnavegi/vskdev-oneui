import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Button } from '@/src/components/Button';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export const CodeBlock = ({ code }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-md overflow-hidden border border-border bg-muted/30">
      <div className="absolute right-3 top-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button
          size="icon-sm"
          variant="ghost"
          className="h-7 w-7 bg-background/50 backdrop-blur-sm border border-border/50"
          onClick={copyToClipboard}
        >
          {copied ? <Check size={12} className="text-green-500" /> : <Copy size={12} />}
        </Button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="text-xs font-mono text-foreground/80 leading-relaxed">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};
