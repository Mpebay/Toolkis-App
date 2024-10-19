import React, { useState } from "react";
import { FlatList, TextInput, View, Text } from "react-native";
import products from "../products.js";
import ProductCard from "./ProductCard.js";

export default function ProductsList({ onScroll, onEndReached }) {
    const [searchText, setSearchText] = useState("");
    const [notification, setNotification] = useState("");
    const numColumns = 2;

    const filteredProducts = products.filter(product => {
        return (
            product.name.toLowerCase().startsWith(searchText.toLowerCase()) ||
            product.brand.toLowerCase().startsWith(searchText.toLowerCase())
        );
    });

    const showNotification = (message) => {
        setNotification(message);
        setTimeout(() => {
            setNotification("");
        }, 2000);
    };

    return (
        <>
            <View className="w-full flex flex-row bg-gray-200 items-center justify-center">
                <TextInput
                    className="w-3/4 h-10 border-2 border-gray-300 rounded-3xl font-semibold text-lg p-2 mb-2"
                    placeholder="Search"
                    value={searchText}
                    onChangeText={(text) => setSearchText(text)}
                />
            </View>
            {notification ? (
                <View className="bg-[#008B8B] p-2 mb-2 items-center">
                    <Text className="text-white">{notification}</Text>
                </View>
            ) : null}
            <FlatList
                contentContainerStyle={{ paddingBottom: 20 }}
                data={filteredProducts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <ProductCard {...item} showNotification={showNotification} />}
                className="w-full h-full bg-gray-200"
                numColumns={numColumns}
                onEndReached={onEndReached}
                onEndReachedThreshold={0.1}
                onScroll={onScroll}
                scrollEventThrottle={16}
            />
        </>
    );
}
