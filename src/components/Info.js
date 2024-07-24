import { useContext } from "react";
import { InformationContext } from "../contexts/InformationContext";

export const Info = () => {
  const { info } = useContext(InformationContext);

  return (
    <>
      <div>{info.name}</div>
      <div>{info.age}</div>
    </>
  );
};
