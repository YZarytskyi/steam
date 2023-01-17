import { useCallback, useEffect, useRef } from "react";

export function useClickOutside<T extends HTMLElement = HTMLElement>(onClose: () => void, isOpen: boolean) {
  const ref = useRef<T>(null);

  const onClickOutside = useCallback(
    (e: MouseEvent) => {
      if (!(ref.current! as any).contains(e.target)) {
        onClose();
      }
    },
    [ref.current]
  );
  useEffect(() => {
    if (!isOpen) return;
    
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [isOpen]);
  return ref;
};
