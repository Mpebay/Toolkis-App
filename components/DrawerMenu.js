import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import iconClose from '../images/iconClose.png';
import { useNavigation } from '@react-navigation/native';

export default function DrawerMenu({ closeDrawer }) {
    const navigation = useNavigation();

    const handleCloseMenu = () => {
        closeDrawer();
    };

    return (
        <View className="absolute top-12 left-0 w-3/4 h-screen bg-gray-300 z-50 rounded-tr-3xl rounded-br-3xl p-4 shadow-lg">
            <TouchableOpacity className="absolute top-4 right-2" onPress={handleCloseMenu}>
                <Image source={iconClose} className="w-7 h-7" />
            </TouchableOpacity>

            <TouchableOpacity
                className="w-2/3 flex flex-row items-center justify-start pl-2 mt-4"
                onPress={() => {
                    navigation.navigate('Home');
                    handleCloseMenu();
                }}
            >
                <Text className="text-2xl font-semibold">Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
                className="w-2/3 flex flex-row items-center justify-start pl-2 mt-4"
                onPress={() => {
                    navigation.navigate('Login');
                    handleCloseMenu();
                }}>
                <Text className="text-2xl font-semibold">Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
                className="w-2/3 flex flex-row items-center justify-start pl-2 mt-4"
                onPress={() => {
                    navigation.navigate('Register');
                    handleCloseMenu();
                }}>
                <Text className="text-2xl font-semibold">Register</Text>
            </TouchableOpacity>
        </View>
    );
}
