import { useEffect, useState } from "react"

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("")
    const fullText  = "Welcome to my portfolio"

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length){
                clearInterval(interval);

                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete])

    return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center p-6">
        <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono font-bold leading-tight">
                {text}
                <span className="text-blue-500 animate-blink ml-1">|</span>
            </h1>
        </div>
    </div>
    )
}