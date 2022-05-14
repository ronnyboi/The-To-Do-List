import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Task = (props) => {
    return(
        <View style={styles.item}>
            {/* <View style={styles.itemCategory}>
                <Text style={styles.categoryText}>{props.category}</Text>
            </View> */}
            <View style={styles.itemLeft}>
                <View style={styles.circle}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.itemPriority}>
                <Text style={styles.itemPriorityText}>High</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    item: {
        padding: 26,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemCategory: {
        width: 84,
        height: 26,
        backgroundColor: '#D2EAFF',
        borderRadius: 20,
        marginRight: 0,
        padding: 3,
        alignItems: 'center',
    },

    categoryText: {
        color: '#707070',
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    circle: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 24,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
        fontSize: 15,
    },
    itemPriority: {
        width: 51,
        height: 24,
        backgroundColor: '#CB0000',
        borderRadius: 20,
        marginRight: 0,
        padding: 2,
        alignItems: 'center',
        
    },
    itemPriorityText: {
        color: '#fff',
    },
});

export default Task; 