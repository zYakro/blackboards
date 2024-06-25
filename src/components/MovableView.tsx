import type { Position } from "@/types/types";
import type React from "react";
import { useRef, useEffect } from "react";
import { PanResponder, Animated } from "react-native";

interface IMovableView {
	initialPosition: Position;
	onRelease?: (pos: Position) => void;
	children: React.ReactNode;
}

export const MovableView = ({
	initialPosition,
	onRelease,
	children,
}: IMovableView) => {
	const pan = useRef(new Animated.ValueXY(initialPosition)).current;
	let notePosition = initialPosition;

	pan.addListener((newNotePosition) => {
		notePosition = newNotePosition;
	});

	const panResponder = PanResponder.create({
		onStartShouldSetPanResponder: () => true,
		onMoveShouldSetPanResponder: (evt, gestureState) => {
			//return true if user is swiping, return false if it's a single click
			return !(gestureState.dx === 0 && gestureState.dy === 0);
		},
		onPanResponderMove: Animated.event(
			[
				null,
				{
					dx: pan.x,
					dy: pan.y,
				},
			],
			{ useNativeDriver: false },
		),
		onPanResponderRelease: () => {
			pan.flattenOffset();
			pan.extractOffset();

			if (onRelease) {
				onRelease(notePosition);
			}
		},
	});

	useEffect(() => {
		pan.setOffset(initialPosition);
		pan.setValue({ x: 0, y: 0 });
	}, []);

	return (
		<Animated.View
			{...panResponder.panHandlers}
			style={[
				pan.getLayout(),
				{
					position: "absolute",
				},
			]}
		>
			{children}
		</Animated.View>
	);
};
