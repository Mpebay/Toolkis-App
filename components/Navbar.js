import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import iconMenu from '../images/iconMenu.png';
import DrawerMenu from './DrawerMenu.js';
import DrawerCart from './DrawerCart.js';
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const [showCart, setShowCart] = useState(false);

    const toggleMenu = () => {
        if (showCart) setShowCart(false);
        setShowMenu(!showMenu);
    };

    const toggleCart = () => {
        if (showMenu) setShowMenu(false);
        setShowCart(!showCart);
    };

    return (
        <>
            <View className="flex w-full items-center bg-gray-200 justify-between mt-2">
                <TouchableOpacity
                    className="absolute top-12 left-2"
                    onPress={toggleMenu}
                    accessibilityLabel="Open Menu"
                >
                    <Image source={iconMenu} className="w-10 h-10" />
                </TouchableOpacity>
                <Text className="text-6xl font-bold text-black mt-8">Toolkis</Text>
                <TouchableOpacity
                    className="absolute top-12 right-4"
                    onPress={toggleCart}
                    accessibilityLabel="Open Cart"
                >
                    <Ionicons name="cart-outline" size={30} color="black" />
                </TouchableOpacity>
            </View>
            {showMenu && (<DrawerMenu closeDrawer={toggleMenu} />)}
            {showCart && (<DrawerCart closeDrawer={toggleCart} />)}
        </>
    );
}
