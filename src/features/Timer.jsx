import React, { useState } from "react";
import { View, Text, StyleSheet, Vibration } from "react-native";
import { Countdown } from "../components/CountDown";
import { ProgressBar } from "react-native-paper";
import Timing from "./Timing";

import { RoundedButton } from "../components/RoundedButton";

const ONE_SECOND_IN_MS = 1000;
const PATTERN = [3 * ONE_SECOND_IN_MS];

export const Timer = ({ focusSubject, clearSubject }) => {
	const [isStarted, setIsStarted] = useState(false);
	const [progress, setProgress] = useState(1);
	const [minutes, setMinutes] = useState(0.1);

	const onEnd = (reset) => {
		Vibration.vibrate(PATTERN);
		setIsStarted(false);
		setProgress(1);
		reset();
	};

	return (
		<View style={styles.container}>
			<View style={styles.countDown}>
				<Countdown
					minutes={minutes}
					isPaused={!isStarted}
					onProgress={(progress) => setProgress(progress)}
					onEnd={onEnd}
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
				<Timing onChangeTime={setMinutes} />
			</View>
			<View style={styles.clear}>
				<RoundedButton
					size={50}
					title="-"
					onPress={() => clearSubject()}
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
		flex: 0.4,
		alignItems: "center",
		justifyContent: "center",
	},
	buttonWrapper: {
		flex: 0.3,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	clear: {
		flexDirection: "row",
		justifyContent: "center",
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
