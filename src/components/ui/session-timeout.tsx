"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

function formatCountdown(seconds: number) {
  const safe = Math.max(0, Math.floor(seconds))
  const mins = Math.floor(safe / 60)
  const secs = safe % 60
  return `${mins}:${secs.toString().padStart(2, "0")}`
}

function SessionTimeout({
  open,
  onOpenChange,
  secondsRemaining,
  onStaySignedIn,
  onSignOut,
  className,
  title = "Still there?",
  description = "Your session is about to expire for security. Stay signed in to keep your draft.",
  ...props
}: React.ComponentProps<typeof AlertDialog> & {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  secondsRemaining: number
  onStaySignedIn?: () => void
  onSignOut?: () => void
  className?: string
  title?: React.ReactNode
  description?: React.ReactNode
}) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange} {...props}>
      <AlertDialogContent size="default" className={cn(className)}>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>

        <div
          data-slot="session-timeout-countdown"
          className="rounded-lg bg-surface-sunken px-4 py-3 text-center"
        >
          <p className="text-caption text-muted-foreground">Time remaining</p>
          <p
            className="mt-1 font-mono text-title-l tabular-nums text-foreground"
            aria-live="polite"
          >
            {formatCountdown(secondsRemaining)}
          </p>
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel onClick={onSignOut}>Sign out</AlertDialogCancel>
          <AlertDialogAction onClick={onStaySignedIn}>
            Stay signed in
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export { SessionTimeout, formatCountdown }
