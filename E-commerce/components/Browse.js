import {React, useState} from "react";
import {View, Text, ScrollView, TouchableOpacity, StyleSheet} from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

const Browse = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedNav, setSelectedNav] = useState("Home")

    const selectCategoryFunction = (category) => {
        setSelectedCategory(category);
    }

    const selectedNavButton = (nav) => {
        setSelectedNav(nav);
    }

    return (
        <View>
            <View style={{marginTop: 25}}>
                <Text style={{marginLeft: 320, marginBottom: 10}}>Cart</Text>
            </View>

            <View>
                <Text>Welcome Customer, Let Us Help You Find Your Desired Product</Text>
            </View>

            <ScrollView style={styles.categories} horizontal>
                <TouchableOpacity style={[styles.category_btn, selectedCategory === "All" ? styles.selectedCategoryBtn : styles.category_btn]} onPress={() => selectCategoryFunction("All")}>
                    <Text style={styles.categoryText}>All</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.category_btn, selectedCategory === "Clothing" ? styles.selectedCategoryBtn : styles.category_btn]} onPress={() => selectCategoryFunction("Clothing")}>
                    <Text style={styles.categoryText}>Clothing</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.category_btn, selectedCategory === "Stationery" ? styles.selectedCategoryBtn : styles.category_btn]} onPress={() => selectCategoryFunction("Stationery")}>
                    <Text style={styles.categoryText}>Stationery</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.category_btn, selectedCategory === "Machinery" ? styles.selectedCategoryBtn : styles.category_btn]} onPress={() => selectCategoryFunction("Machinery")}>
                    <Text style={styles.categoryText}>Machinery</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.category_btn, selectedCategory === "Kitchen_Appliances" ? styles.selectedCategoryBtn : styles.category_btn]} onPress={() => selectCategoryFunction("Kitchen_Appliances")}>
                    <Text style={styles.categoryText}>Kitchen Appliances</Text>
                </TouchableOpacity>
            </ScrollView>

            <ScrollView horizontal >
                <TouchableOpacity style={styles.newReleases}>
                    <Text>Dip Dyed T-Shirts</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.newReleases}>
                    <Text>Wood Cutter</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.newReleases}>
                    <Text>Dual Pack Highlighters</Text>
                </TouchableOpacity>
            </ScrollView>

            <View>
                <Text style={styles.textStyle}>Available Products</Text>

                <ScrollView horizontal >
                    <TouchableOpacity style={styles.product}>
                        <View style={styles.productImage}>
                            <Text>Product Image</Text>
                        </View>

                        <View style={styles.productDescr}>
                        <Text>Custom Black Meme Hoodie</Text>
                        <Text >Contains a github meme on the back of the hoodie</Text>
                        <Text style={styles.textStyle}>R 150</Text>
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.product}>
                        <View style={styles.productImage}>
                            <Text>Product Image</Text>
                        </View>

                        <View style={styles.productDescr}>
                        <Text>Custom Black Meme Hoodie</Text>
                        <Text >Contains a github meme on the back of the hoodie</Text>
                        <Text style={styles.textStyle}>R 150</Text>
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.product}>
                        <View style={styles.productImage}>
                            <Text>Product Image</Text>
                        </View>

                        <View style={styles.productDescr}>
                        <Text>Custom Black Meme Hoodie</Text>
                        <Text >Contains a github meme on the back of the hoodie</Text>
                        <Text style={styles.textStyle}>R 150</Text>
                        </View>
                        

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.product}>
                        <View style={styles.productImage}>
                            <Text>Product Image</Text>
                        </View>

                        <View style={styles.productDescr}>
                        <Text>Custom Black Meme Hoodie</Text>
                        <Text >Contains a github meme on the back of the hoodie</Text>
                        <Text style={styles.textStyle}>R 150</Text>
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.product}>
                        <View style={styles.productImage}>
                            <Text>Product Image</Text>
                        </View>

                        <View style={styles.productDescr}>
                        <Text>Custom Black Meme Hoodie</Text>
                        <Text >Contains a github meme on the back of the hoodie</Text>
                        <Text style={styles.textStyle}>R 150</Text>
                        </View>

                    </TouchableOpacity>
                </ScrollView>
            </View> 

            <Text style={styles.textStyle}>More Products</Text>
            <ScrollView horizontal >

                <TouchableOpacity style={styles.newReleases}>
                    <Text>Dip Dyed T-Shirts</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.newReleases}>
                    <Text>Wood Cutter</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.newReleases}>
                    <Text>Dual Pack Highlighters</Text>
                </TouchableOpacity>
            </ScrollView>
            

            <View style={styles.navBar}>
                <TouchableOpacity style={[styles.navBtn, selectedNav === "Home" ? styles.selected_navBtn : styles.navBtn]} onPress={() => selectedNavButton("Home")}>
                <AntDesign name="home" size={40} color="black" />
                </TouchableOpacity>

                <TouchableOpacity style={[styles.navBtn, selectedNav === "Search" ? styles.selected_navBtn : styles.navBtn]} onPress={() => selectedNavButton("Search")}>
                <Feather name="search" size={40 } color="black" />
                </TouchableOpacity>

                <TouchableOpacity style={[styles.navBtn, selectedNav === "Cart" ? styles.selected_navBtn : styles.navBtn]} onPress={() => selectedNavButton("Cart")}>
                    <Text style={{textAlign: "center", color: "white"}}>Cart</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.navBtn, selectedNav === "Order" ? styles.selected_navBtn : styles.navBtn]} onPress={() => selectedNavButton("Order")}>
                    <Text style={{textAlign: "center", color: "white"}}>Order History</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        marginTop: 25,
        marginLeft: 15,
    },
    categories: {
        flexDirection: "row",
    },
    category_btn: {
        backgroundColor: "grey",
        borderRadius: 15,
        margin: 10,
        padding: 10,
    },
    selectedCategoryBtn: {
        backgroundColor: "rgb(0,0,0)",
        borderRadius: 15,
        margin: 10,
        padding: 10,
    },
    newReleases: {
        width: 250,
        height: 120,
        backgroundColor: "rgba(0,0,0,0.2)",
        padding: 30,
        margin: 10,
    },
    productImage: {
        backgroundColor: "yellow",
        width: 175,
        height: 120,
        padding: 15,
    },
    product: {
        width: 190,
        paddingLeft: 5,
        margin: 10,
        borderWidth: 2,
        borderColor: "black",
        borderStyle: "solid",
    },
    productDescr: {
        paddingLeft: 10,
    },
    textStyle: {
        textAlign: "center",
        fontWeight: "600"
    },

    navBar: {
        backgroundColor: "rgba(0,0,0,0.2)",
        flexDirection: "row",
        marginTop: 40,
    },
    navBtn: {
        marginRight: 30,
        height: 50,
        paddingTop: 10,
        backgroundColor: "rgba(0,0,0,0.2)",
        paddingRight: 10,
        paddingLeft: 10,
    },
    selected_navBtn: {
        marginRight: 30,
        height: 50,
        paddingTop: 10,
        backgroundColor: "rgba(0,0,0,0.5)",
        paddingRight: 10,
        paddingLeft: 10,
    },
    categoryText: {
        color:"white"
    }
})

export default Browse;