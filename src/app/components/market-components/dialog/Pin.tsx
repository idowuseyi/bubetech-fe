import React, { useState, useRef } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Backspace, CaretLeft } from "@phosphor-icons/react";

interface PinProps {
    open: boolean;
    onClose: () => void;
}

const Pin = ({ open, onClose }: PinProps) => {
    const [pin, setPin] = useState<string[]>(["", "", "", ""]);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleDigitClick = (digit: string) => {
        const nextIndex = pin.findIndex((p) => p === "");
        if (nextIndex !== -1) {
            const newPin = [...pin];
            newPin[nextIndex] = digit;
            setPin(newPin);
            if (nextIndex < inputRefs.current.length - 1) {
                inputRefs.current[nextIndex + 1]?.focus();
            }
        }
    };

    const handleBackspace = () => {
        const lastFilledIndex = pin.findLastIndex((p) => p !== "");
        if (lastFilledIndex !== -1) {
            const newPin = [...pin];
            newPin[lastFilledIndex] = "";
            setPin(newPin);
            inputRefs.current[lastFilledIndex]?.focus();
        }
    };

    const handleInputChange = (value: string, index: number) => {
        if (/^\d$/.test(value)) {
            const newPin = [...pin];
            newPin[index] = value;
            setPin(newPin);
            if (index < pin.length - 1) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };

    return (
        <Dialog open={open}>
            <DialogContent className="flex flex-col w-11/12 max-w-[450px] rounded-[20px]">
                <div className="w-full flex items-start justify-between">
                    <CaretLeft
                        size={18}
                        className="cursor-pointer"
                        fontWeight={32}
                        onClick={onClose}
                    />
                    <div className="w-full text-center">
                        <h2 className="text-base font-medium text-[#323232]">Enter PIN</h2>
                        <p className="text-sm font-extralight">
                            Enter your PIN to perform this action
                        </p>
                    </div>
                </div>
                <form className="flex flex-col w-4/5 mx-auto">
                    <div className="flex gap-2 my-5 items-center justify-center w-1/5 mx-auto">
                        {pin.map((value, index) => (
                            <input
                                key={index}
                                ref={(el) => (inputRefs.current[index] = el)}
                                className={`w-4 h-4 rounded-full focus:outline-none bg-[#D9D9D9] text-center ${value ? "bg-black/50" : "bg-[#D9D9D9]"
                                    }`}
                                type="text"
                                maxLength={1}
                                onChange={(e) => handleInputChange(e.target.value, index)}
                                readOnly
                            />
                        ))}
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0].map((digit, index) => (
                            <div
                                key={index}
                                className="bg-[#F9F9F9] cursor-pointer rounded-[10px] flex items-center justify-center w-[104px] h-[75px] text-[#323232] font-normal text-center text-xl"
                                onClick={() => handleDigitClick(digit.toString())}
                            >
                                {digit}
                            </div>
                        ))}
                        <div
                            className="bg-[#F9F9F9] cursor-pointer rounded-[10px] flex items-center justify-center w-[104px] h-[75px] text-[#323232] font-normal text-center text-xl"
                            onClick={handleBackspace}
                        >
                            <Backspace size={20} />
                        </div>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default Pin;
