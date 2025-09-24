'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";  // ✅ en lugar de useNavigate
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Label } from "@/app/components/ui/label";
import { AuthCard } from "@/app/components/AuthCard";

const ProfileSetup = () => {
  const router = useRouter(); // ✅
  const [formData, setFormData] = useState({
    fullName: "",
    bio: "",
    profileImage: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí va tu lógica de registro/actualización
    router.push("/dashboard"); // ✅ reemplazo de navigate()
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      profileImage: file,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-hitme-from via-hitme-via to-hitme-to flex items-center justify-center p-4">
      <div className="w-full max-w-lg space-y-8 text-center">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-3">
            Let's set up your profile
          </h1>
          <p className="text-white/80 text-lg">We'll start with the basics:</p>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2 text-left">
              <Label htmlFor="fullName" className="text-gray-700 font-medium">
                Full Name
              </Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Enter full name..."
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2 text-left">
              <Label htmlFor="bio" className="text-gray-700 font-medium">
                Tell us about yourself
              </Label>
              <Textarea
                id="bio"
                name="bio"
                placeholder="Enter user bio..."
                value={formData.bio}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2 text-left">
              <Label htmlFor="profileImage" className="text-gray-700 font-medium">
                Profile Image
              </Label>
              <div className="relative">
                <div className="min-h-[150px] border-2 border-dashed border-gray-200 rounded-lg bg-gray-50 flex items-center justify-center">
                  <div className="text-center">
                    <input
                      type="file"
                      id="profileImage"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      className="text-hitme-accent font-bold text-lg hover:text-hitme-accent/80"
                    >
                      Choose Photo
                    </Button>
                  </div>
                </div>
                {formData.profileImage && (
                  <p className="text-gray-600 text-sm mt-2">
                    Selected: {formData.profileImage.name}
                  </p>
                )}
              </div>
            </div>

            <Button
              type="submit"
              variant="hitme"
              className="w-full rounded-full font-bold text-lg"
              size="xl"
            >
              NEXT
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetup;
