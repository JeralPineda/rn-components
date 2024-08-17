import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { globalStyles } from "../../../config/theme/theme";
import { Card } from "../../components/ui/Card";
import { CustomView } from "../../components/ui/CustomView";
import { Title } from "../../components/ui/Title";

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <CustomView margin>
      <Title safe text="Text Inputs" />

      <Card>
        <TextInput
          style={globalStyles.input}
          placeholder="Nombre completo"
          autoCapitalize="words"
          autoCorrect={false}
          onChangeText={value => setForm({ ...form, name: value })}
        />
        <TextInput
          style={globalStyles.input}
          placeholder="Correo"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={value => setForm({ ...form, email: value })}
        />
        <TextInput
          style={globalStyles.input}
          placeholder="Telefono"
          keyboardType="phone-pad"
          autoCapitalize="words"
          autoCorrect={false}
          onChangeText={value => setForm({ ...form, phone: value })}
        />
      </Card>

      <View style={{ height: 10 }} />

      <Card>
        <Text>{JSON.stringify(form, null, 2)}</Text>
      </Card>
    </CustomView>
  );
};
