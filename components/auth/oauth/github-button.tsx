'use client';

import { Button, buttonVariants } from '@/components/ui/button';
import { createClient } from '@/lib/supabase/client';
import { type VariantProps } from 'class-variance-authority';
import { GithubIcon } from 'lucide-react';

type Props = {} & React.HTMLAttributes<HTMLElement> & VariantProps<typeof buttonVariants>;

export const GithubButton = (props: Props) => {
  const urlOrigin = window.location.origin ?? 'http://localhost:3000';

  const signIn = async () => {
    const { auth } = createClient();
    const redirectUrl = new URL(urlOrigin + '/auth/callback');
    redirectUrl.searchParams.set('next', '/learn');
    const { error } = await auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: redirectUrl.toString(),
      },
    });
    if (error) console.error(error);
  };

  return (
    <Button
      {...props}
      onClick={signIn}
    >
      <GithubIcon className='size-5' />
      Sign In with Github
    </Button>
  );
};
