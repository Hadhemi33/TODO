import React from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import colors from "../../constants/colors";

const Categories = ({ categories, selectedCategory, onCategoryPress }) => {
  return (
    <FlatList
      horizontal
      data={categories}
      keyExtractor={(item) => String(item)}
      showsHorizontalScrollIndicator={false}
      style={styles.fatlist}
      renderItem={({ item, index }) => {
        const selected = selectedCategory === item;
        const displayName = item?.replace("_", " ");
        let backgroundColor;
        if (index === 0) {
          backgroundColor = colors.yellow;
        } else if (index === 1) {
          backgroundColor = colors.green;
        } else {
          backgroundColor = colors.red;
        }

        return (
          <View>
            <TouchableOpacity
              onPress={() => onCategoryPress(item)}
              style={[
                [styles.itemContainer, { backgroundColor: backgroundColor }],
                //   selected ? styles.selectedItemContainer : {},
                // index === 0 ? { marginLeft: 24 } : {},
              ]}
            >
              <Text style={[styles.item, selected ? styles.selectedItem : {}]}>
                {displayName}
              </Text>
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
};

export default React.memo(Categories);
