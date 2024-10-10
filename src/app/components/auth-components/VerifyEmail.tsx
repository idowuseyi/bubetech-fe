"use client";
import { useCallback, useEffect, useRef, useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import EmailIllustration from "@/assets/amico.png";
import bubetechLogo from "@/assets/bubetech-logo.png";

export default function VerifyEmail() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [code, setCode] = useState(["", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    const newCode = [...code];

    // Handle pasted content
    if (value.length > 1) {
      const pastedCode = value.slice(0, 5).split("");
      for (let i = 0; i < 5; i++) {
        newCode[i] = pastedCode[i] || "";
      }
      setCode(newCode);

      // Focus on the last non-empty input or the first empty one
      const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
      const focusIndex = lastFilledIndex < 4 ? lastFilledIndex + 1 : 4;

      // Check if the inputRef is not null before focusing
      if (inputRefs.current[focusIndex]) {
        inputRefs.current[focusIndex]!.focus();
      }
    } else {
      newCode[index] = value;
      setCode(newCode);

      // Move focus to the next input field if value is entered
      if (value && index < 4) {
        if (inputRefs.current[index + 1]) {
          inputRefs.current[index + 1]!.focus();
        }
      }
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = useCallback(
    async (e?: React.FormEvent<HTMLFormElement>) => {
      e?.preventDefault();
      const verificationCode = code.join("");
      console.log(verificationCode, "this is the code");
      const body = {
        code: verificationCode,
      };
      router.push("/login");
      try {
        // const response = await VerifyEmailRequest(body);
        // toast.success(response?.message);
        // setTimeout(() => {
        //   router.push("/login");
        // }, 3000);
      } catch (error) {
        console.log(error);
      }
    },
    [code, router]
  );

  // Auto submit when all fields are filled
  useEffect(() => {
    if (code.every((digit) => digit !== "")) {
      handleSubmit();
    }
  }, [code, handleSubmit]);

  return (
    <>
      <div className="px-3 pt-10 md:pt-4">
        {/* ==== Company Brand Logo ===== */}
        <div className="px-4 md:px-10  hidden md:block">
          <Image
            src={bubetechLogo}
            width={100}
            height={100}
            alt="email illustration image"
            className="mb-3 w-[80px] h-[100px]"
          />
        </div>
        {/* ======= Main Content ======= */}
        <div className="bg-[#FFFFFF] rounded-2xl overflow-y-hidden w-[350px] md:w-[400px] lg:w-[500px]   mx-auto h-full py-8 text-[#1F4D36]">
          <div className="mx-auto flex justify-center">
            <Image
              src={EmailIllustration}
              width={100}
              height={100}
              alt="email illustration image"
              className="mb-3 w-[180px] h-[140px]"
            />
          </div>
          <div className="px-4 w-full max-w-[400px] mx-auto">
            <p className="text-center text-[24px] ">Enter Code</p>
            <p className="text-center text-sm mt-3 mb-6 max-w-[300px] mx-auto">
              Kindly enter the OTP code sent to your phone number or email
              address
            </p>

            <form onSubmit={handleSubmit}>
              {/* =======Verification Code ===== */}
              <div className="mt-4 flex justify-between gap-2">
                {code.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => {
                      inputRefs.current[index] = el;
                    }}
                    type="text"
                    maxLength={6}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-12 h-12 md:w-16 md:h-16 text-center text-2xl font-medium bg-[#FFFFFF] border-[1px] border-[#D6D4D4] text-[#323232] px-3 py-2.5 focus:outline-none placeholder:text-sm cursor-text flex justify-between rounded-lg"
                  />
                ))}
              </div>
              <button
                disabled={isLoading || code.some((digit) => !digit)}
                className="px-8 py-3 cursor-pointer  mt-10 bg-[#6FA521] text-[16px] text-white rounded-lg w-full  transition duration-500 ease-in-out hover:shadow-[0_0_20px_rgba(31,77,54,0.7)]"
              >
                {isLoading ? "Verifying..." : "Verify"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* <ToastContainer /> */}
    </>
  );
}
