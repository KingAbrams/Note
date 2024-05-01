import Button from "@mui/material/Button";
import {
  DISABLED,
  INFO,
  OUTLINED,
  PRIMARY,
  SHADED,
} from "../../core/constants/buttonType";

interface MyButtonProps {
  variant?: "text" | "outlined" | "contained";
  size?: "small" | "medium" | "large";
  width?: string;
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  buttonType?: any;
  iconInside?: React.ReactNode;
  children: string;
  fullWidth?: boolean;
  onClick?: () => void;
}

export const MyButton = ({
  variant = "contained",
  size = "medium",
  width = "auto",
  disabled = false,
  startIcon = null,
  endIcon = null,
  buttonType = "default",
  iconInside = null,
  children,
  fullWidth = false, // Définir une valeur par défaut pour fullWidth
  ...restProps
}: MyButtonProps) => {
  const colorRedCanal = "#EC3655";
  const colorRedCanalHover = "#EE4A65";
  const colorRedWhite = "#FDE4E6";
  const colorRedWhiteHover = "#F8D0D3";
  const colorDisabled = "#A6A6A6";
  const boxShadowShaded = "inset 0 0 0 1000px rgba(236, 54, 65, 0.1)";

  const getIconMargin = (iconType: "start" | "end") => {
    switch (iconType) {
      case "start":
        return "2px";
      case "end":
        return "4px";
      default:
        return "4px";
    }
  };

  const getButtonStyles = (type: string) => {
    switch (type) {
      case PRIMARY:
        return {
          backgroundColor: colorRedCanal,
          color: "white",
          "&:hover": {
            backgroundColor: colorRedCanalHover,
          },
        };

      case OUTLINED:
        return {
          color: colorRedCanal,
          borderColor: colorRedCanal,
          "&:hover": {
            backgroundColor: colorRedWhite,
            borderColor: colorRedCanal,
          },
        };

      case SHADED:
        return {
          backgroundColor: colorRedWhite,
          color: colorRedCanal,
          boxShadow: boxShadowShaded,
          "&:hover": {
            backgroundColor: colorRedWhiteHover,
            boxShadow: boxShadowShaded,
          },
        };

      case DISABLED:
        return { backgroundColor: colorRedWhite, color: colorDisabled };

      case INFO:
        return {
          backgroundColor: "#454545",
          color: "white",
          boxShadow: "inset 0 0 0 1000px rgba(36, 36, 36, 0.1)",
          "&:hover": {
            backgroundColor: "#454545",
          },
        };

      case "default":
        return {
          backgroundColor: colorRedCanal,
          color: "white",
          "&:hover": {
            backgroundColor: colorRedCanalHover,
          },
        };
    }
  };

  const buttonStyle = {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: ".7rem",
    letterSpacing: "0.5px",
    width: fullWidth ? "100%" : width,
    color: colorRedCanal,
    borderColor: colorRedCanal,
    ...getButtonStyles(buttonType),
    "& .MuiButton-startIcon": {
      marginRight: getIconMargin("start"),
    },
    "& .MuiButton-endIcon": {
      marginLeft: getIconMargin("end"),
    },
  };

  return (
    <Button
      variant={variant}
      size={size}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={buttonStyle}
      {...restProps}
    >
      {children}
      {iconInside}
    </Button>
  );
};
