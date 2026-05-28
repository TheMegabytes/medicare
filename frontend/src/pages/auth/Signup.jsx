import { Info, Lock, Mail, ShieldCheckIcon, User, Users } from "lucide-react";
import Logo from "../../components/Logo";

const Signup = () => {
  return (
    <div
      className="min-h-screen flex justify-center items-center bg-linear-bl
    from-primary-100 to-bg-app"
    >
      <div
        className="flex justify-center max-w-200 
      rounded-xl text-text-body h-150 bg-primary-200"
      >
        <div
          className="hidden sm:flex flex-col max-w-85 p-6 rounded-l-xl 
        bg-primary-200 gap-4"
        >
          {/* <div className="flex justify-start items-center space-x-3 sm:space-x-5">
            <div>
              <h3 className="text-normal sm:text-2xl text-text-heading font-mono font-extrabold">
                Medi<span className="text-primary-700">Care</span>
              </h3>
              <p className="text-[10px] tracking-tight text-text-heading">
                HOSPITAL MANAGEMENT
              </p>
            </div>
          </div> */}

          <Logo />

          <div className="flex flex-col gap-2 mt-3 text-2xl font-bold">
            <span>Join Thousands of</span>
            <span className="text-primary-700">Health Care</span>
            <span className="text-primary-700">Proffessionals</span>
          </div>

          <p className="text-text-body text-sm  my-2">
            Create your acccount aand start managing your hospital more
            effeciently.
          </p>

          <div className="flex flex-col gap-6">
            <div
              className="flex justify-between items-center space-x-2
             p-2  shadow-[0_0_15px_rgba(0,0,0,0.4)] rounded-lg"
            >
              <div
                className="p-1 rounded-lg flex justify-center items-center
              bg-bg-app"
              >
                <Users size={18} className="text-primary-600" />
              </div>
              <div className="flex flex-col text-sm">
                <span className="font-bold">Complete Management</span>
                <span className="text-xs">
                  Manage patients, appointments, billing, inventory and more
                </span>
              </div>
            </div>

            <div
              className="flex justify-between items-center space-x-2
             p-2  shadow-[0_0_15px_rgba(0,0,0,0.4)] rounded-lg"
            >
              <div
                className="p-1 shadow-lg rounded-lg flex justify-center items-center
              bg-bg-app"
              >
                <ShieldCheckIcon size={18} className="text-primary-600" />
              </div>
              <div className="flex flex-col text-sm">
                <span className="font-bold">Secure & Reliable</span>
                <span className="text-xs">
                  Enterprise-grade security with regular backups
                </span>
              </div>
            </div>

            <div
              className="flex justify-between items-center space-x-4
             p-2  shadow-[0_0_15px_rgba(0,0,0,0.4)] rounded-lg"
            >
              <div
                className="p-1 shadow-lg rounded-lg flex justify-center items-center
              bg-bg-app"
              >
                <Info size={18} className="text-primary-600" />
              </div>
              <div className="flex flex-col text-sm">
                <span className="font-bold">Insightful Reports</span>
                <span className="text-xs">
                  Real-time analytics to make better decisions
                </span>
              </div>
            </div>
          </div>
        </div>

        <form
          className="flex flex-col max-w-150 rounded-lg sm:rounded-r-xl p-4 bg-bg-app
          shadow-[0_0_50px_rgba(0,0,0,0.3)] text-text-body space-y-3"
        >
          <h3 className="text-text-heading text-2xl font-bold">
            Create Account
          </h3>

          <p>Fill in the details to get started</p>

          <div className="flex flex-col gap-2 font-semibold">
            Full Name
            <div
              className="flex items-center gap-2 border border-primary-600 
            py-1 px-3 rounded-lg shadow"
            >
              <User size={18} />

              <input
                type="text"
                placeholder="Full Name"
                className="focus:outline-0 font-normal"
                name="name"
              />
            </div>
          </div>

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
                className="focus:outline-0 font-normal"
                name="email"
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
                className="focus:outline-0 font-normal"
                name="password"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 font-semibold">
            Confirm Password
            <div
              className="flex items-center gap-2 border border-primary-600 
            py-1 px-3 rounded-lg shadow"
            >
              <Lock size={18} />

              <input
                type="password"
                placeholder="Confirm Password"
                className="focus:outline-0 font-normal"
                name="confirmPassword"
              />
            </div>
          </div>

          <div className="max-w-75">
            <div className="space-x-2">
              <input type="checkbox" />I agree to
              <a
                className="text-primary-600 ml-2 hover:text-primary-700"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                className="text-primary-600 ml-2 hover:text-primary-700"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <input
            type="submit"
            value="Sign In"
            className="bg-primary-600 rounded-lg shadow py-1 px-3
            focus:outline-0 text-white"
          />

          <div className="flex justify-center items-center h-60">
            Other signup options here!!
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
