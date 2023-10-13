import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Button,
} from "react-native";
import styles from "./styles";
import React, { useEffect, useState } from "react";


const URL_API = "https://652670da917d673fd76c444b.mockapi.io/api/SinhVien"

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getSinhVien = async () => {
    try {
      const response = await fetch(URL_API);

      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSinhVien();
  }, []);

  var onClickItem = (item) => {
    alert(item.title)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 20 }}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <View>

            <Button title="Them SV" onPress={() => {

              let newSV = {
                MaSV: 'PH20122',
                TenSV: 'Le Minh Anh',
                AnhDaiDien: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/723.jpg',
                DiemTB: 9.5
              };

              fetch(URL_API, {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(newSV),
              })
                .then((response) => {
                  console.log(response.json())
                  getSinhVien()

                });
            }} />
            <FlatList
              data={data}
              // keyExtractor={({id}) => id}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => {
                  alert(item.TenSV)
                }} >
                  <View style={styles.itemContainer}>
                    <Image style={styles.image} source={{ uri: item.AnhDaiDien }} />
                    <View style={styles.textContainer}>
                      <Text style={styles.idText}>{item.MaSV}</Text>
                      <Text style={styles.titleText}>{item.TenSV}</Text>
                      <Text style={styles.titleText}>{item.DiemTB}</Text>
                    </View>
                  </View>

                </TouchableOpacity>
              )}
            />


          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default App;
