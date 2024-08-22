import { Input as NextUiInput } from "@nextui-org/react";

type Color =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

export function Input() {
  const colors: Color[] = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ];

  return (
    <div className="w-full flex flex-row flex-wrap gap-4">
      {colors.map((color) => (
        <NextUiInput
          key={color}
          type="email"
          color={color}
          label="Email"
          placeholder="Enter your email"
          defaultValue="junior@nextui.org"
          className="max-w-[220px]"
        />
      ))}
    </div>
  );
}
