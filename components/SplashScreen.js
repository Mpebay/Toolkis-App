import React, { useEffect, useRef } from "react";
import { View, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SplashScreen() {
    const navigation = useNavigation();
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const translateY = useRef(new Animated.Value(50)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
            }),
            Animated.timing(translateY, {
                toValue: 0,
                duration: 2000,
                useNativeDriver: true,
            }),
        ]).start();

        const timer = setTimeout(() => {
            navigation.navigate('Home');
        }, 3000);

        return () => clearTimeout(timer);
    }, [fadeAnim, translateY, navigation]);

    return (
        <View className="flex flex-row w-full h-screen items-center bg-gray-200 justify-center">
            <Animated.Text
                style={{
                    opacity: fadeAnim,
                    transform: [{ translateY }]
                }}
                className="text-6xl font-bold text-[#eea221] mt-8">
                T
            </Animated.Text>
            <Animated.Text
                style={{
                    opacity: fadeAnim,
                    transform: [{ translateY }]
                }}
                className="text-6xl font-bold text-black mt-8">
                oolki
            </Animated.Text>
            <Animated.Text
                style={{
                    opacity: fadeAnim,
                    transform: [{ translateY }]
                }}
                className="text-6xl font-bold text-[#eea221] mt-8">
                S
            </Animated.Text>
        </View>
    );
}
