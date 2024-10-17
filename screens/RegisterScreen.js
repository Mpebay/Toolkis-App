import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Layout from "../components/Layout.js";

export default function RegisterScreen() {
    const [showPassword, setShowPassword] = useState(false);

    const navigation = useNavigation();
    return (
        <Layout>
            <View className="w-full h-full bg-gray-200">
                <View className="w-full h-1/3 flex flex-col items-center justify-end">
                    <Text className="text-3xl font-bold">Register</Text>
                    <Text className="text-xl font-bold">Please fill out your details to register.</Text>
                </View>
                <View className="w-full h-1/3 flex flex-col items-center justify-start mt-4">
                    <TextInput
                        className="w-3/4 h-10 border-2 border-gray-400 rounded-3xl font-semibold text-lg p-2 mb-2"
                        placeholder="Email"
                    />
                    <View className="w-3/4 flex flex-row items-center border-2 border-gray-400 rounded-3xl mb-2">
                        <TextInput
                            className="flex-1 h-10 font-semibold text-lg p-2"
                            placeholder="Password"
                            secureTextEntry={!showPassword}
                        />
                        <TouchableOpacity className="p-2" onPress={() => setShowPassword(!showPassword)}>
                            <Ionicons
                                name={showPassword ? "eye" : "eye-off"}
                                size={24}
                                color="gray"
                            />
                        </TouchableOpacity>
                    </View>
                    <View className="w-3/4 flex flex-row items-center border-2 border-gray-400 rounded-3xl mb-2">
                        <TextInput
                            className="flex-1 h-10 font-semibold text-lg p-2"
                            placeholder="Confirm Password"
                            secureTextEntry={!showPassword}
                        />
                        <TouchableOpacity className="p-2" onPress={() => setShowPassword(!showPassword)}>
                            <Ionicons
                                name={showPassword ? "eye" : "eye-off"}
                                size={24}
                                color="gray"
                            />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity className="w-3/4 flex flex-row items-center justify-center mt-4">
                        <Text className="text-lg font-bold text-white bg-black rounded-3xl w-3/4 h-10 flex text-center p-1">Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text className="text-center mt-4 font-semibold">Already have an account? Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Layout>
    );
}
