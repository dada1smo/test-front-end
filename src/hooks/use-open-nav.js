import { useState, useCallback } from "react";

export function useOpenNav(initialState) {
  const [isNavOpen, setNavOpen] = useState(initialState);

  // put [setIsToggled] into the useCallback's dependencies array
  // this value never changes so the callback is not going to be ever re-created
  const openNav = useCallback(
    () => setNavOpen((state) => !state),
    [setNavOpen]
  );

  return [isNavOpen, openNav];
}
