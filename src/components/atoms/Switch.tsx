import { Switch as NextUiSwitch } from "@nextui-org/react";

export function Switch() {
  return (
    <div className="flex gap-4">
      <NextUiSwitch defaultSelected color="default">
        Default
      </NextUiSwitch>
      <NextUiSwitch defaultSelected color="primary">
        Primary
      </NextUiSwitch>
      <NextUiSwitch defaultSelected color="secondary">
        Secondary
      </NextUiSwitch>
      <NextUiSwitch defaultSelected color="success">
        Success
      </NextUiSwitch>
      <NextUiSwitch defaultSelected color="warning">
        Warning
      </NextUiSwitch>
      <NextUiSwitch defaultSelected color="danger">
        Danger
      </NextUiSwitch>
    </div>
  );
}
