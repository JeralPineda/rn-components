import { Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { globalStyles } from "../../../config/theme/theme";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

interface TitleProps {
  text: string;
  safe?: boolean;
  white?: boolean;
}

export const Title = ({ text, safe = false, white = false }: TitleProps) => {
  const { top } = useSafeAreaInsets();
  const { colors } = useContext(ThemeContext);

  return (
    <Text
      style={{
        ...globalStyles.title,
        marginTop: safe ? top : 0,
        marginBottom: 10,
        color: white ? "white" : colors.text,
      }}>
      {text}
    </Text>
  );
};
