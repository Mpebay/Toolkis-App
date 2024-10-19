import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import Layout from '../components/Layout.js';
import ProductsList from '../components/ProductsList.js';

export default function HomeScreen() {
    const [footerVisible, setFooterVisible] = useState(false);

    const handleEndReached = () => {
        setFooterVisible(true);
    };

    const handleScroll = (event) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        const contentHeight = event.nativeEvent.contentSize.height;
        const layoutHeight = event.nativeEvent.layoutMeasurement.height;

        if (offsetY + layoutHeight >= contentHeight - 50) {
            setFooterVisible(true);
        } else {
            setFooterVisible(false);
        }
    };

    return (
        <SafeAreaView className="flex-1 bg-gray-200">
            <Layout footerVisible={footerVisible}>
                <ProductsList
                    onScroll={handleScroll}
                    onEndReached={handleEndReached}
                />
            </Layout>
        </SafeAreaView>
    );
}
