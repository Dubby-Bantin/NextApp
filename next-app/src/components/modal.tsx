"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, MouseEventHandler } from "react";

const Modal = ({ children }: { children: React.ReactNode }) => {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDissMiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      (e.target === overlay.current || e.target === wrapper.current) &&
        onDissMiss();
    },
    [onDissMiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      e.key === "Escape" && onDissMiss();
    },
    [onDissMiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <div
      ref={overlay}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 p-10"
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-10/12 md:w-8/12 lg:w-2/5 p-6"
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
