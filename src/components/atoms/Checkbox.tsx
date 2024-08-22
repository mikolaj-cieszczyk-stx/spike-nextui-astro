import React from "react";
import { Checkbox as NextUiCheckbox } from "@nextui-org/react";

export function Checkbox() {
  return (
    <div className="grid grid-cols-6 w-max gap-4">
      <NextUiCheckbox defaultSelected radius="full">
        Full
      </NextUiCheckbox>
      <NextUiCheckbox defaultSelected radius="lg">
        Large
      </NextUiCheckbox>
      <NextUiCheckbox defaultSelected radius="md">
        Medium
      </NextUiCheckbox>
      <NextUiCheckbox defaultSelected radius="sm">
        Small
      </NextUiCheckbox>
      <NextUiCheckbox defaultSelected radius="none">
        None
      </NextUiCheckbox>

      <NextUiCheckbox defaultSelected color="default">
        Default
      </NextUiCheckbox>
      <NextUiCheckbox defaultSelected color="primary">
        Primary
      </NextUiCheckbox>
      <NextUiCheckbox defaultSelected color="secondary">
        Secondary
      </NextUiCheckbox>
      <NextUiCheckbox defaultSelected color="success">
        Success
      </NextUiCheckbox>
      <NextUiCheckbox defaultSelected color="warning">
        Warning
      </NextUiCheckbox>
      <NextUiCheckbox defaultSelected color="danger">
        Danger
      </NextUiCheckbox>
    </div>
  );
}
