import { signOut, useSession } from "next-auth/react";

const Hoge = () => {
    const {data: session} = useSession();
  return (
    <>
      <h1>ログインできました</h1>
      {session.user?.id}
      <button onClick={() => signOut({ callbackUrl: "/sign_in" })}>SignOut</button>
    </>
  );
};

export default Hoge;