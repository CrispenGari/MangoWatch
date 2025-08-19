import { ScrollView, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "@/src/constants";
import Card from "@/src/components/Card/Card";
import Button from "@/src/components/Button/Button";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import RecentPredictions from "@/src/components/RecentPredictions/RecentPredictions";
import DailyTip from "@/src/components/DailyTip/DailyTip";
const Home = () => {
  const router = useRouter();

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: COLORS.main,
      }}
      contentContainerStyle={{
        paddingBottom: 300,
        padding: 10,
        gap: 10,
      }}
      showsVerticalScrollIndicator={false}
      bounces
    >
      <DailyTip />
      <Card
        style={{
          backgroundColor: COLORS.white,
          width: "100%",
          maxWidth: 500,
          alignSelf: "center",
          shadowOffset: { width: 2, height: 2 },
          elevation: 1,
          shadowColor: COLORS.tertiary,
          shadowOpacity: 0.35,
          shadowRadius: 2,
          padding: 20,
          gap: 20,
        }}
      >
        <View>
          <Text
            style={{
              fontFamily: FONTS.bold,
              fontSize: 25,
            }}
          >
            Mango Fruit Disease Detection
          </Text>
          <Text
            style={{
              fontFamily: FONTS.regular,
              color: COLORS.gray,
            }}
          >
            Upload or capture a mango fruit image, and we'll analyze it for
            possible disease detection using advanced AI models. Get fast,
            reliable results to support better decisions.
          </Text>
        </View>

        <Button
          title="Start Detection"
          Icon={
            <Ionicons name="camera-outline" size={24} color={COLORS.white} />
          }
          titleStyle={{
            color: COLORS.white,
            marginLeft: 10,
          }}
          style={{
            backgroundColor: COLORS.tertiary,
            width: "100%",
          }}
          onPress={() => {
            router.navigate({
              pathname: "/(common)/predict",
            });
          }}
        />
      </Card>
      <RecentPredictions />
    </ScrollView>
  );
};

export default Home;
