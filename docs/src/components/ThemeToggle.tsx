import { Sun, Moon } from 'lucide-react';
import { Button } from '@/src/components/Button';
import { useEffect, useState } from 'react';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check initial theme from HTML class
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full w-9 h-9 hover:bg-muted transition-all duration-300"
    >
      {isDark ? <Sun size={18} className="text-amber-500" /> : <Moon size={18} className="text-slate-700" />}
    </Button>
  );
};
