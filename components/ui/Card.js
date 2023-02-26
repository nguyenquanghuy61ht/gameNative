import { Dimensions, StyleSheet, View } from "react-native"
import Colors from "../../constants/colors"
import React from "react"
export default function Card({children}) {
  return (
      <View style={styles.card}>
          {children}
      </View>
  )
}
const deviceWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: deviceWidth < 380 ? 18 :36,
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        backgroundColor: Colors.primary700,
        elevation: 4,//tao boxshow android
        shadowColor: 'black',
        //tao showdow tren ios
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    }
})