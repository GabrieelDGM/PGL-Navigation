import { Tabs } from "expo-router";
import { View, StyleSheet, Image } from "react-native";
import PortfolioHeader from "../components/PortflioHeader";

export default function TabsLayout() {
    return (

        
        <View style={styles.container}>
            <PortfolioHeader />

            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: "#ffffffff",
                        height: 65,
                        paddingBottom: 5,
                    },
                }}
            >
                <Tabs.Screen
                    name="hobbies"
                    options={{
                        title: "Mis Hobbies",
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={require("./image/goku.png")}
                                style={{
                                    width: 28,
                                    height: 28,
                                    tintColor: focused ? "#000000ff" : "#000000ff",
                                }}
                            />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="lista"
                    options={{
                        title: "Lista Anime",
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={require("../image/onepiece.jpg")}
                                style={{
                                    width: 28,
                                    height: 28,
                                    tintColor: focused ? "#000000ff" : "#000000ff",
                                }}
                            />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="qrcode"
                    options={{
                        title: "Mi Repositorio",
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={require("./image/saitama.png")}
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? "#000000ff" : "#000000ff",
                                }}
                            />
                        ),
                    }}
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
