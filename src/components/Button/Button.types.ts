import { VariantProps } from "class-variance-authority";
import type { ButtonProps as ShadCNButtonProps } from "../shadcn/ui/button";

export interface CustomButtonProps extends ShadCNButtonProps {
  /** Show a loading spinner */
  loading?: boolean;
  /** Optional icon before the text */
  icon?: React.ReactNode;
}
