"use client";

import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

import { cn } from "@/lib/cn";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b border-b-black border-b-2 ", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">

<AccordionPrimitive.Trigger
  ref={ref}
  asChild
  {...props}
>
  <motion.div
    className={cn(
      "flex flex-1 items-center text-red justify-between py-4 text-[20px] font-bold text-left",
      className
    )}
    whileHover={{ x: 8 }} // Geser ke kanan secara halus
    transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }} // Efek smooth
  >
    {children}
    <ChevronDown className="h-[2rem] w-[2rem] shrink-0 text-muted-foreground transition-transform duration-200" />
  </motion.div>
</AccordionPrimitive.Trigger>



  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-[20px] bg-[#553800]  text-white p-4 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("py-4", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
