import { Loader2 } from "lucide-react";
import * as React from "react";
import { cn } from "../../utils/cn";
import { Button as ShadCNButton } from "../shadcn/ui/button";
import type { CustomButtonProps } from "./Button.types";

export const Button: React.FC<CustomButtonProps> = ({
  loading = false,
  icon,
  children,
  className,
  ...props
}) => {
  return (
    <ShadCNButton
      className={cn(
        "relative flex items-center justify-center gap-2",
        className
      )}
      disabled={loading || props.disabled} // disable if loading
      {...props}
    >
      {loading && (
        <span className="absolute left-3 flex items-center">
          <Loader2 className="h-4 w-4 animate-spin text-current" />
        </span>
      )}
      {!loading && icon && <span className="flex items-center">{icon}</span>}
      <span className={loading ? "opacity-50" : ""}>{children}</span>
    </ShadCNButton>
  );
};
