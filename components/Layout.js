import { View } from "react-native";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

export default function Layout({ children, footerVisible = true }) {
    return (
        <View className="flex-1 bg-gray-200">
            <Navbar />
            <View className="flex-1">
                {children}
            </View>
            {footerVisible && <Footer />}
        </View>
    );
}
