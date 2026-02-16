'use client';

import { useState, useEffect } from 'react';

type PopupProps = {
    message: string;
};

export default function Popup({ message }: PopupProps) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Show popup when the component mounts (page opens)
        setVisible(true);
    }, []);

    if (!visible) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
                <p className="mb-4">{message}</p>
                <button
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    onClick={() => setVisible(false)}
                >
                    Close
                </button>
            </div>
        </div>
    );
}