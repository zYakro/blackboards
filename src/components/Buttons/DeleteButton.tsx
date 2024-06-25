import { TouchableOpacity, type TouchableOpacityProps } from 'react-native'

export const DeleteButton = (props: TouchableOpacityProps) => {
  return (
    <TouchableOpacity className="bg-red-400 flex justify-center items-center p-1 px-5 rounded-sm" {...props} />
  )
}