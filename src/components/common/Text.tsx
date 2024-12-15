import { HTMLProps } from "react";

const Text = ({
  variant,
  className,
  ...props
}: HTMLProps<HTMLParagraphElement> & {
  variant?:
    | "primary"
    | "secondary"
    | "muted"
    | "gray"
    | "error"
    | "success"
    | "white"
    | "warning"
    | "neutral"
    | "default";
  classes?: string;
}) => {
  const textColorTheme = () => {
    switch (variant) {
      case "primary":
        return "text-primary-100";
      case "white":
        return "text-white";
      case "secondary":
        return "text-dark-90";
      case "muted":
        return "text-dark-60";
      case "gray":
        return "text-dark-80";
      case "error":
        return "text-error-100";
      case "success":
        return "text-success-100";
      case "warning":
        return "text-warning-100";
      default:
        return "text-dark-90";
    }
  };

  const classes = `${textColorTheme()} ${className}`;
  return (
    <p className={classes} {...props}>
      {props.children ? props.children : props.title}
    </p>
  );
};

export { Text };
