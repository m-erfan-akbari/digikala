import { useEffect } from "react";

export function useBodyOverflow(shouldHideOverflow: boolean) {
  useEffect(() => {
    if (shouldHideOverflow) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [shouldHideOverflow]);
}
