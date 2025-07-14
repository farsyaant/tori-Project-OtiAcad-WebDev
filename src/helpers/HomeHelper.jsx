import { Heart } from "lucide-react";
import { DollarSign } from "lucide-react";
import { CheckSquare } from "lucide-react";

export const tools = [
    {
      title: "To-Do List",
      description:
        "Manage all your tasks easily and efficiently. Don't miss a thing!",
      icon: CheckSquare,
      path: "/todolist",
      color: "text-primary",
      bgColor: "bg-primary/10",
      available: true,
      features: ["Add, edit, and delete tasks quickly",
        "Prioritize and categorize your tasks",
        "Filter by status, category, priority, and deadline",
        "View your statistics in real-time"],
    },
    {
      title: "Expense Tracker",
      description:
        "Get a clear overview of your balance and transaction history to make smarter financial decisions.",
      icon: DollarSign,
      path: "/expense-tracker",
      color: "text-success",
      bgColor: "bg-success/10",
      available: true,
      features: ["Record income & expenses", 
        "Real-time balance overview", 
        "Comprehensive transaction history", 
        "Smart filtering"],
    },
    {
      title: "Health Tracker",
      description:
        "Monitor and manage your daily health to maintain a healthier lifestyle.",
      icon: Heart,
      path: "/health-tracker",
      color: "text-error",
      bgColor: "bg-error/10",
      available: true,
      features: ["Track daily calories, sugar, and water intake", 
        "Log various health conditions (e.g., mood, symptoms)",
        "View comprehensive health history with filtering options", 
        "Get a real-time summary of today's health metrics"],
    },
  ];