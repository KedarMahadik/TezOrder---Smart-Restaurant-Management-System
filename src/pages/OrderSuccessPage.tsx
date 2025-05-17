
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Star, Check, Home, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";

const OrderSuccessPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  
  // Get order ID from URL query params
  const params = new URLSearchParams(location.search);
  const orderId = params.get("id") || "N/A";
  
  const handleSubmitFeedback = () => {
    if (rating === 0) {
      toast({
        title: "Please select a rating",
        description: "Your rating helps us improve our service",
        variant: "destructive",
      });
      return;
    }
    
    // Here we would send the feedback to the server
    console.log({ orderId, rating, feedback });
    
    toast({
      title: "Thank you for your feedback!",
      description: "We appreciate your input",
    });
    
    setFeedbackSubmitted(true);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 page-container flex flex-col items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <Check className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-2xl">Order Placed Successfully!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-secondary rounded-lg p-4 text-center">
              <p className="text-sm text-muted-foreground">Order ID</p>
              <p className="text-xl font-medium">{orderId}</p>
            </div>
            
            <p className="text-center text-muted-foreground">
              Your order has been received and is being prepared. Thank you for ordering with Lovable.AO!
            </p>
            
            {!feedbackSubmitted ? (
              <div className="space-y-4 pt-4">
                <h3 className="font-medium text-center">How was your experience?</h3>
                
                <div className="flex justify-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`h-8 w-8 ${
                          (hoveredRating ? star <= hoveredRating : star <= rating)
                            ? "text-primary fill-primary"
                            : "text-muted-foreground"
                        }`}
                      />
                    </button>
                  ))}
                </div>
                
                <Textarea
                  placeholder="Share your feedback (optional)"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="resize-none"
                />
                
                <Button onClick={handleSubmitFeedback} className="w-full">
                  Submit Feedback
                </Button>
              </div>
            ) : (
              <div className="text-center pt-4">
                <h3 className="font-medium">Feedback Submitted</h3>
                <p className="text-muted-foreground">Thank you for your feedback!</p>
              </div>
            )}
          </CardContent>
          
          <CardFooter className="flex justify-center gap-4">
            <Button variant="outline" onClick={() => navigate(-1)}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <Button variant="default" onClick={() => navigate("/")}>
              <Home className="h-4 w-4 mr-2" />
              Home
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
};

export default OrderSuccessPage;
