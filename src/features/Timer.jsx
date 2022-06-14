import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Countdown } from "../components/CountDown";
import { ProgressBar } from "react-native-paper";

import { RoundedButton } from "../components/RoundedButton";

export const Timer = ({ focusSubject }) => {
	const [isStarted, setIsStarted] = useState(false);
	const [progress, setProgress] = useState(1);

	return (
		<View style={styles.container}>
			<View style={styles.countDown}>
				<Countdown
					isPaused={!isStarted}
					onProgress={(progress) => setProgress(progress)}
					onEnd={() => {}}
				/>
				<View style={{ paddingTop: 40 }}>
					<Text style={styles.title}>Focusing on:</Text>
					<Text style={styles.task}>{focusSubject}</Text>
				</View>
			</View>
			<View style={{ paddingHorizontal: 16 }}>
				<ProgressBar
					progress={progress}
					color="#5e84e2"
					style={{ height: 10, borderRadius: 20 }}
				/>
			</View>
			<View style={styles.buttonWrapper}>
				{!isStarted && (
					<RoundedButton
						title="start"
						onPress={() => setIsStarted(true)}
					/>
				)}
				{isStarted && (
					<RoundedButton
						title="pause"
						onPress={() => setIsStarted(false)}
					/>
				)}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	countDown: {
		flex: 0.5,
		alignItems: "center",
		justifyContent: "center",
	},
	buttonWrapper: {
		flex: 0.3,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
	},
	task: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
	},
});
