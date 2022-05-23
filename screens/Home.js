import React, { useState } from "react";
import { View, SafeAreaView, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS, NFTData } from '../constants';
import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";

const Home = () => {
    const [nftData, setNftdata] = useState(NFTData);

    const handleSearch = (value) => {
        if(!value.length) {
            setNftdata(NFTData);
        }

        const filteredData = NFTData.filter((item) =>
            item.name.toLowerCase().includes(value.toLowerCase())
        );

        if(filteredData.length === 0) {
            setNftdata(NFTData);
        } else {
            setNftdata(filteredData);
        }
    };


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar background={COLORS.primary} />

            <View style={{ flex: 1 }}>
                <View style={{ zIndex: 0 }}>
                    <FlatList 
                        data={nftData}
                        renderItem={({item}) => <NFTCard data={item} />}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
                    />
                </View>

                <View 
                    style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    zIndex: 0,
                    }}
                >
                    <View style={{ height: 300, backgroundColor: COLORS.primary}} />
                    <View style={{ height: 300, background: COLORS.white}} />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Home;