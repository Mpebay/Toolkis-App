import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import Layout from "../components/Layout.js";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function LoginScreen() {
    const [showPassword, setShowPassword] = useState(false);

    const navigation = useNavigation();
    return (
        <Layout>
            <View className="w-full h-full bg-gray-200">
                <View className="w-full h-1/3 flex flex-col items-center justify-end">
                    <Text className="text-3xl font-bold">Welcome back!</Text>
                    <Text className="text-xl font-bold">Please fill out your details to log in.</Text>
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

                    <TouchableOpacity className="w-3/4 flex flex-row items-center justify-center mt-4">
                        <Text className="text-lg font-bold text-white bg-black rounded-3xl w-3/4 h-10 flex text-center p-1">Log in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text className="text-center mt-4 font-semibold">Don't have an account? Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Layout>
    );
}
