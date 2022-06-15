import React from "react";

import { View, Text, StyleSheet, FlatList } from "react-native";

export const FocusHistory = ({ history }) => {
	if (!history || !history.length)
		return <Text style={styles.title}>There is nothing to focus yet</Text>;

	const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

	return (
		<View style={styles.container}>
			<Text style={styles.title}>You're focusing on:</Text>
			<FlatList data={history} renderItem={renderItem} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 16,
		flex: 1,
	},
	item: {
		color: "white",
		fontSize: 18,
		paddingTop: 8,
	},
	title: {
		color: "white",
		fontSize: 24,
		textAlign: "center",
		padding: 16,
		fontWeight: "bold",
	},
});
