import Link from 'next/link';
import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';

const MyPage = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/login');
  }

  console.log(data);

  return (
    <div>
      <p>Hello {data.user.user_metadata.full_name}</p>
      <Link href="/customer/registration">登録情報</Link>
    </div>
  );
};

export default MyPage;
