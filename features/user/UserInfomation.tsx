'use client';
import React, { useState } from 'react';

import { Button } from '@/components/elements/Button';
import { Input } from '@/components/elements/Input';
import { trpc } from '@/utils/trpc/client';

type Props = {
  id: string;
};

export const UserInfomation = ({ id }: Props) => {
  const [name, setName] = useState('');

  const { data, refetch } = trpc.getUser.useQuery(id);
  const updateUser = trpc.updateUser.useMutation({
    onSuccess: () => {
      refetch();
      setName('');
    },
  });

  const handleInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleOnClick = () => {
    updateUser.mutate({ auth_id: id, name: name });
  };

  return (
    <div>
      <div>name: {data?.name}</div>
      <div>email: {data?.email}</div>
      <Input type="text" value={name} onChange={handleInputName} />
      <Button
        primary
        size="small"
        backgroundColor="accent"
        label="submit"
        onClick={handleOnClick}
      />
    </div>
  );
};
