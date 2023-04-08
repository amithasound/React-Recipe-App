import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { NativeScreenNavigationContainer } from 'react-native-screens';


export default function ListOfRecipes({ navigation }) {
    
    const recipes = [{recipeName: "Good Old-Fashioned Pancakes", recipeDescription: "I found this pancake recipe in my Grandma's recipe book. Judging from the weathered look of this recipe card, this was a family favorite."},
    {recipeName: "Mango Lime-Bean Salad", recipeDescription: "Everyone loves this so double or triple the recipe! It vanishes in a flash, and also works well as a salsa. It really is our all time favorite summer salad."},
    {recipeName: "Sweet Potato and Shitake Mushroom Lentil Soup", recipeDescription: "This sweet potato soup recipe is one of my favorite healthy comfort foods. Made with veggies, coconut milk, and spices, it's rich, creamy, and delicious."},
    {recipeName: "Chicken Tikka Masala", recipeDescription: "This rich and creamy flavoursome Chicken tikka rivals any Indian restaurant! Why go out when you can make it better at home! "},
    {recipeName: "Lime Mouse", recipeDescription: "With whipped heavy cream flavored with sweetened condensed milk and lime juice, these key lime mousse desserts are like the classic pie made in half the time."},
    {recipeName: "Creamy White Chili", recipeDescription: "I got the best white chicken chili recipe from my sister-in-law, who made a big batch and served a crowd one night. It was a hit. It’s easy and quick, which is helpful since I’m a college student. In all my years of 4-H cooking, I’ve never had another dish get so many compliments. "},
    {recipeName: "Best Ever Banana Bread", recipeDescription: "Whenever I pass a display of bananas in the grocery store, I can almost smell the wonderful aroma of my best banana bread recipe. It really is amazingly good!"},
    {recipeName: "Cheeseburger Soup", recipeDescription: "A local restaurant serves a similar cheeseburger soup but wouldn't share its recipe with me. I developed my own, modifying a recipe I already had for potato soup. I was really pleased with the way this all-American dish turned out. "},
    {recipeName: "Amish Breakfast Casserole", recipeDescription: "We've enjoyed a few hearty breakfast casseroles while visiting an Amish inn. When I asked for a recipe, one of the ladies told me the ingredients right off the top of her head. I modified it to create this quick and easy breakfast casserole my family loves."},
    {recipeName: "Pumpkin Spiced Cupcakes with Cream Cheese Frosting", recipeDescription: "I discovered this wonderful pumpkin cupcake recipe and changed a bit to suit my taste. I love the flavor of pumpkin and the cinnamon makes ordinary cream cheese frosting extra special. When I made a batch for my husband to take to work, he said they disappeared in record time. "}];

   const [listData, setListData] = useState(recipes);      


  return (
    <View style={styles.container}>
            <FlatList
            data={listData}
            extraData={listData}
            renderItem={({item}) => 
                <View style={styles.border}>
                <Button title = {item.recipeName} style={styles.itemName} onPress = {() => {
                    navigation.navigate('Recipe Detail');
                }}/>
                <Text style={styles.itemDesc}>{item.recipeDescription}</Text>
                </View>
            } />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
      paddingBottom: 50,
    },
    itemName: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    itemDesc: {
      padding: 10,
      fontSize: 10,
      height: 44,
    },
      border: {
      borderWidth: 1,
      borderColor: "gray",
    },
});