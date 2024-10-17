import React, { useState } from "react";
import { FlatList, TextInput, View } from "react-native";
import products from "../products.js";
import ProductCard from "./ProductCard.js";

export default function ProductsList() {
    const [searchText, setSearchText] = useState("");
    const numColumns = 2;

    const filteredProducts = products.filter(product => {
        return (
            product.name.toLowerCase().startsWith(searchText.toLowerCase()) ||
            product.brand.toLowerCase().startsWith(searchText.toLowerCase())
        );
    });

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
            <FlatList
                contentContainerStyle={{ paddingBottom: 20 }}
                data={filteredProducts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <ProductCard {...item} />}
                className="w-full h-full bg-gray-200"
                numColumns={numColumns}

            />


        </>
    );
}
