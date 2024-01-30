import { Button } from "@/components/ui/button";
import { useState } from "react";

import { Loader2 } from 'lucide-react';

export default function Navbar() {


  const [loading, setLoading] = useState(false);

  function handleButtonClick() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }

  return (
    <div className="w-full flex justify-between px-10 items-center h-24 bg-black">
      <h1 className="text-white text-4xl font-black">
        KS <span className="text-4xl font-medium">|</span>
      </h1>
      <Button
      onClick={handleButtonClick}
      disabled={loading} 
      variant="secondary">
        {loading ? ( <Loader2 />) : ("Download Resume")}
      </Button>
    </div>
  );
}
