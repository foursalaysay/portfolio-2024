import { Button } from '@/components/ui/button'

export default function Navbar(){
    return(
        <div className="w-full flex justify-between items-center h-32 bg-black">
            <h1>KS | <span>Kyle Salaysay</span></h1>
            <Button variant="secondary">Resume</Button>
        </div>
    )
}