import { StyleSheet, Text, View } from 'react-native'
import QRCode from 'react-native-qrcode-svg';

const qrValue = "https://github.com/GabrieelDGM/PGL-Navigation.git";

export default function qrcode() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Codigo QR</Text>

      <View style={styles.qrContainer}>
        <QRCode
          value={qrValue}
          size={250}
          />
          </View>
          <Text style={styles.subtitle}>Escanealo Adri y veras mi repositorio SIIU </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  qrContainer: {
    borderWidth: 2,
    padding: 20,
    borderRadius: 10,
  },
  subtitle: {
    marginTop: 20,
    fontSize: 16,
    color: "#555",
    textAlign: "center",
  },
});

