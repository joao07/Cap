import React,  {useState} from "react";
import { View } from "react-native";
import Contador from "../Components/Contador";

export default function Contador() {
    return(
        <View>
            <Contador inicial = {100}/>
        </View>
    )
}