import Image from "next/image";
import StyledInput from "./components/StyledInput";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-2">
      <StyledInput />
      <StyledInput multiline row={2} startIcon="phone" endIcon="phone"  />
    </main>
  );
}
