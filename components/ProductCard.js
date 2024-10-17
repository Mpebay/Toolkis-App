import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import AntDesigned from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions.js";

const ProductCard = React.memo(({ photo, name, price, brand, description, id }) => {
    const [count, setCount] = useState(1);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart({ photo, name, price, brand, description, id }, count));
        setCount(1);
    };

    return (
        <View className="flex flex-col bg-white items-center justify-center p-3 rounded-3xl m-2" style={{ width: "46%", height: 300 }}>
            <TouchableOpacity onPress={() => navigation.navigate("ProductDetail", { photo, name, price, brand, description })}>
                <Image source={{ uri: photo }} width={150} height={150} resizeMode="contain" className="h-24 object-contain rounded-3xl" />
                <Text className="text-xl font-bold text-black" numberOfLines={1}>{name}</Text>
            </TouchableOpacity>
            <Text className="text-md text-black font-semibold" numberOfLines={1}>{brand}</Text>
            <View className="w-full flex flex-row items-center justify-between">
                <View className="flex flex-row items-center justify-center gap-1">
                    <AntDesigned name="minuscircleo" size={18} color="black" onPress={() => count > 1 && setCount(count - 1)} />
                    <Text className="text-2xl font-semibold text-black">{count}</Text>
                    <AntDesigned name="pluscircleo" size={18} color="black" onPress={() => setCount(count + 1)} />
                </View>
                <Text className="text-3xl font-semibold text-black">${price}</Text>
            </View>
            <Text className="text-sm text-black/70" numberOfLines={2}>{description}</Text>
            <TouchableOpacity
                className="w-full flex flex-row items-center justify-center mt-4"
                onPress={handleAddToCart}
            >
                <Text className="text-lg font-bold text-white bg-black rounded-3xl w-3/4 h-10 flex text-center p-1">Add to cart</Text>
            </TouchableOpacity>
        </View>
    );
});

export default ProductCard;
