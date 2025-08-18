import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  StyleSheet,
  Alert
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useCart } from './CartContext';
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { themeColors } from "../theme";
import { cartItems } from "../Products/Fruit";
import FruitCardCart from "../components/fruitCardCart";
import {Ionicons} from 'react-native-vector-icons';
const CartScreen =({navigation})=>{
  const { cartItems, dispatch } = useCart();
    const handleRemoveFromCart = (itemId) => {
        dispatch({ type: 'REMOVE_FROM_CART', itemId });
    };

    const handleIncreaseQuantity = (itemId) => {
        const updatedCart = cartItems.map((item) => {
            if (item.product_id === itemId) {
            return { ...item, quantity: item.quantity + 1 };
            }
            return item;
    });

    dispatch({ type: 'UPDATE_CART', updatedCart });
    };
    
    const handleDecreaseQuantity = (itemId) => {
        const updatedCart = cartItems.map((item) => {
            if (item.product_id === itemId && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
    
    dispatch({ type: 'UPDATE_CART', updatedCart });
    };

    const handPayment = () =>{
        const total = calculateTotalPrice();
        Alert.alert('Thông báo',`Thanh toán thành công. Tổng tiền: ${total} VNĐ`,[{Text: 'OK'}])
        dispatch({type: 'CLEAR'});
        navigation.navigate("home")
    }

    const calculateTotalPrice = () => {
        let total = 0;
        for (const item of cartItems) {
            total += item.price * item.quantity;
        }
    return total;
    };

    const renderMenuItem = ({ item }) => {
        return (
            <View style={styles.cartItem}>
            <Image source={{ uri: item.image_url }} style={styles.itemImage} />
            <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>{item.price} VNĐ</Text>
            </View>
            <View style={styles.quantityContainer}>
                <TouchableOpacity style={styles.remove} onPress={() => handleDecreaseQuantity(item.product_id)}>
                <Ionicons name="remove" size={25} color="black" />
                </TouchableOpacity>
                <Text style={styles.quantityText}>{item.quantity}</Text>
                <TouchableOpacity style={styles.add} onPress={() => handleIncreaseQuantity(item.product_id)}>
                <Ionicons name="add" size={25} color="black" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={{padding:10}} onPress={() => handleRemoveFromCart(item.product_id)}>
                <Ionicons name="trash-bin" size={25} color="red" />
            </TouchableOpacity>
            </View>
        );
    };
  return (
    <SafeAreaView className="flex-1 flex justify-between bg-orange-50">
      <ScrollView>
        <View className="mx-5 flex-1">
          <Text style={{ color: themeColors.text }} className="text-2xl py-10">
            Giỏ hàng <Text className="font-bold"> của bạn </Text>
          </Text>
          {/* <View>
            {cartItems.map((fruit, index) => (
              <FruitCardCart fruit={fruit} key={index} />
            ))}
          </View> */}
            <FlatList
                data={cartItems}
                renderItem={renderMenuItem}
                keyExtractor={(item) => item.product_id}
            />
          <View className="flex-row justify-end py-6 pb-9">
            <Text className="text-lg">
              Hóa đơn : {calculateTotalPrice()} VNĐ <Text className="font-bold text-yellow-400"></Text>
            </Text>
          </View>
          <View className="flex-row justify-center mx-7 mt-3">
            <TouchableOpacity
              onPress={handPayment}
              style={{
                backgroundColor: "orange",
                opacity: 0.8,
                shadowColor: "orange",
                shadowRadius: 25,
                shadowOffset: { width: 0, height: 15 },
                shadowOpacity: 0.4,
              }}
              className="p-3 flex-1 rounded-xl"

            >
              <Text className="text-xl text-center text-white font-bold">
                Thanh Toán
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default CartScreen;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 16,
      paddingTop: 60,
      // backgroundColor: '#e6f0ed',
  },
  cartTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
  },
  cartItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
      padding:10,
      borderRadius:10,
      backgroundColor:'white',
  },
  itemImage: {
      width: 80,
      height: 80,
      borderRadius: 10,
  },
  itemDetails: {
      flex: 1,
      marginLeft: 10,
  },
  itemName: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
      color: '#4CAF50',
  },
  itemPrice: {
      fontSize: 14,
      color: '#E91E63',
      fontWeight: 'bold',
  },
  quantityContainer: {
      borderWidth:1,
      flexDirection: 'row',
      alignItems: 'center',
  },
  remove:{
      borderRightWidth:1,
  },
  add:{
      borderLeftWidth:1,
  },
  quantityText: {
      fontSize: 16,
      marginHorizontal: 15,
  },
  totalPrice: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10,
  },
  checkoutButton: {
      backgroundColor: '#85d143',
      padding: 10,
      alignItems: 'center',
      borderRadius: 5,
  },
  checkoutButtonText: {
      color: 'white',
  },
});