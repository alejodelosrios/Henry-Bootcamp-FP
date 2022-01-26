import LoginForm from "../components/LoginForm";

function LoginPage({type}:any) {
  return (
    <div>
      <LoginForm type={type} />
    </div>
  );
}

export default LoginPage;
