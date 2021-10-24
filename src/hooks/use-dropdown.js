import { useState, useCallback } from "react";

export function useDropdown(initialState) {
  const [isDropdown, setDropdown] = useState(initialState);

  // put [setIsToggled] into the useCallback's dependencies array
  // this value never changes so the callback is not going to be ever re-created
  const openDropdown = useCallback(
    () => setDropdown((state) => !state),
    [setDropdown]
  );

  return [isDropdown, openDropdown];
}
