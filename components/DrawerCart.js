import React from 'react';
import { View, Image, TouchableOpacity, Text, FlatList } from 'react-native';
import iconClose from '../images/iconClose.png';
import iconSad from '../images/iconSad.png';
import { useSelector } from 'react-redux';
import AntDesigned from "react-native-vector-icons/AntDesign";
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions/cartActions.js';
import { useNavigation } from '@react-navigation/native';

export default function DrawerCart({ closeDrawer, }) {
    const cartItems = useSelector((state) => state.cart.cartItems);

    const dispatch = useDispatch();

    const navigation = useNavigation();

    const habdleEmptyCart = () => {
        navigation.navigate('Home');
        closeDrawer();
    }

    const handleCloseCart = () => {
        closeDrawer();
    };
    const handleRemoveItem = (id) => {
        dispatch(removeFromCart(id));

    }
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.count, 0).toFixed(2);
    };

    return (
        <View className="absolute top-12 right-0 w-3/4 h-screen flex flex-col items-center justify-start bg-gray-300 z-50 rounded-tl-3xl rounded-bl-3xl shadow-lg">
            <TouchableOpacity className="absolute top-4 left-2" onPress={handleCloseCart}>
                <Image source={iconClose} className="w-7 h-7" />
            </TouchableOpacity>
            <Text className="text-xl font-semibold py-8">Products of Cart</Text>
            {cartItems.length === 0 ? (
                <View className="flex flex-col items-center justify-around h-5/6">
                    <Text className="text-3xl font-bold">Your cart is empty</Text>
                    <Image source={iconSad} style={{ width: 200, height: 200, resizeMode: 'contain' }} />
                    <TouchableOpacity
                        className="mt-4 bg-black rounded-3xl p-2"
                        onPress={habdleEmptyCart}
                    >
                        <Text className="text-white text-4xl">Add products</Text>
                    </TouchableOpacity>

                </View>
            ) : (
                <>
                    <FlatList
                        data={cartItems}
                        keyExtractor={(item, index) => index.toString()}
                        style={{ width: '90%' }}
                        renderItem={({ item }) => (
                            <View className="w-full flex flex-row items-center justify-between p-2 bg-white rounded-lg mb-4">
                                <Image source={{ uri: item.photo }} style={{ width: 50, height: 50 }} />
                                <TouchableOpacity className="absolute top-1 right-1" onPress={() => handleRemoveItem(item.id)}>
                                    <AntDesigned name="closecircleo" size={20} color="red" />
                                </TouchableOpacity>
                                <Text className="text-md font-bold">{item.name}</Text>
                                <Text className="text-md">
                                    {item.count} X ${item.price}
                                </Text>
                            </View>
                        )}
                    />
                    <View className="w-3/4 flex items-center justify-center mb-16 p-4 bg-white rounded-lg">
                        <Text className="text-2xl font-bold">Total: ${calculateTotal()}</Text>
                    </View>
                </>
            )}
        </View>
    );
}
