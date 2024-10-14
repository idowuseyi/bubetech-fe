"use client";
import { X } from "lucide-react";
import { useRef, useState, useCallback, useEffect } from "react";
import Webcam from "react-webcam";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import tablerCapture from "@/assets/tabler_capture.png";

const videoConstraints = {
    width: 720,
    height: 360,
    facingMode: "user",
};

export default function AnimalCapture({ onDiscard }: any) {
    const [isSaving, setIsSaving] = useState(false);
    const [isCaptureEnable, setCaptureEnable] = useState<boolean>(false);
    const webcamRef = useRef<Webcam>(null);
    const [url, setUrl] = useState<string | null>(null);
    const [progress, setProgress] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current?.getScreenshot();
        if (imageSrc) {
            setUrl(imageSrc);
        }
    }, [webcamRef]);

    // Progress bar effect
    useEffect(() => {
        if (isLoading) {
            let progressInterval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) {
                        clearInterval(progressInterval);
                        setIsLoading(false);
                        capture(); // Capture the image when progress hits 100%
                        return 100;
                    }
                    return prev + 10;
                });
            }, 200); // Increase every 200ms (2 seconds total for 100%)
        }
    }, [isLoading, capture]);

    const handleTakePhoto = () => {
        setProgress(0);
        setIsLoading(true); // Start loading process
    };

    return (
        <div className="flex flex-col md:h-screen md:justify-center">
            {isCaptureEnable ? (
                <div className="relative w-full h-screen">
                    {url ? (
                        // Display the captured image
                        <div className="flex flex-col items-center justify-center h-screen">
                            <Image src={url} width={100} height={100} alt="Captured" className="w-full h-auto object-contain" />
                            <div className="flex w-4/5 items-center md:w-full gap-4 max-w-[420px] mx-auto pb-8">
                                <Button
                                    className="bg-[#6FA521] rounded-md mt-5 w-1/2 h-12 text-white"
                                    onClick={() => setUrl(null)} // Retake the photo
                                >
                                    Retake Photo
                                </Button>
                                <div className="text-center bg-white text-[#9E9E9E] border-[1.3px]  border-slate-300 rounded-md w-1/2 h-12 px-3.5 py-2.5 text-sm mt-5 font-medium shadow-sm cursor-pointer" onClick={() => setCaptureEnable(false)}>
                                    <span className="text-base font-medium">Continue</span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        // Display the webcam if no image is captured
                        <>
                            <div>
                                <Webcam
                                    audio={false}
                                    ref={webcamRef}
                                    screenshotFormat="image/jpeg"
                                    videoConstraints={videoConstraints}
                                    className="w-full h-screen object-cover"
                                />
                            </div>

                            {isLoading ? (
                                <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-4/5 md:w-1/2">
                                    <div className="h-3 bg-gray-300 rounded-full">
                                        <div
                                            style={{ width: `${progress}%` }}
                                            className="h-full bg-[#6FA521] rounded-full transition-all"
                                        ></div>
                                    </div>
                                    <p className="text-center mt-2">{progress}%</p>
                                </div>
                            ) : (
                                <div className="absolute md:w-1/3 max-w-[1512px] top-1/2 left-1/2 transform -translate-x-1/2 h-full -translate-y-1/2 flex flex-col items-center justify-between">
                                    <div className="flex mb-8 justify-center w-full mt-auto">
                                        <Button
                                            disabled={isSaving}
                                            className="bg-[#6FA521] rounded-md mt-10 mx-auto md:w-4/5 h-12 text-sm font-medium text-white shadow-sm"
                                            type="button"
                                            onClick={handleTakePhoto}
                                        >
                                            <span className="text-base font-medium">Take Photo</span>
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
            ) : (
                <div className="md:w-[700px] mx-auto pt-10 xl:my-10 md:pb-10 bg-white px-6 md:px-10">
                    <div>
                        <div className="text-primary mb-8 flex items-center justify-between">
                            <h2 className="font-medium text-center text-xl text-[#323232] leading-[30px]">Photo Capture</h2>
                            <div className="bg-gray-300 p-1 rounded-full cursor-pointer" onClick={onDiscard}>
                                <X size={18} />
                            </div>
                        </div>
                    </div>

                    {/* ===CAPTURE LOGO SECTION === */}
                    <div className="flex items-start justify-center w-full ">
                        <div className="animalCapture-gradient flex items-center justify-center rounded-full w-[260px] max-w-[260px] h-[260px]">
                            <div className="animalCapture-inner-gradient w-full max-w-[218px] flex items-center justify-center h-[218px] rounded-full">
                                <div className="animalCapture-innerMost-gradient w-full flex items-center justify-center max-w-[168px] h-[168px] rounded-full">
                                    <Image
                                        src={tablerCapture}
                                        alt=""
                                        className="w-[80px] h-[80px] object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <h2 className="font-medium text-center text-xl leading-[30px]">Animal photo capture</h2>
                        <p className="font-normal text-center text-base text-[#323232]">Take photos of the animal from various angles</p>
                    </div>
                    <div className="flex justify-center">
                        <Button
                            disabled={isSaving}
                            className="bg-[#6FA521] rounded-md mt-10 mx-auto w-1/2 h-12 text-sm font-medium text-white shadow-sm"
                            type="button"
                            onClick={() => setCaptureEnable(true)}
                        >
                            <span className="text-base font-medium">Take Photo</span>
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}
