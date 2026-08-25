"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { ToggleGroup as ToggleGroupPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

/**
 * Single-choice segmented control — a small, fixed set of mutually exclusive options
 * shown side by side (Yes / No, Complainant / Accused, OTP / Password).
 *
 * Selection reads as a raised chip on a recessed track, which is the system's own
 * treatment for "selected on a track": `Tabs` puts `bg-track` on its list and gives the
 * active trigger `bg-background` plus a shadow. `Toggle`'s `accent-strong` is the right
 * fill for a toggle sitting on a page, but on this track it measures 1.08:1 — an
 * invisible selection.
 *
 * Two sizes, one control:
 * - `default` — the 40px form control. Use it inside forms, beside inputs.
 * - `compact` — a 32px visible well for secondary choices in dense chrome (language,
 *   sign-in method). The *hit target stays 40px*: the well shrinks, the target does not.
 *   That is the whole reason this size exists rather than `ToggleGroup size="sm"`, whose
 *   28px target is below the 40×40 floor.
 */

const SegmentedControlContext = React.createContext<{
  size: "default" | "compact"
}>({ size: "default" })

/**
 * Both sizes keep a 40px row and a 40px hit target; only the *visible* well and pill
 * shrink. The well is a pseudo-element rather than the root's own background so the
 * items can stay full height underneath it.
 */
const segmentedControlVariants = cva(
  "relative flex h-10 w-fit flex-row items-center gap-0 before:pointer-events-none before:absolute before:inset-x-0 before:rounded-lg before:bg-track",
  {
    variants: {
      size: {
        // 40px well, 36px pill — a 2px inset, the form-control proportion.
        default: "[--segment-inset:calc(var(--spacing)*0.5)] before:inset-y-0",
        // 32px well, 26px pill — a 3px inset, for secondary choices in dense chrome.
        compact: "[--segment-inset:calc(var(--spacing)*0.75)] before:inset-y-1",
      },
    },
    defaultVariants: { size: "default" },
  },
)

const segmentedControlItemVariants = cva(
  "group/segment relative z-10 inline-flex h-10 shrink-0 items-center justify-center whitespace-nowrap text-body-compact text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:z-20 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      size: {
        default: "min-w-16 px-0.5 data-[state=on]:text-foreground",
        compact:
          "min-w-10 px-0.5 font-medium data-[state=on]:font-semibold data-[state=on]:text-primary data-[state=on]:hover:text-primary",
      },
    },
    defaultVariants: { size: "default" },
  },
)

const segmentedControlPillVariants = cva(
  cn(
    "pointer-events-none flex min-w-0 items-center justify-center rounded-[calc(var(--radius-lg)-var(--segment-inset))] border border-transparent transition-all",
    "group-hover/segment:bg-accent",
    "group-focus-visible/segment:border-ring group-focus-visible/segment:ring-3 group-focus-visible/segment:ring-ring/50",
    "group-data-[state=on]/segment:bg-background group-data-[state=on]/segment:shadow-raised",
    "group-data-[state=on]/segment:group-hover/segment:bg-background",
    "dark:group-data-[state=on]/segment:bg-accent-strong dark:group-data-[state=on]/segment:group-hover/segment:bg-accent-strong",
  ),
  {
    variants: {
      size: {
        default: "h-9 w-full px-4",
        compact: "h-6.5 px-2.5",
      },
    },
    defaultVariants: { size: "default" },
  },
)

function SegmentedControl({
  className,
  size = "default",
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> &
  VariantProps<typeof segmentedControlVariants>) {
  return (
    <SegmentedControlContext.Provider value={{ size: size ?? "default" }}>
      <ToggleGroupPrimitive.Root
        data-slot="segmented-control"
        data-size={size}
        className={cn(segmentedControlVariants({ size }), className)}
        {...props}
      />
    </SegmentedControlContext.Provider>
  )
}

function SegmentedControlItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item>) {
  const { size } = React.useContext(SegmentedControlContext)

  return (
    <ToggleGroupPrimitive.Item
      data-slot="segmented-control-item"
      data-size={size}
      className={cn(segmentedControlItemVariants({ size }), className)}
      {...props}
    >
      {/* The visible pill is inset from the 40px target. Its radius subtracts that same
          inset from `radius-lg` so the two curves stay parallel through the corners
          instead of converging. */}
      <span className={cn(segmentedControlPillVariants({ size }))}>{children}</span>
    </ToggleGroupPrimitive.Item>
  )
}

export {
  SegmentedControl,
  SegmentedControlItem,
  segmentedControlVariants,
  segmentedControlItemVariants,
  segmentedControlPillVariants,
}
