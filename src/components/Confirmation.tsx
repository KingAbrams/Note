import { CONTAINED, OUTLINED } from "../core/constants/buttonType";
import ConfirmationButton from "./Button/ConfirmationButton";

const Confirmation = () => {
  const handleClick = (text: string) => {
    console.log(text);
  };
  return (
    <>
      <ConfirmationButton
        onClick={() => handleClick("CONFIRMER")}
        text="CONFIRMER"
        buttonType={CONTAINED}
      />
      <ConfirmationButton
        onClick={() => handleClick("ANNULER")}
        text="ANNULER"
        buttonType={OUTLINED}
      />
    </>
  );
};

export default Confirmation;
