
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { ArrowRight } from "lucide-react";

const TableSelector = () => {
  const [tableNumber, setTableNumber] = useState<string>("");
  const navigate = useNavigate();

  const handleTableSelect = (value: string) => {
    setTableNumber(value);
  };

  const handleContinue = () => {
    if (tableNumber) {
      navigate(`/menu?table=${tableNumber}`);
    }
  };

  return (
    <Card className="glass-card hover-scale max-w-md w-full">
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Select Your Table</h3>
            <p className="text-sm text-muted-foreground">
              Please choose your table number to continue
            </p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="table-select">Table Number</Label>
            <Select onValueChange={handleTableSelect} value={tableNumber}>
              <SelectTrigger>
                <SelectValue placeholder="Select table" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {Array.from({ length: 20 }, (_, i) => (
                    <SelectItem key={i + 1} value={String(i + 1)}>
                      Table {i + 1}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-end">
        <Button 
          onClick={handleContinue} 
          disabled={!tableNumber}
          className="hover-scale"
        >
          Continue to Menu
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TableSelector;
