import {
  DISABLED,
  OUTLINED,
  PRIMARY,
  SHADED,
} from "../core/constants/buttonType";
import { MyButton } from "./Button/MyButton";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const TypeOfButton = () => {
  return (
    <>
      <MyButton buttonType={PRIMARY} startIcon={<CheckCircleOutlineIcon />}>
        APPLIQUER
      </MyButton>
      <MyButton
        variant={OUTLINED}
        buttonType={OUTLINED}
        endIcon={<CheckCircleOutlineIcon />}
      >
        APPLIQUER
      </MyButton>

      <MyButton buttonType={SHADED} endIcon={<CheckCircleOutlineIcon />}>
        APPLIQUER
      </MyButton>

      <MyButton
        buttonType={DISABLED}
        disabled
        endIcon={<CheckCircleOutlineIcon />}
      >
        APPLIQUER
      </MyButton>
    </>
  );
};

export default TypeOfButton;
