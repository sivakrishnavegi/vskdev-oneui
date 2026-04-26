import { Layers, BookOpen, Github } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
  isOpen: boolean;
}

export const Sidebar = ({ activeTab, setActiveTab, isOpen }: SidebarProps) => {
  const sections = [
    {
      title: "Getting Started",
      items: [
        { id: 'intro', name: 'Introduction', icon: <BookOpen size={14} /> },
      ]
    },
    {
      title: "Components",
      items: [
        { id: 'button', name: 'Button', icon: <Layers size={14} /> },
      ]
    }
  ];

  return (
    <aside className={`
      ${isOpen ? 'w-60' : 'w-0'} 
      transition-all duration-300 ease-in-out border-r border-border bg-background
      flex flex-col overflow-hidden h-full z-20
    `}>
      {/* Sidebar Logo */}
      <div className="h-14 flex items-center px-6 border-b border-border/50 shrink-0">
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => setActiveTab('intro')}>
          <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
            <span className="text-[10px] font-black text-primary-foreground">UI</span>
          </div>
          <span className="font-semibold text-sm tracking-tight">OneUI</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-6 px-3 scrollbar-hide">
        {sections.map((section, idx) => (
          <div key={idx} className="mb-6 last:mb-0">
            <h4 className="px-3 mb-2 text-xs font-semibold text-foreground/70 tracking-tight uppercase">
              {section.title}
            </h4>
            <div className="space-y-0.5">
              {section.items.map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-2.5 px-3 py-1.5 rounded-md text-[13px] font-medium transition-colors ${
                    activeTab === item.id 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  <span className={activeTab === item.id ? 'text-primary' : 'text-muted-foreground/50'}>
                    {item.icon}
                  </span>
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-border/50 bg-muted/5">
        <div className="flex items-center justify-between px-2">
          <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">Private v1.0.5</span>
          <a href="https://github.com/sivakrishnavegi" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-1 hover:bg-muted rounded">
            <Github size={14} />
          </a>
        </div>
      </div>
    </aside>
  );
};
