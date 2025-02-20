'use client';
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";

const options: { text: string; value: number[] }[] = [
  { text: "1 ou 2", value: [1, 2] },
  { text: "2 ou 3", value: [2, 3] },
  { text: "3 ou 4", value: [3, 4] },
  { text: "4 ou 5", value: [4, 5] },
  { text: "5 ou 6", value: [5, 6] },
  { text: "6 ou 1", value: [6, 1] }
];

export default function VirtualKeyboard() {
  const [selectedOptions, setSelectedOptions] = useState<number[][]>([]);
  const [showPassword, setShowPassword] = useState(false);

  const handleSelect = (value: number[]) => {
    setSelectedOptions((prev) => [...prev, value]);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const getOptions = () => {
    if (options.length === 0) [];

    return options.map(({ text, value }) => (
      <Button
        key={text}
        onPress={() => handleSelect(value)}
        className="p-3 rounded-lg bg-light-blue text-dark-black text-lg font-semibold hover:bg-blue"
        disableRipple={true}
      >
        {text}
      </Button>
    ));
  };

  return (
    <div className="flex h-screen items-center justify-center bg-light-white">
      <Card className="p-6 rounded-2xl shadow-lg bg-white w-96 text-center">
        <CardHeader className="flex justify-center mb-4">
          <h2 className="text-2xl font-semibold text-dark-black">Virtual Keyboard</h2>
        </CardHeader>
        <CardBody>
          <div className="relative mb-4 flex items-center">
            <Input
              type={showPassword ? "text" : "password"}
              value={selectedOptions?.map(op => op.map(String).join("")).join(" ")}
              readOnly
              className="w-full p-2 rounded text-dark-black text-lg"
            />
            <Button
              onPress={togglePasswordVisibility}
              className="relative text-gray hover:text-dark-gray"
              size="sm"
              disableRipple={true}
            >
              {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-2 mb-4">
            {getOptions()}
          </div>
          <div className="flex justify-between space-x-2">
            <Button
              onPress={() => setSelectedOptions([])}
              className="w-full p-3 rounded-lg text-lg font-semibold"
              variant="ghost"
              color="secondary"
            >
              Limpar
            </Button>
            <Button
              className="w-full p-3 rounded-lg bg-dark-blue text-white text-lg font-semibold hover:bg-blue"
              onPress={() => alert("Acesso liberado!")}
            >
              Acessar
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
