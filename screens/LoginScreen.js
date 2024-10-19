import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useState } from "react";
import Layout from "../components/Layout.js";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { loginSuccess, loginFail, loginStart } from "../redux/reducers/authSlice";


export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigation = useNavigation();
    const dispatch = useDispatch();


    const handleLogin = async () => {
        dispatch(loginStart());
        try {
            const response = await axios.post('http://192.168.0.101:4000/auth/login', { email, password });
            const token = response.data.token;
            await AsyncStorage.setItem('token', token);
            dispatch(loginSuccess({ token, email }));
            Alert.alert('Welcome', `${email}`);
            navigation.navigate('Home');
        } catch (error) {
            dispatch(loginFail(error.message));
            Alert.alert('Error', 'Invalid email or password');
        }
    }
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
                        value={email}
                        onChangeText={setEmail}
                    />
                    <View className="w-3/4 flex flex-row items-center border-2 border-gray-400 rounded-3xl mb-2">
                        <TextInput
                            className="flex-1 h-10 font-semibold text-lg p-2"
                            placeholder="Password"
                            secureTextEntry={!showPassword}
                            value={password}
                            onChangeText={setPassword}
                        />
                        <TouchableOpacity className="p-2" onPress={() => setShowPassword(!showPassword)}>
                            <Ionicons
                                name={showPassword ? "eye" : "eye-off"}
                                size={24}
                                color="gray"
                            />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity className="w-3/4 flex flex-row items-center justify-center mt-4" onPress={handleLogin}>
                        <Text className="text-lg font-bold text-black bg-[#87CEFA] rounded-3xl w-3/4 h-10 flex text-center p-1">Log in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text className="text-center mt-4 font-semibold">Don't have an account? Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Layout>
    );
}
