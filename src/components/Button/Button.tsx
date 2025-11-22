import React from "react";
import { ButtonProps } from "./Button.types";
import { cn } from "../../utils/cn";

export const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "md",
  className,
  ...props
}) => {
  const base = "rounded font-medium transition-colors";

  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-400 text-gray-600 hover:bg-gray-200",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-5 py-3 text-lg",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
};
