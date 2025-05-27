import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import auth from "../../firebase/firebase.init";

const HeroRegister = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const heroRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.trams.checked;
    console.log(email, password, accepted);
    // reset function
    setRegisterError("");
    setSuccess("");

    if(password.length < 6) {
      setRegisterError("password at least 6 charecters or longer");
      return;
    }
    else if(!accepted){
      setRegisterError("accepted your trams condition");
    }
   
      // firebase use function
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          console.log(result.user);
          setSuccess("Your Register Success");
        })
        .catch((error) => {
          console.error(error);
          setRegisterError(error.message);
        });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <Helmet>
        <title>Register page</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sathi!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={heroRegister}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  name="email"
                  placeholder="Email"
                  required
                />
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="input"
                    name="password"
                    placeholder="Password"
                    required
                  />
                  <span
                    className="absolute top-[10px] right-[20px]"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <FaEyeSlash className="text-2xl" />
                    ) : (
                      <FaRegEye className="text-2xl" />
                    )}
                  </span>
                </div>
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <div className="">
                  <input
                    className="mr-2 items-center justify-center"
                    type="checkbox"
                    name="trams"
                    id="trams"
                  />
                  <label htmlFor="trams">
                    Accepts your Trams and condition
                  </label>
                </div>
                <button className="btn btn-neutral mt-4">Submit</button>
              </fieldset>
            </form>
            {registerError && (
              <p className="text-red-600">All Ready Use Your Email</p>
            )}
            {success && <p className="text-green-700">Your Register Success</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroRegister;
