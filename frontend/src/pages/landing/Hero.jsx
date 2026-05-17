import {
  ArrowRight,
  Clock,
  DatabaseBackupIcon,
  PlayCircle,
  ShieldCheck,
  Users,
} from "lucide-react";

import { Link } from "react-router";

// local imports
import dashboard from "../../assets/dashboard.png";

const Hero = () => {
  return (
    <div
      className="min-h-screen bg-linear-to-bl from-primary-100 to-bg-app flex
     justify-between items-center px-12"
    >
      <div className="max-w-md space-y-5">
        <div
          className="max-w-50 text-success-400 p-1 rounded-full bg-success-100
        mb-6"
        >
          <div className="flex justify-center items-center space-x-2">
            <ShieldCheck size={18} />
            <p className="text-xs">Trusted by 500+ Hospitals</p>
          </div>
        </div>
        <h2 className="max-w-100 text-4xl font-semibold">
          Run Your Hospital Without{" "}
          <span
            className="bg-linear-to-r from-primary-600 to-accent-600 bg-clip-text
          text-transparent"
          >
            Chaos
          </span>
        </h2>

        <p>
          Manage patients, appointments, billing, prescriptions and reports in
          one secure, modern platform built for real hospital workflows.
        </p>

        <div className="flex justify-between items-center max-w-80 space-x-4">
          <Link
            className="flex justify-center items-center px-4 py-2 bg-primary-500
            text-white  hover:bg-primary-600 overflow-hidden
            hover:shadow-primary-600 border border-primary-300 rounded-lg  
            font-semibold hover:shadow-[0_0_10px_rgba(0,0,200,0.6)] transition-all 
            duration-300 hover:cursor-pointer"
            to="/signup"
          >
            Get Started <ArrowRight className="ml-2" size={18} />
          </Link>
          <Link
            className="flex justify-center items-center rounded-lg px-4 py-2 border 
            border-primary-300 font-semibold hover:shadow-[0_0_10px_rgba(0,0,200,0.6)] 
            transition-all duration-300 hover:cursor-pointer"
            to="/demo"
          >
            <PlayCircle className="mr-2" size={18} />
            Book Demo
          </Link>
        </div>

        <div className="flex justify-between items-center mt-12 space-x-3">
          <div className="flex flex-col justify-center items-center gap-3">
            <div
              className="p-1 rounded shadow-[0_0_5px_rgba(0,0,0,0.4)] 
            text-primary-400"
            >
              <ShieldCheck />
            </div>
            <p className="text-center text-sm">HIPAA Ready Security</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-3">
            <div
              className="p-1 rounded shadow-[0_0_5px_rgba(0,0,0,0.4)] 
            text-primary-400"
            >
              <Clock />
            </div>
            <p className="text-center text-sm">99.99% Uptime</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-3">
            <div
              className="p-1 rounded shadow-[0_0_5px_rgba(0,0,0,0.4)] 
            text-primary-400"
            >
              <DatabaseBackupIcon />
            </div>
            <p className="text-center text-sm">Cloud Backup</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-3">
            <div
              className="p-1 rounded shadow-[0_0_5px_rgba(0,0,0,0.4)] 
            text-primary-400"
            >
              <Users />
            </div>
            <p className="text-center text-sm">Role Based Access</p>
          </div>
        </div>
      </div>

      <img
        src={dashboard}
        alt="Dashboard"
        className="w-200 rounded-lg absolute bottom-2.5 right-0 perspective-distant
        rotate-x-8 -rotate-y-18 rotate-z-2 shadow-[0_5px_15px_#3b82f6]"
      />
    </div>
  );
};

export default Hero;
