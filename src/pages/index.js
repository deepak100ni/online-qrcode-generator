import { useState } from "react";
import QRCode from "react-qr-code";

export default function Home() {
  const [value, setValue] = useState('');
  const [back, setBack] = useState('#FFFFFF');
  const [fore, setFore] = useState('#000000');
  const [size, setSize] = useState(256);
  return (
    <div className="flex justify-center items-center h-screen">
            {/* Input Section */}
            <div className="w-1/2 p-6 border-r">
                <h1 className="text-2xl mb-4">QR Code Generator</h1>
                <input
                    type="text"
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                    placeholder="Value of QR code"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <input
                    type="text"
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                    placeholder="Background color"
                    value={back}
                    onChange={(e) => setBack(e.target.value)}
                />
                <input
                    type="text"
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                    placeholder="Foreground color"
                    value={fore}
                    onChange={(e) => setFore(e.target.value)}
                />
                <input
                    type="number"
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                    placeholder="Size of QR code"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                />
            </div>

            {/* Preview Section */}
            <div className="w-1/2 p-6">
                {value && (
                    <QRCode
                        title="Generated QR Code"
                        value={value}
                        bgColor={back}
                        fgColor={fore}
                        size={size === '' ? 0 : size}
                    />
                )}
            </div>
        </div>
  )
}
