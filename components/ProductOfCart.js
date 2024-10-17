import React from 'react'
import { View, Text, Image } from 'react-native'
import { useState } from 'react'
import AntDesigned from 'react-native-vector-icons/AntDesign'


export default function ProductOfCart({ photo, name, price, count, description }) {

    const [countCart, setCountCart] = useState(1);


    return (
        <View className="w-full h-24 border-2 border-gray-400 rounded-3xl flex flex-col items-center justify-center mt-8">
            <Image source={{ uri: photo }} className="w-20 h-20 rounded-3xl object-cover" />
            <Text>{name}</Text>
            <Text>{description}</Text>
            <View className="flex flex-row items-center justify-center gap-1">
                <AntDesigned name="minuscircleo" size={18} color="black" onPress={() => setCountCart(countCart - 1)} />
                <Text className="text-2xl font-semibold text-black">{count}</Text>
                <AntDesigned name="pluscircleo" size={18} color="black" onPress={() => setCountCart(countCart + 1)} />
            </View>
            <Text>${price * countCart}</Text>
        </View>
    )
}
