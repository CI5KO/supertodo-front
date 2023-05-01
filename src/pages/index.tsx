import Navbar from "@/components/navbar";
import { Text } from "@nextui-org/react";
import { useTheme } from "@nextui-org/react";

export default function Home() {
  const { isDark } = useTheme();
  return (
    <>
      <Navbar overlap />
      <div className="container mx-auto max-w-[750px] h-screen grid">
        {/* prettier-ignore */}
        <div className={`w-[500px] h-[500px] self-center justify-self-center rounded-lg ${isDark ? "bg-[#8A4FFF]" : "bg-[#FF7477]"}`}
        >
          <Text className="text-center">This is a simple text!</Text>
        </div>
      </div>
    </>
  );
}
