import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";

import { Focus } from "./src/features/Focus";
import { Timer } from "./src/features/Timer";

export default function App() {
	const [currentSubject, setCurrentSubject] = useState("");
	return (
		<SafeAreaView style={styles.container}>
			{!currentSubject ? (
				<Focus addSubject={setCurrentSubject} />
			) : (
				<Timer
					focusSubject={currentSubject}
					onTimerEnd={() => {}}
					clearSubject={() => setCurrentSubject(null)}
				/>
			)}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#272252",
	},
	text: {
		fontSize: 26,
	},
});
