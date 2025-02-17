"use client";
import {
  ButtonHTMLAttributes,
  createContext,
  HTMLProps,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import Overlay from "./Overlay";
import { cn } from "@/lib/utils";
import { useClickOutside } from "@/hooks/useClickOutside";
import { ArrowRight, X } from "lucide-react";

type IdType = string | null;

type modalType = {
  openId: IdType;
  handleChange: (id?: string) => void;
};

const ModalContext = createContext<modalType>({
  openId: null,
  handleChange: () => {},
});

export default function Modal({ children }: { children: ReactNode }) {
  const [openId, setOpenId] = useState<IdType>(null);

  function handleChange(id: IdType = null) {
    setOpenId(id);
  }

  return (
    <ModalContext.Provider value={{ openId, handleChange }}>
      {children}
    </ModalContext.Provider>
  );
}

function Trigger({
  id,
  children,
  className,
  onClick = () => {},
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  id: string;
}) {
  const { handleChange } = useContext(ModalContext);

  return (
    <button
      className={cn("", className)}
      onClick={(e) => {
        handleChange(id);
        onClick(e);
      }}
      {...props}
    >
      {children}
    </button>
  );
}

function Container({
  children,
  className,
  id,
  ...props
}: HTMLProps<HTMLDivElement> & { id: string }) {
  const { openId, handleChange } = useContext(ModalContext);

  const ref = useClickOutside<HTMLDivElement>(handleChange);

  useEffect(() => {
    if (openId) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [openId]);

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 top-0 z-20 flex items-center justify-center transition-transform ease-in-out",
        openId === id ? "duration-200" : "scale-0 duration-100",
      )}
    >
      <div
        ref={ref}
        className={cn("rounded-2xl bg-white shadow drop-shadow-md", className)}
        {...props}
      >
        {children}
      </div>
      {openId === id && <Overlay portal />}
    </div>
  );
}

function Header({ children, className, ...props }: HTMLProps<HTMLDivElement>) {
  return (
    <>
      <div
        className={cn("flex items-center justify-between px-5 py-4", className)}
        {...props}
      >
        {children}
      </div>
      <hr className="mx-4 h-[2px] bg-stone-200/80" />
    </>
  );
}

function Title({
  children,
  className,
  ...props
}: HTMLProps<HTMLHeadingElement>) {
  return (
    <h3 className={cn("font-bold text-stone-700", className)} {...props}>
      {children}
    </h3>
  );
}

function Body({ children, className, ...props }: HTMLProps<HTMLDivElement>) {
  return (
    <div className={cn("p-4", className)} {...props}>
      {children}
    </div>
  );
}

function CloseButton() {
  const { handleChange } = useContext(ModalContext);
  return (
    <X className="h-5 w-5 cursor-pointer" onClick={() => handleChange()} />
  );
}

function BackButton() {
  const { handleChange } = useContext(ModalContext);
  return (
    <ArrowRight
      className="h-5 w-5 cursor-pointer justify-self-start"
      onClick={() => handleChange()}
    />
  );
}

Modal.Trigger = Trigger;
Modal.Container = Container;
Modal.Header = Header;
Modal.Title = Title;
Modal.Body = Body;
Modal.CloseButton = CloseButton;
Modal.BackButton = BackButton;
