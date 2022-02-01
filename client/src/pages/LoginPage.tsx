import LoginForm from "../components/Login/LoginForm";
import HomeLayout from "./HomeLayout";

function LoginPage({type}: any) {
  return (
    <HomeLayout>
      <LoginForm type={type} />
    </HomeLayout>
  );
}

export default LoginPage;
