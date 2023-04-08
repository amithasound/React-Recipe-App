import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { NativeScreenNavigationContainer } from 'react-native-screens';

export default function RecipeDescription({ route, navigation }) {
  
  return (
    <ScrollView>
      <Image
          source={{
            uri: 'https://www.allrecipes.com/thmb/XUxAXBMsoGtslJpRMgYeqQBjTZw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/21014-Good-old-Fashioned-Pancakes-mfs_001-1fa26bcdedc345f182537d95b6cf92d8.jpg',
          }}
          style={{ width: 450, height: 300 }}
        />
        <Text style = {styles.header}>Ingredients</Text>
        <Text style = {styles.text}>1 1/2 cup flour</Text>
        <Text style = {styles.text}>3 1/2 teaspoons baking powder</Text>
        <Text style = {styles.text}>1 tablespoon sugar</Text>
        <Text style = {styles.text}>pinch salt</Text>
        <Text style = {styles.text}>1 1/4 cup milk</Text>
        <Text style = {styles.text}>3 tablespoons butter</Text>
        <Text style = {styles.text}>1 egg</Text>
        <Text style = {styles.header}>Directions:</Text>
        <Text style = {styles.subheader}>Step 1</Text>
        <Text style = {styles.text}>
          Sift flour, baking powder, sugar, and salt
          together in a large bowl. Make a well in the center 
          and add milk, melted butter, and egg; 
          mix until smooth.
        </Text>
        <Text style = {styles.subheader}>Step 2</Text>
        <Text style = {styles.text}>
          Heat a lightly oiled griddle or pan over medium-high 
          heat. Pour or scoop the batter onto the griddle, using approximately 1/4
          cup for wach pancake; cook until bubbles form and the edges are
          golden brown. Flip and cook for another 30 seconds.
        </Text>
    </ScrollView>    
   
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  subheader: {
    padding: 10,
    fontSize: 14,
    height: 33,
  },
  text: {
    padding: 10,
    fontSize: 10
  }
});



