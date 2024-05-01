import { Button } from "@mui/material";

interface ConfirmationButtonProps {
  onClick: () => void;
  text: string;
  buttonType?: "contained" | "outlined";
  fullWidth?: boolean; // Ajouter la prop fullWidth
}

const ConfirmationButton = ({
  onClick,
  text,
  buttonType = "contained",
  fullWidth = false, // Définir une valeur par défaut pour fullWidth
}: ConfirmationButtonProps) => {
  const colorRedCanal = "#EC3655";
  const colorRedCanalHover = "#EE4A65";
  const colorRedWhite = "#FDE4E6";

  const getButtonStyles = () => {
    switch (buttonType) {
      case "contained":
        return {
          backgroundColor: colorRedCanal,
          color: "white",
          "&:hover": {
            backgroundColor: colorRedCanalHover,
          },
        };
      case "outlined":
        return {
          color: colorRedCanal,
          borderColor: colorRedCanal,
          "&:hover": {
            backgroundColor: colorRedWhite,
            borderColor: colorRedCanal,
          },
        };
      default:
        return {};
    }
  };

  return (
    <Button
      variant={buttonType}
      disableElevation
      size="medium"
      onClick={onClick}
      fullWidth={fullWidth} // Passer la prop fullWidth directement à Button
      sx={{
        width: fullWidth ? "100%" : "auto", // Utiliser la largeur pleine si fullWidth est true
        height: "30px",
        padding: "6px 16px",
        fontWeight: "bold",
        fontStyle: "italic",
        fontSize: ".6rem",
        letterSpacing: "0.5px",
        ...getButtonStyles(),
      }}
    >
      {text}
    </Button>
  );
};

export default ConfirmationButton;
