"use client"
import { useState } from "react";
import FarmDetails from "../components/profile/FarmDetails";
import LivestockDetails from "../components/profile/LivestockDetails";
import ProfileDetails from "../components/profile/PersonalDetails";
import AnimalCapture from "../components/profile/AnimalCapture";

export default function ProfilePage() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => (prev < 3 ? prev + 1 : prev));
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div>
      {currentStep === 0 && (
        <ProfileDetails onNext={nextStep} />
      )}
      {currentStep === 1 && (
        <FarmDetails onNext={nextStep} onDiscard={prevStep} />
      )}
      {currentStep === 2 && (
        <LivestockDetails onNext={nextStep} onDiscard={prevStep} />
      )}
      {currentStep === 3 && (
        <AnimalCapture onNext={nextStep} onDiscard={prevStep} />
      )}
    </div>
  );
}