import { Drawer } from "expo-router/drawer";


export default function Layout() {
    return (
        <Drawer
            screenOptions={{
                headerShown: true,
            }}
        >

            <Drawer.Screen
                name="portada/portada"
                options={{ title: "Portada" }}
            />


            <Drawer.Screen
                name="tabs"
                options={{ title: "Portfolio" }}
            />
        </Drawer>
    );
}
