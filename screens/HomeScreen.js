import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import Layout from '../components/Layout.js';
import ProductsList from '../components/ProductsList.js';

export default function HomeScreen() {
    const [footerVisible, setFooterVisible] = useState(false); // Estado para controlar el footer

    // Función que se llamará al llegar al final de la lista
    const handleEndReached = () => {
        setFooterVisible(true); // Mostrar el footer
    };

    const handleScroll = (event) => {
        const offsetY = event.nativeEvent.contentOffset.y; // Obtener la posición de desplazamiento
        const contentHeight = event.nativeEvent.contentSize.height; // Obtener la altura total del contenido
        const layoutHeight = event.nativeEvent.layoutMeasurement.height; // Obtener la altura visible

        // Mostrar el footer solo si estamos cerca del final del contenido
        if (offsetY + layoutHeight >= contentHeight - 50) {
            setFooterVisible(true); // Si estamos cerca del final, mostrar el footer
        } else {
            setFooterVisible(false); // Ocultar el footer al desplazarse hacia arriba
        }
    };

    return (
        <SafeAreaView className="flex-1 bg-gray-200">
            <Layout footerVisible={footerVisible}>
                <ProductsList
                    onScroll={handleScroll} // Pasamos el manejador de scroll
                    onEndReached={handleEndReached} // Pasamos el manejador de fin de la lista
                />
            </Layout>
        </SafeAreaView>
    );
}
