import { Crown, Hospital, PalmtreeIcon } from "lucide-react";

const prices = [
  {
    title: "Starter",
    desc: "Perfect for small clinics",
    icon: PalmtreeIcon,
    cost: "4,999",
    colors: { text: "text-success-500", bg: "bg-success-500" },
    features: [
      "Upto 50 users",
      "Upto 5,000 patient records",
      "Appointment & Scheduling",
      "Billing & Invoicing",
      "Basic Reports",
      "Email Supports",
    ],
  },
  {
    title: "Professional",
    desc: "Ideal for growing hospitals",
    icon: Hospital,
    cost: "12,999",
    colors: { text: "text-primary-600", bg: "bg-primary-600" },
    features: [
      "Upto 200 users",
      "Upto 50,000 patient records",
      "All Starter features",
      "Advanced analytics",
      "Inventory (Pharmacy & Lab)",
      "SMS & Email Notifications",
      "Priority Support",
    ],
  },
  {
    title: "Enterprise",
    desc: "For large hospitals & networks",
    icon: Crown,
    cost: "Custom Pricing",
    colors: { text: "text-violet-500", bg: "bg-violet-500" },
    features: [
      "Unlimite users",
      "Unlimited patient records",
      "All professional features",
      "Multi-hospital management",
      "Custom integrations",
      "24/7 Premium Support",
      "SLA & On-premise option",
    ],
  },
];

export default prices;
