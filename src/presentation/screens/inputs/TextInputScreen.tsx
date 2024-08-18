import { useContext, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { globalStyles } from "../../../config/theme/theme";
import { Card } from "../../components/ui/Card";
import { CustomView } from "../../components/ui/CustomView";
import { Title } from "../../components/ui/Title";
import { ThemeContext } from "../../context/ThemeContext";

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const { colors } = useContext(ThemeContext);

  return (
    <KeyboardAvoidingView
      //Componente para hacer scroll al input y ubicarlo sobre el teclado
      behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <ScrollView>
        <CustomView margin>
          <Title safe text="Text Inputs" />
          <Card>
            <TextInput
              style={[
                globalStyles.input,
                { borderColor: colors.borderColor, color: colors.text },
              ]}
              placeholder="Nombre completo"
              autoCapitalize="words"
              placeholderTextColor={colors.text}
              autoCorrect={false}
              onChangeText={value => setForm({ ...form, name: value })}
            />
            <TextInput
              style={[
                globalStyles.input,
                { borderColor: colors.borderColor, color: colors.text },
              ]}
              placeholder="Correo"
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor={colors.text}
              autoCorrect={false}
              onChangeText={value => setForm({ ...form, email: value })}
            />
            <TextInput
              style={[
                globalStyles.input,
                { borderColor: colors.borderColor, color: colors.text },
              ]}
              placeholder="Telefono"
              placeholderTextColor={colors.text}
              keyboardType="phone-pad"
              onChangeText={value => setForm({ ...form, phone: value })}
            />
          </Card>

          <View style={{ height: 10 }} />

          <Card>
            <Text style={{ color: colors.text }}>
              {JSON.stringify(form, null, 2)}
            </Text>
          </Card>
          <Card>
            <Text style={{ color: colors.text }}>
              {JSON.stringify(form, null, 2)}
            </Text>
          </Card>
          <Card>
            <Text style={{ color: colors.text }}>
              {JSON.stringify(form, null, 2)}
            </Text>
          </Card>
          <Card>
            <Text style={{ color: colors.text }}>
              {JSON.stringify(form, null, 2)}
            </Text>
          </Card>
          <Card>
            <Text style={{ color: colors.text }}>
              {JSON.stringify(form, null, 2)}
            </Text>
          </Card>
          <Card>
            <Text style={{ color: colors.text }}>
              {JSON.stringify(form, null, 2)}
            </Text>
          </Card>

          <View style={{ height: 10 }} />

          <Card>
            <TextInput
              style={[
                globalStyles.input,
                { borderColor: colors.borderColor, color: colors.text },
              ]}
              placeholder="Telefono"
              keyboardType="phone-pad"
              onChangeText={value => setForm({ ...form, phone: value })}
            />
          </Card>
          <View style={{ height: 20 }} />
        </CustomView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
