'use client';
import { signInWithDiscord } from '@/utils/supabase/auth';

const LoginPage = () => {
  return (
    <div>
      <button onClick={signInWithDiscord}>sign in</button>
    </div>
  );
};

export default LoginPage;
