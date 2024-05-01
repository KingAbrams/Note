import { Box } from "@mui/material";
import TypeOfButton from "./components/TypeOfButton";
import ActionButton from "./components/ActionButton";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { INFO, OUTLINED, SHADED } from "./core/constants/buttonType";
import Confirmation from "./components/Confirmation";
import ConfirmationButton from "./components/Button/ConfirmationButton";
import { MyButton } from "./components/Button/MyButton";

const App = () => {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Box
        display={"flex"}
        width={600}
        justifyContent={"center"}
        gap={2}
        sx={{
          margin: "20px auto",
          border: "2px dashed #EC3655",
          padding: "10px",
        }}
      >
        <TypeOfButton />
      </Box>
      <Box
        display={"flex"}
        width={600}
        justifyContent={"center"}
        gap={2}
        sx={{
          margin: "20px auto",
          border: "2px dashed #EC3655",
          padding: "10px",
        }}
      >
        <ActionButton />
      </Box>
      <Box
        display={"flex"}
        width={600}
        justifyContent={"center"}
        gap={2}
        sx={{
          margin: "20px auto",
          border: "2px dashed #EC3655",
          padding: "10px",
        }}
      >
        <Confirmation />
      </Box>
      <Box
        display={"flex"}
        width={600}
        justifyContent={"center"}
        gap={2}
        sx={{
          margin: "20px auto",
          border: "2px dashed #EC3655",
          padding: "10px",
        }}
      >
        <ConfirmationButton
          fullWidth={true}
          onClick={() => console.log("ANNULER")}
          text="ANNULER"
          buttonType={OUTLINED}
        />
      </Box>
      <Box
        display={"flex"}
        width={600}
        justifyContent={"center"}
        gap={2}
        sx={{
          margin: "20px auto",
          border: "2px dashed #EC3655",
          padding: "10px",
        }}
      >
        <MyButton fullWidth onClick={() => console.log("Clicked")}>
          Full Width Button
        </MyButton>
      </Box>
      <Box
        display={"flex"}
        width={600}
        justifyContent={"center"}
        gap={2}
        sx={{
          margin: "20px auto",
          border: "2px dashed #EC3655",
          padding: "10px",
        }}
      >
        <MyButton buttonType={INFO} size="small" startIcon={<InfoOutlinedIcon/>} onClick={() => console.log("Info")}>
          Plus d'info
        </MyButton>
      </Box>
    </Box>
  );
};

export default App;
