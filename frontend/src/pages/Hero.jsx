import {
  ArrowRight,
  Clock,
  DatabaseBackupIcon,
  PlayCircle,
  ShieldCheck,
  UserLockIcon,
} from "lucide-react";
import { Link } from "react-router";

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
            text-white rounded-lg"
            to="/signup"
          >
            Get Started <ArrowRight className="ml-2" size={18} />
          </Link>
          <Link
            className="flex justify-center items-center border-2 border-border
          rounded-lg px-4 py-2"
            to="/demo"
          >
            <PlayCircle className="mr-2" size={18} />
            Book Demo
          </Link>
        </div>

        <div className="flex justify-between items-center mt-12 space-x-3">
          <div className="flex flex-col justify-center items-center gap-3">
            <ShieldCheck className="rounded shadow-xl" />
            <p className="text-center text-sm">HIPAA Ready Security</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <Clock />
            <p className="text-center text-sm">99.99% Uptime</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <DatabaseBackupIcon />
            <p className="text-center text-sm">Cloud Backup</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <UserLockIcon />
            <p className="text-center text-sm">Role Based Access</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
