import Link from "next/link";

import { DocsSidebarNav } from "@/components/docs/sidebar-nav";
import { ThemeToggle } from "@/components/docs/theme-toggle";
import { ScrollArea } from "@/components/ui/scroll-area";

export function DocsShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-col bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-sm">
        <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex size-7 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground">
              P
            </span>
            <span className="text-sm font-semibold tracking-tight text-foreground">
              Pucar Design System
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <p className="hidden text-xs text-muted-foreground sm:block">
              Tokens · Components · Guidance
            </p>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-7xl flex-1">
        <aside className="sticky top-14 h-[calc(100vh-3.5rem)] w-56 shrink-0 border-r border-border sm:w-64">
          <ScrollArea className="h-full">
            <DocsSidebarNav />
          </ScrollArea>
        </aside>

        <main className="min-w-0 flex-1 px-4 py-8 sm:px-8 md:px-10 md:py-10">
          <div className="mx-auto w-full max-w-3xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
