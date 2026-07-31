import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import {
  CircleAlertIcon,
  CircleCheckIcon,
  InfoIcon,
  MegaphoneIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"

const bannerVariants = cva(
  "relative flex w-full items-center gap-3 border px-4 py-2.5 text-sm",
  {
    variants: {
      variant: {
        info: "border-info-muted bg-info-muted text-info-muted-foreground",
        warning:
          "border-warning-muted bg-warning-muted text-warning-muted-foreground",
        success:
          "border-success-muted bg-success-muted text-success-muted-foreground",
        neutral: "border-border bg-muted text-foreground",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
)

const bannerIcons = {
  info: InfoIcon,
  warning: CircleAlertIcon,
  success: CircleCheckIcon,
  neutral: MegaphoneIcon,
} as const

function Banner({
  className,
  variant = "info",
  children,
  action,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof bannerVariants> & {
    action?: React.ReactNode
  }) {
  const Icon = bannerIcons[variant ?? "info"]

  return (
    <div
      data-slot="banner"
      data-variant={variant}
      role="status"
      className={cn(bannerVariants({ variant }), className)}
      {...props}
    >
      <Icon className="size-4 shrink-0" aria-hidden />
      <div className="min-w-0 flex-1 leading-snug">{children}</div>
      {action ? (
        <div data-slot="banner-action" className="shrink-0">
          {action}
        </div>
      ) : null}
    </div>
  )
}

export { Banner, bannerVariants }
