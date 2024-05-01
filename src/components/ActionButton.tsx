import { MyButton } from "./Button/MyButton";
import { PRIMARY } from "../core/constants/buttonType";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";

const ActionButton = () => {
  return (
    <>
      <MyButton fullWidth={true} buttonType={PRIMARY} startIcon={<PlayArrowIcon />}>
        PLAY
      </MyButton>
      <MyButton buttonType={PRIMARY} startIcon={<AddIcon />}>
        AJOUTER
      </MyButton>
    </>
  );
};

export default ActionButton;
