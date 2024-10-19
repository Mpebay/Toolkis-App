import React from 'react';
import { View, Image, TouchableOpacity, Text, FlatList, Animated, Alert } from 'react-native';
import iconClose from '../images/iconClose.png';
import iconSad from '../images/iconSad.png';
import { useSelector } from 'react-redux';
import AntDesigned from "react-native-vector-icons/AntDesign";
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions/cartActions.js';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function DrawerCart({ closeDrawer, }) {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const translateX = useRef(new Animated.Value(300)).current;

    useEffect(() => {
        Animated.timing(translateX, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [translateX]);
    const handleCloseCart = () => {
        Animated.timing(translateX, {
            toValue: 300,
            duration: 300,
            useNativeDriver: true,
        }).start(() => {
            closeDrawer();
        });
    }
    const habdleEmptyCart = () => {
        navigation.navigate('Home');
        closeDrawer();
    }

    const handleRemoveItem = (id) => {
        dispatch(removeFromCart(id));

    }
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.count, 0).toFixed(2);
    };

    const handleProceedToPayment = async () => {
        const token = await AsyncStorage.getItem('token');
        if (!token) {
            // Si no hay token, redirigir a la pantalla de login
            Alert.alert('You need to be logged in to proceed to payment');
            navigation.navigate('Login'); // Redirigir a la pantalla de Login
        } else {
            // Si el usuario está logueado, proceder con el pago
            // Asume que tienes una pantalla de pago
        }
    };

    return (
        <Animated.View style={{ transform: [{ translateX }] }} className="absolute top-12 right-0 w-3/4 h-[90%] flex flex-col items-center justify-start bg-gray-300 z-50 rounded-tl-3xl rounded-bl-3xl shadow-lg">
            <TouchableOpacity className="absolute top-4 left-2" onPress={handleCloseCart}>
                <Image source={iconClose} className="w-7 h-7" />
            </TouchableOpacity>
            <Text className="text-xl font-semibold pt-8">Products of Cart</Text>
            {cartItems.length === 0 ? (
                <View className="flex flex-col items-center justify-around h-5/6">
                    <Text className="text-3xl font-bold">Your cart is empty</Text>
                    <Image source={iconSad} style={{ width: 200, height: 200, resizeMode: 'contain' }} />
                    <TouchableOpacity
                        className="mt-4 rounded-3xl"
                        onPress={habdleEmptyCart}
                    >
                        <Text className="text-white bg-[#008B8B] rounded-full p-2 text-3xl">Add products</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <>
                    <View className="w-full h-[90%] flex flex-col items-center justify-around">
                        <FlatList
                            data={cartItems}
                            keyExtractor={(item, index) => index.toString()}
                            style={{ width: '90%', maxHeight: '75%' }}
                            renderItem={({ item }) => (
                                <View className="w-full flex flex-row items-center justify-between p-2 mt-2 bg-white rounded-lg">
                                    <Image source={{ uri: item.photo }} style={{ width: 50, height: 50 }} />
                                    <TouchableOpacity className="absolute top-1 right-1" onPress={() => handleRemoveItem(item.id)}>
                                        <AntDesigned name="delete" size={18} color="black" />
                                    </TouchableOpacity>
                                    <Text className="text-md font-bold">{item.name}</Text>
                                    <Text className="text-md">
                                        {item.count} X ${item.price}
                                    </Text>
                                </View>
                            )
                            }
                        />
                        < View className="w-3/4 flex items-center justify-center bg-white rounded-lg p-2" >
                            <Text className="text-2xl font-semibold">Total: ${calculateTotal()}</Text>
                        </View >
                        <TouchableOpacity className="w-5/6 flex items-center justify-center bg-[#87CEFA] rounded-3xl" onPress={handleProceedToPayment}>
                            <Text className=" text-black text-2xl font-bold p-1">Proceed to payment</Text>
                        </TouchableOpacity>
                    </View >
                </>
            )}
        </ Animated.View>
    );
}
