import { Link } from "react-router";
import { Lock, Mail, ShieldCheck } from "lucide-react";
import Logo from "../../components/Logo";

const Login = () => {
  return (
    <div
      className="min-h-screen flex justify-center items-center bg-linear-bl
    from-primary-100 to-bg-app"
    >
      <div
        className="flex justify-center max-w-200 
      rounded-xl text-white h-150 bg-primary-600"
      >
        <div
          className="hidden sm:flex flex-col max-w-85 p-6 rounded-l-xl 
        bg-primary-600"
        >
          <Logo />

          <div className="flex flex-col gap-0.5 mt-3 text-xl font-bold">
            <span>Smart Hospital</span>
            <span>Management</span>
            <span>
              Made <span className="text-cyan-400">Simple</span>
            </span>
          </div>

          <p className="text-gray-300 text-sm">
            Streamline operations, enhance patient care, and grow your hospital
            with MediCare
          </p>

          <div className="h-95 login rounded-lg opacity-60 mt-3"></div>
          <div
            className="flex justify-between items-center space-x-4 border 
              backdrop-blur-2xl border-border/40 rounded-lg p-2 mt-3 mx-auto"
          >
            <div className="p-2 bg-primary-700 rounded-lg">
              <ShieldCheck size={18} />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold">Secure & compliant</span>
              <span className="text-xs text-gray-200">
                Your data is protected with enterprise grade security and HIPAA
                compliance.
              </span>
            </div>
          </div>
        </div>

        <form
          className="flex flex-col max-w-150 rounded-lg sm:rounded-r-xl p-4 bg-bg-app
          shadow-[0_0_50px_rgba(0,0,0,0.3)] text-text-body space-y-3"
        >
          <h3 className="text-text-heading text-2xl font-bold">
            Welcome Back 👋
          </h3>

          <p>Sign in to your account to continue</p>

          <div className="flex flex-col gap-2 font-semibold">
            Email
            <div
              className="flex items-center gap-2 border border-primary-600 
            py-1 px-3 rounded-lg shadow"
            >
              <Mail size={18} />

              <input
                type="email"
                placeholder="Email"
                className="focus:outline-0 focus:shadow-primary-600 font-normal"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 font-semibold">
            Password
            <div
              className="flex items-center gap-2 border border-primary-600 
            py-1 px-3 rounded-lg shadow"
            >
              <Lock size={18} />

              <input
                type="password"
                placeholder="Password"
                className="focus:outline-0 focus:shadow-primary-600 font-normal"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
            <div className="flex gap-2">
              <input type="checkbox" />
              Remember me
            </div>
            <Link
              className="text-primary-600 hover:cursor-pointer"
              to="/reset_password"
            >
              Forgot Password?
            </Link>
          </div>
          <input
            type="submit"
            value="Sign In"
            className="bg-primary-600 rounded-lg shadow py-1 px-3
            focus:outline-0 focus:shadow-primary-600 text-white"
          />

          <div className="flex justify-center items-center h-60">
            Other login options here!!
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
