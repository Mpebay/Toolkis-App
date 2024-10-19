import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useRoute } from '@react-navigation/native';
import Layout from './Layout';
import { addToCart } from '../redux/actions/cartActions';
import { useDispatch } from 'react-redux';

const ProductDetail = () => {
    const route = useRoute();
    const { photo, name, price, brand, description, id } = route.params;
    const [count, setCount] = useState(1);
    const dispatch = useDispatch();


    const handleAddToCart = () => {
        dispatch(addToCart({ photo, name, price, brand, description, id }, count));
        setCount(1);
    };

    return (
        <Layout>
            <ScrollView className="flex px-4 bg-gray-100 w-full h-full">
                <Image source={{ uri: photo }} width={300} height={300} resizeMode="contain" className=" w-full rounded-3xl" />
                <Text className="text-3xl font-bold text-black mt-4">{name}</Text>
                <Text className="text-lg text-gray-600">{brand}</Text>
                <Text className="text-2xl text-green-600 font-bold mt-2">${price}</Text>
                <Text className="mt-4 text-md text-black">{description}</Text>
                <View className="flex flex-row items-center justify-center mt-6">
                    <AntDesign
                        name="minuscircleo"
                        size={24}
                        color="black"
                        onPress={() => count > 1 && setCount(count - 1)}
                    />
                    <Text className="text-2xl font-semibold text-black mx-4">{count}</Text>
                    <AntDesign
                        name="pluscircleo"
                        size={24}
                        color="black"
                        onPress={() => setCount(count + 1)}
                    />
                </View>
                <TouchableOpacity onPress={() => { handleAddToCart() }}
                    className="w-full flex flex-row items-center justify-center mt-6">
                    <Text className="text-lg font-bold text-white bg-black rounded-3xl w-3/4 h-10 text-center p-1 mb-2">
                        Add to Cart
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </Layout>
    );
};

export default ProductDetail;
