import SignUp from "@/components/SignUp/SignUp";
import { saveUserInfo } from "@/actions/userActions";

const SignUpPage = () => {
  return (
    <>
      <SignUp saveUserInfo={saveUserInfo} />
    </>
  );
};

export default SignUpPage;
