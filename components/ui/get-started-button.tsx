import { ChevronRight } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type GetStartedButtonProps = {
  children: React.ReactNode;
  className?: string;
  href: string;
};

export function GetStartedButton({ children, className, href }: GetStartedButtonProps) {
  return (
    <Link className={cn("get-started-button group", className)} href={href}>
      <span className="get-started-button__label">{children}</span>
      <i className="get-started-button__icon" aria-hidden="true">
        <ChevronRight size={16} strokeWidth={2} />
      </i>
    </Link>
  );
}
