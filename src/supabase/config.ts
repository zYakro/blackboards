import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ufhuwlptfiobfwpwgfrs.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmaHV3bHB0ZmlvYmZ3cHdnZnJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY5MTIwMTYsImV4cCI6MjAzMjQ4ODAxNn0.pfkgvc6wsgyx73Cr5GFlf7qn1FSIni_Gfb1T2BmCD-I"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})