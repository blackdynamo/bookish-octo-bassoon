import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

type Props = {
  active?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  active = false,
  children,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <button
      {...props}
      className={`text-white bg-gray-800 hover:bg-gray-900 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ${active ? "dark:bg-gray-500" : "dark:bg-gray-800"} `}
    >
      {children}
    </button>
  );
};
