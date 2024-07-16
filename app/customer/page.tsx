'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

import { signOut } from '@/utils/supabase/auth';

const CustomerPage = () => {
  const router = useRouter();
  const handleSignOut = async () => {
    await signOut();
    router.push('/login');
  };
  return (
    <div>
      <h2>Customer Page</h2>
      <button onClick={handleSignOut}>sign out</button>
      <Link href="/customer/mypage">マイページ</Link>
    </div>
  );
};

export default CustomerPage;
