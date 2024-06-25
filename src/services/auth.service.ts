import { supabase } from "@/supabase/config";
import { DatabaseError, ValidationError } from "./error.service";
import { isAuthError } from "@supabase/supabase-js";

export const signUp = async (email: string, password: string, confirmation: string) => {
  try {
    const { error } = await supabase.auth.signUp({ email, password })

    if (error) throw error;

    const request = await supabase
      .from('users-info')
      .insert({
        email: email,
      })

    if (request.error) throw error;

  } catch (err) {

    if (isAuthError(err)) {
      throw new ValidationError(err.message)
    }

    throw new DatabaseError('Something unexpected happened when trying to sign up... Try again later')
  }
}

export const singIn = async (email: string, password: string) => {
  try {
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) throw error
  } catch (err) {
    if (isAuthError(err)) {
      throw new ValidationError(err.message)
    }

    throw new DatabaseError('Something unexpected happened when trying to sign in... Try again later')
  }
}

export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut()

    if (error) throw error;
  } catch (err) {
    if (isAuthError(err)) {
      throw new ValidationError(err.message)
    }

    throw new DatabaseError('Something unexpected happened when trying to sign out... Try again later')
  }
}

export const getUserEmailFromSession = async () => {
  try {
    const session = await supabase.auth.getSession();

    if (session.error) throw session.error;

    return session.data.session?.user.email || ''
  } catch (e) {
    throw new DatabaseError('Something unexpected happened when trying to get your email... Try again later')
  }
}