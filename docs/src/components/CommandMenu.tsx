import { useEffect, useState } from "react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/src/components/shadcn/ui/command"
import { Layers, Search, BookOpen, Github } from "lucide-react"

interface CommandMenuProps {
  onSelect: (id: string) => void;
}

export function CommandMenu({ onSelect }: CommandMenuProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = (id: string) => {
    onSelect(id)
    setOpen(false)
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hidden md:flex items-center gap-2 px-3 py-1.5 text-[13px] text-muted-foreground bg-muted/50 border border-border rounded-md hover:bg-muted transition-colors w-64 text-left shadow-sm"
      >
        <Search size={14} className="opacity-50" />
        <span>Search docs...</span>
        <kbd className="ml-auto pointer-events-none inline-flex h-4 select-none items-center gap-1 rounded border bg-muted px-1 font-mono text-[9px] font-medium text-muted-foreground opacity-100">
          <span className="text-[10px]">⌘</span>K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem onSelect={() => runCommand("intro")}>
              <BookOpen className="mr-2 h-4 w-4" />
              <span>Introduction</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Components">
            <CommandItem onSelect={() => runCommand("button")}>
              <Layers className="mr-2 h-4 w-4" />
              <span>Button</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Links">
            <CommandItem onSelect={() => window.open('https://github.com', '_blank')}>
              <Github className="mr-2 h-4 w-4" />
              <span>GitHub Repository</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
