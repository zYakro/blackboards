import { TouchableOpacity, type TouchableOpacityProps } from 'react-native'

export const NormalButton = (props: TouchableOpacityProps) => {
  return (
    <TouchableOpacity className="border-2 border-textColor flex justify-center items-center p-1 px-5 rounded-sm" {...props} />
  )
}