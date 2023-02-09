import { useSession, signIn, signOut } from 'next-auth/react';
import type { NextPage } from 'next';

const Login: NextPage = () => {
  // session에서 OAuth 사용자 정보 확인하기
  const { data: session }: any = useSession();

  // 사용자 정보 있으면, 이메일과 로그아웃 버튼 출력
  if (session) {
    return (
      <>
        <a>{session.user.name}</a>
        <button onClick={() => signOut()}>로그아웃</button>
      </>
    );
  }

  // 사용자 정보 없으면, 로그인 버튼 출력 - signIn() 함수는 next-auth기본 로그인화면으로 이동시켜준다.
  return (
    <>
      <button onClick={() => signIn()}>로그인</button>
    </>
  );
};

export default Login;
