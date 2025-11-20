import { Tabs } from "expo-router";
import { View, StyleSheet } from "react-native";
import PortfolioHeader from "../components/PortflioHeader";

export default function TabsLayout() {
    return (
        <View style={styles.container}>
            <PortfolioHeader />

            <Tabs screenOptions={{ headerShown: false }}>
                <Tabs.Screen
                    name="hobbies"
                    options={{ title: "Mis Hobbies" }}
                />
                <Tabs.Screen
                    name="qrcode"
                    options={{ title: "Mi Repositorio" }}
                />
            </Tabs>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
