import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import React, { ForwardRefRenderFunction, forwardRef, useState } from "react";

interface PinInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const PinInput: ForwardRefRenderFunction<HTMLInputElement, PinInputProps> = (
  props,
  ref
) => {
  const [showPin, setShowPin] = useState<boolean>(false);

  return (
    <div className="relative">
      <Input
        {...props}
        ref={ref}
        placeholder="******"
        type={showPin ? "text" : "password"}
        id={props.id ? props.id : "password"}
        className={`w-full ${props.className}`} // Ensure template literals are correct
      />

      <div className="absolute max-w-max h-full right-space8 z-20 top-0 right-2 flex items-center">
        <button type="button" onClick={() => setShowPin(!showPin)}>
          {showPin ? <EyeOff color="#B5B5B5" /> : <Eye color="#B5B5B5" />}
        </button>
      </div>
    </div>
  );
};

export default forwardRef(PinInput);
