"use client";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const InputWithAddSub = () => {
  const [value, setValue] = React.useState<string>('1');

  return (
    <div className="relative">
      <Input
        type="number"
        value={value}
        className="max-w-[180px] text-center"
        onChange={(e) => setValue(String(e.target.value))}
      />
      <Button
        variant={"outline"}
        className="h-8 w-8 absolute left-1 top-1"
        onClick={() => setValue((prv) => String(Number(prv) - 1))}
      >
        -
      </Button>
      <Button
        variant={"outline"}
        className="h-8 w-8 absolute right-1 top-1"
        onClick={() => setValue((prv) => String(Number(prv) + 1))}
      >
        +
      </Button>
    </div>
  );
};

export default InputWithAddSub;
