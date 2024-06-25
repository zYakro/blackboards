import React from 'react'
import { View, type ViewProps } from 'react-native'

export const SectionBar = (props: ViewProps) => {
  return (
    <View className="flex flex-row w-full h-full bg-zinc-700 p-1 py-2 rounded-md" {...props} />
  )
}
