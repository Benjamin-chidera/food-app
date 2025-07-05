import CartBtn from "@/components/cartBtn";
import { images, offers } from "@/constants";
import { Fragment } from "react";
import {
  FlatList,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-between flex-row w-full my-5 px-5">
        <View className="flex-start">
          <Text className="small-bold text-primary">DELIVER TO</Text>
          <TouchableOpacity className="flex-center flex-row gap-x-1 mt-0.5">
            <Text className="paragraph-bold text-white">Scotland</Text>
            <Image
              source={images.arrowDown}
              className=" size-4 bg-white rounded-full p-1"
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <CartBtn />
      </View>

      <FlatList
        data={offers}
        keyExtractor={(offer) => offer.id.toString()}
        renderItem={({ item, index }) => {
          const isEven = index % 2 === 0;

          return (
            <View>
              <Pressable
                className={`offer-card ${isEven ? "flex-row-reverse" : "flex-row"}`}
                style={{ backgroundColor: item.color }}
                android_ripple={{ color: "#fffff22" }}
              >
                {({ pressed }) => (
                  <Fragment>
                    <View className={"h-full w-1/2"}>
                      <Image
                        source={item.image}
                        className={"size-full"}
                        resizeMode={"contain"}
                      />
                    </View>

                    <View
                      className="
                      offer-card__info
               px-3
                   "
                    >
                      <Text className="h1-bold text-white leading-tight">
                        {item.title}
                      </Text>

                      <Image
                        source={images.arrowRight}
                        className="size-10"
                        resizeMode="contain"
                        tintColor="#ffffff"
                      />
                    </View>
                  </Fragment>
                )}
              </Pressable>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        contentContainerClassName=" pb-28 px-5"

        // this is for the header component
        // ListHeaderComponent={() => (
        //   <View className="flex-between flex-row w-full my-5">
        //     <View className="flex-start">
        //       <Text className="small-bold text-primary">DELIVER TO</Text>
        //       <TouchableOpacity className="flex-center flex-row gap-x-1 mt-0.5">
        //         <Text className="paragraph-bold text-white">Scotland</Text>
        //         <Image
        //           source={images.arrowDown}
        //           className=" size-4 bg-white rounded-full p-1"
        //           resizeMode="contain"
        //         />
        //       </TouchableOpacity>
        //     </View>

        // {/* <CartBtn/> */}
        //   </View>
        // )}
      />
    </SafeAreaView>
  );
}
