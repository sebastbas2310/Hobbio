"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { AuthCard } from "@/app/components/AuthCard";

const Login = () => {
  const router = useRouter(); // reemplazo de useNavigate
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría tu lógica de login
    router.push("/profile-setup"); // navegación en Next.js
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <AuthCard>
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Log In</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter email..."
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium text-gray-700">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter password..."
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <Button 
            type="submit" 
            variant="hitme" 
            className="w-full rounded-full font-bold text-lg"
            size="lg"
          >
            LOG IN
          </Button>
        </form>

        <div className="text-center space-y-3">
          <Button
            variant="ghost"
            className="text-gray-600 hover:text-gray-900 font-medium"
          >
            FORGOT PASSWORD?
          </Button>
          
          <div>
            <Button
              variant="ghost"
              onClick={() => router.push("/signup")}
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              SIGN UP
            </Button>
          </div>
        </div>
      </div>
    </AuthCard>
  );
};

export default Login;
