'use client';
import { useState } from "react";
import { EyeIcon, EyeOffIcon, Trash2 } from "lucide-react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { useTheme } from "next-themes";

const options: { text: string; value: number[] }[] = [
  { text: "1 ou 2", value: [1, 2] },
  { text: "2 ou 3", value: [2, 3] },
  { text: "3 ou 4", value: [3, 4] },
  { text: "4 ou 5", value: [4, 5] },
  { text: "5 ou 6", value: [5, 6] }
];

export default function VirtualKeyboard() {
  const theme = useTheme();
  const [selectedOptions, setSelectedOptions] = useState<number[][]>([]);
  const [showPassword, setShowPassword] = useState(false);

  const handleSelect = (value: number[]) => {
    setSelectedOptions((prev) => [...prev, value]);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const getOptions = () => {
    return options.map(({ text, value }) => (
      <Button
        key={text}
        onPress={() => handleSelect(value)}
        className="p-3 rounded-lg text-lg font-semibold"
        disableRipple={true}
        color="primary"
        variant="flat"
      >
        {text}
      </Button>
    ));
  };

  return (
    <div className="flex h-screen items-center justify-center bg-off-white dark:bg-shade-gray w-full">
      <Card className="p-6 rounded-2xl shadow-lg bg-white dark:bg-shade-black w-96 text-center">
        <CardHeader className="flex justify-center mb-4">
          <h2 className="text-2xl font-semibold dark:text-tint-gray text-shade-gray">Virtual Keyboard</h2>
        </CardHeader>
        <CardBody>
          <div className="relative mb-4 flex items-center">
            <Input
              type={showPassword ? "text" : "password"}
              value={selectedOptions?.map(op => op.map(String).join("")).join(" ")}
              readOnly
              className="w-full p-2 rounded text-shade-gray text-lg"
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
            <Button
              onPress={() => setSelectedOptions([])}
              className="w-full p-3 rounded-lg text-lg font-semibold"
              variant="flat"
              color="secondary"
            >
              <Trash2 size={24} className="text-secondary" />
            </Button>
          </div>
          <div className="flex w-full">
            <Button
              className="w-full p-3 rounded-lg text-lg font-semibold"
              onPress={() => alert("Acesso liberado!")}
              variant="solid"
              color="primary"
            >
              Acessar
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
