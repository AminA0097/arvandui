"use client";

import { useEffect, useState } from "react";
import { CheckCircle, XCircle, X } from "lucide-react";

type ToastType = "success" | "error" | "info";

interface ToastProps {
    message: string;
    type?: ToastType;
    duration?: number;
    onClose?: () => void;
}

export function showToast(message: string, type: ToastType = "success") {
    const event = new CustomEvent("show-toast", { detail: { message, type } });
    window.dispatchEvent(event);
}

export default function Toast() {
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState("");
    const [type, setType] = useState<ToastType>("success");

    useEffect(() => {
        const handler = (e: CustomEvent) => {
            setMessage(e.detail.message);
            setType(e.detail.type);
            setVisible(true);
            setTimeout(() => setVisible(false), 3000);
        };

        window.addEventListener("show-toast", handler as EventListener);
        return () => window.removeEventListener("show-toast", handler as EventListener);
    }, []);

    if (!visible) return null;

    const icons = {
        success: <CheckCircle size={18} className="text-green-400" />,
        error: <XCircle size={18} className="text-red-400" />,
        info: <CheckCircle size={18} className="text-blue-400" />,
    };

    return (
        <div className="toast">
            <div className="toast-content">
                {icons[type]}
                <span>{message}</span>
                <button onClick={() => setVisible(false)} className="ml-4 opacity-70 hover:opacity-100">
                    <X size={14} />
                </button>
            </div>
        </div>
    );
}