import React from "react";
import {
    View,
    Image,
    Text
} from "react-native"

const Card = ({
    profilePhotoURL,
    fullName,
    age
}) => {
    return (
        <View style={{
            backgroundColor: "#fff",
            borderRadius: 5,
            padding: 15,
            flexDirection: "row"
        }}
        >
            <View style={{
                flex: 1,
                justifyContent: "space-between"
            }}>
                <Text>{fullName}</Text>
                <Text>Yaş :{age}</Text>
            </View>
            <View>
                <Image
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 25
                    }}
                    source={{
                        uri: profilePhotoURL
                    }} />
            </View>
        </View>
    )
}

export default Card;