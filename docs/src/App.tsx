import { useState } from 'react';
import { Button } from '@/src/components/Button';
import { Sidebar } from './components/Sidebar';
import { CommandMenu } from './components/CommandMenu';
import { ThemeToggle } from './components/ThemeToggle';
import { ButtonPage } from './pages/ButtonPage';
import { Menu, X, Github, Twitter } from 'lucide-react';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('intro');

  return (
    <div className="flex h-screen overflow-hidden bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary">
      {/* Sidebar */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isOpen={isSidebarOpen} 
      />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto scroll-smooth flex flex-col h-full bg-background">
        {/* Header - Shadcn Style */}
        <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center justify-between px-6">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
                className="p-2 hover:bg-muted rounded-md text-muted-foreground transition-colors mr-2 lg:hidden"
              >
                {isSidebarOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
              
              <div className="hidden md:flex items-center gap-6">
                <nav className="flex items-center gap-4 text-sm font-medium">
                  <button onClick={() => setActiveTab('intro')} className="transition-colors hover:text-foreground/80 text-foreground/60">Docs</button>
                  <button onClick={() => setActiveTab('button')} className="transition-colors hover:text-foreground/80 text-foreground/60">Components</button>
                </nav>
              </div>
            </div>

            <div className="flex flex-1 items-center justify-end space-x-2">
              <div className="w-full flex-1 md:w-auto md:flex-none">
                <CommandMenu onSelect={(id) => setActiveTab(id)} />
              </div>
              <nav className="flex items-center gap-1">
                <a href="https://github.com/sivakrishnavegi" target="_blank" rel="noreferrer" className="p-2 hover:bg-muted rounded-md text-muted-foreground transition-colors">
                  <Github size={18} />
                </a>
                <ThemeToggle />
              </nav>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-6 py-12 lg:px-10">
            {activeTab === 'intro' && (
              <div className="space-y-8 animate-in fade-in duration-500">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Introduction</h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    A premium React component library built on top of <span className="text-primary font-medium">Shadcn UI</span>. Designed for private internal projects, focused on consistency and high-end aesthetics.
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <Button size="sm" onClick={() => setActiveTab('button')} className="rounded-md px-4 font-semibold">Get Started</Button>
                  <a href="https://github.com/sivakrishnavegi" target="_blank" rel="noreferrer">
                    <Button variant="outline" size="sm" className="rounded-md px-4 font-semibold">View Repository</Button>
                  </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
                  <div className="group rounded-lg border border-border bg-card p-6 transition-colors hover:bg-muted/50">
                    <h3 className="text-base font-semibold mb-2">Design System</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">Built with Tailwind CSS for consistent styling across your entire application.</p>
                  </div>
                  <div className="group rounded-lg border border-border bg-card p-6 transition-colors hover:bg-muted/50">
                    <h3 className="text-base font-semibold mb-2">Accessible</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">Built on top of Radix UI primitives to ensure full keyboard and screen reader support.</p>
                  </div>
                </div>

                <div className="pt-10 border-t border-border">
                  <h2 className="text-xl font-bold mb-4 tracking-tight">Project Status</h2>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">Is this Open Source?</h4>
                      <p className="text-sm text-muted-foreground">No. OneUI is a <span className="font-bold text-foreground">private repository</span> owned by siva krishna vegi. It is not licensed for public use or distribution.</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">Technical Foundation</h4>
                      <p className="text-sm text-muted-foreground">Built using React, Tailwind CSS, and Shadcn UI primitives for high-performance internal tools.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'button' && <ButtonPage />}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
