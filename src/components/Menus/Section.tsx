import React from 'react'
import { View, type ViewProps } from 'react-native'

export const Section = (props: ViewProps) => {
  return (
    <View className="flex flex-col w-full bg-zinc-700 p-3 py-2 rounded-md" {...props} />
  )
}

