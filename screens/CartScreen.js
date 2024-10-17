import React from "react";
import { View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";

const CartScreen = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);

    return (
        <View>
            {cartItems.length > 0 ? (
                <FlatList
                    data={cartItems}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => (
                        <View className="flex flex-row items-center justify-between p-4 border-b">
                            <Text className="text-lg">{item.name}</Text>
                            <Text className="text-lg">{item.quantity} x ${item.price}</Text>
                        </View>
                    )}
                />
            ) : (
                <Text>Your cart is empty.</Text>
            )}
        </View>
    );
};

export default CartScreen;
