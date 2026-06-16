import {
  CloudBackup,
  DatabaseBackup,
  ShieldCheck,
  Smartphone,
  Users,
} from "lucide-react";

const plans = [
  {
    title: "Secure cloud infrastructure",
    icon: CloudBackup,
    starter: true,
    professional: true,
    enterprise: true,
  },
  {
    title: "Role-based Access Control",
    icon: Users,
    starter: true,
    professional: true,
    enterprise: true,
  },
  {
    title: "Data Backup & Recovery",
    icon: DatabaseBackup,
    starter: true,
    professional: true,
    enterprise: true,
  },
  {
    title: "Mobile Responsive",
    icon: Smartphone,
    starter: true,
    professional: true,
    enterprise: true,
  },
  {
    title: "Regular Updates",
    icon: CloudBackup,
    starter: true,
    professional: true,
    enterprise: true,
  },
  {
    title: "HIPAA & GDPR Compliance",
    icon: ShieldCheck,
    starter: false,
    professional: true,
    enterprise: true,
  },
];

export default plans;
