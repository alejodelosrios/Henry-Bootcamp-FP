import LoginForm from "../components/Login/LoginForm";

function LoginPage({type}:any) {
  return (
    <div>
      <LoginForm type={type} />
    </div>
  );
}

export default LoginPage;
