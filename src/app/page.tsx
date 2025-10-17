import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className=" flex flex-col items-center justify-center min-h-screen gap-4 w-full h-full">
      <h1 className=" font-normal text-sm leading-5 space-y-3 font-inter">
        Juspay Analytics Dashboard Base Template
      </h1>
      <Button variant="secondary" aria-label="submit" size="lg" className="font-inter">
        Continue with ShadCn
      </Button>
    </div>
  );
}
