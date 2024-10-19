import React from 'react';
import { Text, TouchableOpacity, Image, Animated, Alert } from 'react-native';
import iconClose from '../images/iconClose.png';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/reducers/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DrawerMenu({ closeDrawer }) {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const translateX = useRef(new Animated.Value(-300)).current;
    const { token } = useSelector(state => state.auth);

    useEffect(() => {
        Animated.timing(translateX, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [translateX]);

    const handleCloseMenu = () => {
        Animated.timing(translateX, {
            toValue: -300,
            duration: 300,
            useNativeDriver: true,
        }).start(() => {
            closeDrawer();
        });
    };

    const handleLogout = async () => {
        await AsyncStorage.removeItem('token');
        dispatch(logout());
        Alert.alert('Logout successful');
        handleCloseMenu();
        navigation.navigate('Home');
    };

    return (
        <Animated.View style={{ transform: [{ translateX }] }} className="absolute top-12 left-0 w-3/4 h-[90%] bg-gray-300 z-50 rounded-tr-3xl rounded-br-3xl p-4 shadow-lg">
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
            {!token && (
                <>
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
                </>
            )}
            {token && (
                <TouchableOpacity
                    className="w-2/3 flex flex-row items-center justify-start pl-2 mt-4"
                    onPress={() => {
                        handleLogout();
                    }}>
                    <Text className="text-2xl font-semibold">Logout</Text>
                </TouchableOpacity>
            )}
        </Animated.View>
    );
}
