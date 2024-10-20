import { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { CustomButton } from "./components/CustomButton";
import { Card } from "./components/Card";
import { Scroll } from "./components/Scroll";
import { cards } from "./data/Cards";
import { Skills } from "./components/Skills";
import { COLORS } from "./styles/Colors";

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const currentColors = isDarkTheme ? COLORS.dark : COLORS.light;

  return (
    <View
      style={[styles.container, { backgroundColor: currentColors.background }]}
    >
      <View
        style={
          styles.topContainer}
      >
        <Text style={[styles.firstTopRow, { color: currentColors.text, backgroundColor: currentColors.rowBackground }]}>
          My Portfolio App
        </Text>
        <View style={styles.buttonContainer}>
          <CustomButton
            onPress={() => setDisplayMyQR(true)}
            title="Mi Info"
            customStyles={{ backgroundColor: currentColors.buttonBackground }}
          />
          <View style={styles.buttonSpacing} />
          <CustomButton
            onPress={() => setDisplayMyQR(false)}
            title="Mi Repo"
            customStyles={{ backgroundColor: currentColors.buttonBackground }}
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
              customStyles={{ backgroundColor: currentColors.cardBackground }}
            />
          ))}
          <ScrollView>
            <Text style={[styles.likesTitle, { color: currentColors.text }]}>
              Cosas que me gustan mucho:
            </Text>
            <Scroll theme={isDarkTheme ? "dark" : "light"} />
            <Skills theme={isDarkTheme ? "dark" : "light"} />
          </ScrollView>
        </View>
      ) : (
        <View style={styles.bodyContainer}>
          <View style={styles.qrContainer}>
            <QRCode value="https://github.com/ori05paz" />
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
    marginTop: 23,
  },
  topContainer: {
    height: "15%",
    paddingTop: 37,
    width: "100%",
  },
  firstTopRow: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 4,
  },
  buttonSpacing: {
    marginHorizontal: 15,
  },
  themeButtonContainer: {
    marginTop: 30,
  },
  bodyContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "85%",
    marginTop: 1,
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
  shadowboxing: {
    backgroundColor: COLORS.light.buttonBackground,
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
