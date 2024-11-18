import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import { Camera, X } from 'lucide-react';
import { createWorker } from 'tesseract.js';

const MedicineScanner = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scannedText, setScannedText] = useState('');
  const [processing, setProcessing] = useState(false);
  const webcamRef = useRef<Webcam>(null);

  const scanImage = async (imageSrc: string) => {
    setProcessing(true);
    try {
      const worker = await createWorker('eng');
      const { data: { text } } = await worker.recognize(imageSrc);
      setScannedText(text);
      await worker.terminate();
    } catch (error) {
      console.error('Error scanning image:', error);
    }
    setProcessing(false);
    setIsScanning(false);
  };

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      scanImage(imageSrc);
    }
  }, [webcamRef]);

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Medicine Scanner</h2>
        
        {!isScanning ? (
          <button
            onClick={() => setIsScanning(true)}
            className="w-full bg-blue-600 text-white rounded-lg py-3 flex items-center justify-center gap-2"
          >
            <Camera size={20} />
            Scan Medicine
          </button>
        ) : (
          <div className="relative">
            <Webcam
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className="w-full rounded-lg"
            />
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
              <button
                onClick={capture}
                disabled={processing}
                className="bg-blue-600 text-white rounded-full p-4"
              >
                <Camera size={24} />
              </button>
              <button
                onClick={() => setIsScanning(false)}
                className="bg-red-600 text-white rounded-full p-4"
              >
                <X size={24} />
              </button>
            </div>
          </div>
        )}

        {processing && (
          <div className="mt-4 text-center text-gray-600">
            Processing image...
          </div>
        )}

        {scannedText && (
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Scanned Information:</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <pre className="whitespace-pre-wrap text-sm">{scannedText}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MedicineScanner;