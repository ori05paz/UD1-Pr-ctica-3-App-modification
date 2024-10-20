import { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { CustomButton } from "./components/CustomButton";
import { Card } from "./components/Card";
import { Scroll } from "./components/Scroll";
import { cards } from "./data/Cards";
import { Skills } from "./components/Skills";

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.firstTopRow}>My Portfolio App</Text>
        <View style={styles.buttonContainer}>
          <CustomButton
            onPress={() => setDisplayMyQR(true)}
            title="Mi Info"
            customStyles={styles.shadoxboxing}
          />
          <CustomButton
            onPress={() => setDisplayMyQR(false)}
            title="Mi Repo"
            customStyles={styles.shadoxboxing}
          />
        </View>
      </View>


      {displayMyQR ? (
        <View style={styles.bodyContainer}>
          {cards.map((card, index) => (
            <Card 
              key={index}
              title={card.title} 
              body={card.body} 
              imgSource={card.imgSource} 
            />
          ))}
          <ScrollView>
          <Text style={styles.likesTitle}>Cosas que me gustan mucho:</Text>
          <Scroll />
          <Skills /> 
          </ScrollView>
        </View>
      ) : (
        <View style={styles.bodyContainer}>
          <View style={styles.qrContainer}>
            <QRCode value="https://github.com/adhernea" />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  topContainer: {
    height: "15%",
    paddingTop: 50,
    width: "100%",
  },
  firstTopRow: {
    backgroundColor: "gray",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  bodyContainer: {
    width: "100%",
    alignItems: "center",
    height: "85%",
  },
  likesTitle: {
    color: "black",
    fontWeight: "900",
    textTransform: "capitalize",
    fontSize: 20,
    textAlign: "center",
  },
  qrContainer: {
    justifyContent: "center",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  shadoxboxing: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
});
