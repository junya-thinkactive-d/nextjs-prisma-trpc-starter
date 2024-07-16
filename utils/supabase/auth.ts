import { createClient } from './client';

const supabase = createClient();
export async function signInWithDiscord() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'discord',
    options: {
      redirectTo: `${window.location.origin}/auth/discord/callback`,
    },
  });
  if (!error) {
    window.location.href = data.url;
  }
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();

  return { error };
}
