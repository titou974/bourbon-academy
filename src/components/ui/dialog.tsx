"use client";

import * as React from "react";
import { XIcon } from "lucide-react";
import { Dialog as DialogPrimitive } from "radix-ui";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const DialogOpenContext = React.createContext(false);

function Dialog({
  open,
  onOpenChange,
  defaultOpen,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen ?? false);
  const isControlled = open !== undefined;
  const actualOpen = isControlled ? open : isOpen;

  return (
    <DialogOpenContext.Provider value={actualOpen}>
      <DialogPrimitive.Root
        open={actualOpen}
        onOpenChange={(v) => {
          if (!isControlled) setIsOpen(v);
          onOpenChange?.(v);
        }}
        data-slot="dialog"
        {...props}
      />
    </DialogOpenContext.Provider>
  );
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

function DialogOverlay() {
  return null; // géré dans DialogContent
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean;
}) {
  const open = React.useContext(DialogOpenContext);

  return (
    <DialogPrimitive.Portal>
      <AnimatePresence>
        {open && (
          <DialogPrimitive.Overlay
            key="dialog-overlay"
            forceMount
            data-slot="dialog-overlay"
            asChild
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            >
              <DialogPrimitive.Content
                key="dialog-content"
                forceMount
                data-slot="dialog-content"
                {...props}
                asChild
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className={cn(
                    "z-50 grid w-full max-w-[calc(100%-2rem)] sm:max-w-2xl gap-4 rounded-xl bg-linear-to-r from-background-side via-background-center to-background-side shadow-lg outline-none relative",
                    className,
                  )}
                >
                  {children}
                  {showCloseButton && (
                    <DialogPrimitive.Close
                      data-slot="dialog-close"
                      className="absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
                    >
                      <XIcon />
                      <span className="sr-only">Close</span>
                    </DialogPrimitive.Close>
                  )}
                </motion.div>
              </DialogPrimitive.Content>
            </motion.div>
          </DialogPrimitive.Overlay>
        )}
      </AnimatePresence>
    </DialogPrimitive.Portal>
  );
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  );
}

function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  showCloseButton?: boolean;
}) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className,
      )}
      {...props}
    >
      {children}
      {showCloseButton && (
        <DialogPrimitive.Close asChild>
          <Button variant="outline">Close</Button>
        </DialogPrimitive.Close>
      )}
    </div>
  );
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
