import { useSession, signIn, signOut } from 'next-auth/react';
import type { NextPage } from 'next';

const Login: NextPage = () => {
  const { data: session }: any = useSession();

  if (session) {
    return (
      <>
        <a>User - {session.user.name}</a>
        <button onClick={() => signOut()}>로그아웃</button>
      </>
    );
  }

  return (
    <>
      <button onClick={() => signIn()}>로그인</button>
    </>
  );
};

export default Login;
