import React from "react";
import { TouchableOpacity, type TouchableOpacityProps} from "react-native";

export const SmallButton = (props: TouchableOpacityProps) => {
  return (
    <TouchableOpacity
      {...props}
      className="w-8 h-8 flex justify-center items-center rounded-3xl"
    />
  );
};
