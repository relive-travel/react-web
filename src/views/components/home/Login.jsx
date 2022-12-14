import Banner from "./component/Banner";

function Login() {
  // cookie에 access/refresh-token이 존재하지 않는 경우
  // login버튼을 통해 authorize실행, 토큰 발급진행
  const handleClickLogin = () => {
    window.Kakao.Auth.authorize({
      redirectUri: process.env.REACT_APP_KAKAO_REDIRECT_URI,
    });
  };

  return (
    <section className="login-component">
      <header>
        {/* <Banner /> */}
        <p>어서와! </p>
        <p>여기는 추억을 남기는 곳이야!</p>
      </header>
      <main>
        <img
          src={`${process.env.REACT_APP_S3_ADDRESS}/image/kakao/kakao_login_medium_wide.png`}
          alt="카카오 로그인 버튼"
          onClick={handleClickLogin}
        />
      </main>
    </section>
  );
}

export default Login;
