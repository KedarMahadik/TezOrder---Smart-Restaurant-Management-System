
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const QRCodeGenerator = () => {
  const [baseUrl, setBaseUrl] = useState("https://lovable.ao");
  const [tableCount, setTableCount] = useState(10);
  const [generatedUrls, setGeneratedUrls] = useState<string[]>([]);

  const generateQRCodes = () => {
    const urls: string[] = [];
    for (let i = 1; i <= tableCount; i++) {
      urls.push(`${baseUrl}/menu?table=${i}`);
    }
    setGeneratedUrls(urls);
  };

  const downloadQRCode = (url: string, tableNumber: number) => {
    // In a real application, we would generate the QR code image here
    // and download it. For this prototype, we'll just log the URL
    console.log(`Download QR code for ${url}`);
    
    // Mock download - in a real app, this would be a real download
    const element = document.createElement("a");
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(url));
    element.setAttribute("download", `table-${tableNumber}-qr.jpg`);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>QR Code Generator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="base-url">Base URL</Label>
          <Input
            id="base-url"
            value={baseUrl}
            onChange={(e) => setBaseUrl(e.target.value)}
            placeholder="https://lovable.ao"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="table-count">Number of Tables</Label>
          <Input
            id="table-count"
            type="number"
            min="1"
            max="100"
            value={tableCount}
            onChange={(e) => setTableCount(parseInt(e.target.value) || 1)}
          />
        </div>

        <Button onClick={generateQRCodes} className="w-full">
          Generate QR Codes
        </Button>
      </CardContent>

      {generatedUrls.length > 0 && (
        <CardFooter className="flex flex-col items-stretch gap-2">
          <h3 className="font-medium mb-2">Generated URLs:</h3>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {generatedUrls.map((url, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-secondary p-2 rounded text-sm"
              >
                <span className="truncate mr-2">{url}</span>
                <Button
                  size="sm"
                  onClick={() => downloadQRCode(url, index + 1)}
                >
                  Download
                </Button>
              </div>
            ))}
          </div>
        </CardFooter>
      )}
    </Card>
  );
};

export default QRCodeGenerator;
