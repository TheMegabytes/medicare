import {
  Calendar,
  ChartColumnIncreasing,
  CreditCard,
  DatabaseBackup,
  ShieldCheck,
  Users,
} from "lucide-react";

export const features = [
  {
    title: "Patient Management",
    desc: "Store, organize, and manage patients informations securely in one centralized system.",
    features: [
      "Digital patient records",
      "Patient history & notes",
      "Quick search & filters",
      "Document management",
    ],
    icon: Users,
    iconStyles: "text-primary-600 bg-primary-600/20",
  },
  {
    title: "Appointment Scheduling",
    desc: "Smart scheduling system to manage doctor availability and patient bookings.",
    features: [
      "Real-time availability",
      "Online & offline booking",
      "Automated reminders",
      "Queue management",
    ],
    icon: Calendar,
    iconStyles: "text-success-700 bg-success-700/20",
  },
  {
    title: "Billing & payments",
    desc: "Complete billing solution with multiple payment options and insurance support.",
    features: [
      "Invoice generation",
      "Insurance management",
      "Multiple payment modes",
      "Automated calculations",
    ],
    icon: CreditCard,
    iconStyles: "text-violet-700 bg-violet-700/20",
  },
  {
    title: "Analytics & Reports",
    desc: "Get real-time insights and advanced reports to make data-driven decisions.",
    features: [
      "Interactive dashboard",
      "Custom reports",
      "Revenue analytics",
      "Export & share",
    ],
    icon: ChartColumnIncreasing,
    iconStyles: "text-orange-400 bg-success-500/20",
  },
  {
    title: "Role-based Acccess",
    desc: "Granular access control to ensure security & data privacy across your organization.",
    features: [
      "Admin, Doctor, Nurse & more",
      "Custom roles & permissions",
      "Activity logs",
      "Data security & compliance",
    ],
    icon: ShieldCheck,
    iconStyles: "text-danger-500 bg-danger-500/10",
  },
  {
    title: "Cloud Infrastructure",
    desc: "Built on secure, scalable and reliable cloud infrastructure.",
    features: [
      "99.99% uptime",
      "Automatic backups",
      "Scalable architecture",
      "Disaster recovery",
    ],
    icon: DatabaseBackup,
    iconStyles: "text-primary-500 bg-success-500/20",
  },
];
