import { useState } from "react";
import { TextInput } from "react-native-paper";

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RoundedButton } from "../components/RoundedButton";

export const Focus = ({ addSubject }) => {
	const [subject, setSubject] = useState("");

	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInput}
					label="What would you like to focus on?"
					onChangeText={setSubject}
				/>
				<View style={styles.button}>
					<RoundedButton
						title="+"
						size={50}
						style={styles.button}
						onPress={() => addSubject(subject)}
					/>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	button: {
		justifyContent: "center",
	},
	textInput: {
		flex: 1,
		marginRight: 10,
	},
	inputContainer: {
		flexDirection: "row",
		padding: 25,
		justifyContent: "top",
	},
	text: {
		color: "white",
	},
});
