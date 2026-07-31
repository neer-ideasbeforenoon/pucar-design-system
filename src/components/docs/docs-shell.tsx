"use client";

import * as React from "react";
import Link from "next/link";
import { PanelLeftCloseIcon, PanelLeftIcon } from "lucide-react";

import { DocsSidebarNav } from "@/components/docs/sidebar-nav";
import { ThemeToggle } from "@/components/docs/theme-toggle";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "pucar-docs-nav-open";

export function DocsShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(true);
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "0") setOpen(false);
      if (stored === "1") setOpen(true);
      setReady(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  React.useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(STORAGE_KEY, open ? "1" : "0");
  }, [open, ready]);

  return (
    <div className="flex min-h-full flex-col bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-sm">
        <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
          <div className="flex min-w-0 items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              aria-controls="docs-sidebar"
              aria-expanded={open}
              aria-label={open ? "Collapse navigation" : "Expand navigation"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? (
                <PanelLeftCloseIcon className="size-4" />
              ) : (
                <PanelLeftIcon className="size-4" />
              )}
            </Button>
            <Link href="/" className="flex min-w-0 items-center gap-2">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground">
                P
              </span>
              <span className="truncate text-sm font-semibold tracking-tight text-foreground">
                Pucar Design System
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <p className="hidden text-xs text-muted-foreground sm:block">
              Tokens · Components · Guidance
            </p>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-7xl flex-1">
        <aside
          id="docs-sidebar"
          data-state={open ? "open" : "closed"}
          aria-hidden={!open}
          inert={!open ? true : undefined}
          className={cn(
            "sticky top-14 h-[calc(100vh-3.5rem)] shrink-0 overflow-hidden border-border transition-[width,opacity,border-color] duration-200 ease-out",
            open
              ? "w-56 border-r opacity-100 sm:w-64"
              : "w-0 border-r-0 opacity-0 pointer-events-none"
          )}
        >
          <ScrollArea className="h-full w-56 sm:w-64">
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
