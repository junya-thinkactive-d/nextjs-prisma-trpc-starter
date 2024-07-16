import { redirect } from 'next/navigation';

import { UserInfomation } from '@/features/user/UserInfomation';
import { createClient } from '@/utils/supabase/server';

const RegistrationInfomationPage = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/login');
  }

  return (
    <div>
      <h2>User Information</h2>
      <UserInfomation id={data.user.id} />
    </div>
  );
};

export default RegistrationInfomationPage;
