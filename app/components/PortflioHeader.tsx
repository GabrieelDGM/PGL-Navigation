import { View, Text, Image, StyleSheet } from "react-native";

export default function PortfolioHeader() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={require("../components/image/luffy.png")} 
      />

      <View style={styles.infoContainer}>
        <Text style={styles.title}>Sobre mí</Text>
        <Text style={styles.description}>
          Soy estudiante de desarrollo de aplicaciones multiplataforma,
          no se me da muy bien pero estoy aprendiendo y esforzandome cada dia para sacarlo adelante,
          tambien me gusta mucho los deportes,los animes, viajar etc.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: "#f2f2f2",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 100,
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
  },
  title: {
    fontWeight: "700",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 6,
  },
  description: {
    color: "#444",
  },
});
