import type {FC, ReactNode} from "react";

type HTextProps = {
  children: ReactNode;
};

const HText: FC<HTextProps> = ({ children }) => (
  <h1 className="basis-3/5 font-montserrat text-3xl font-bold">{children}</h1>
);

export default HText;
