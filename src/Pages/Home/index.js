import React, {
    useEffect,
    useState
} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

import Card from '../../Components/Card'

export default Home = ({ navigation }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://nibgat.space:6868/members", {
            method: "GET"
        })
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setData(res);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);
    console.log("Log :", data)

    return (
        <View style={{ flex: 1, justifyContent: 'space-between', backgroundColor: "#e3e3e3", padding: 20 }}>
            <Text style={{
                marginBottom: 15,
                fontSize: 25,
                color: "#333",
                fontWeight: "500",

            }}>
                Home Screen
            </Text>
            <ScrollView>
                {data.map((item) => {
                    console.log(item.id);
                    return (
                        <TouchableOpacity style={{
                            margin: 10,
                            marginBottom: 15
                        }}
                            onPress={() => {
                                navigation.navigate('ProfileDetails', { id: item.id })
                            }}>
                            <Card
                                {...item}
                            >
                            </Card>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>


            <TouchableOpacity
                style={{
                    backgroundColor: "#1e90ff",
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 5,
                }}
                onPress={() => {
                    navigation.navigate('ProfileDetails')
                }}
            >
                <Text style={{
                    color: "#fff",
                    fontSize: 18
                }}> Hakkında Sayfasına git
                </Text>
            </TouchableOpacity>

        </View>
    );
}