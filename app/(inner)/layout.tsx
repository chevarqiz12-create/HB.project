
import { Header } from "@/widgets/header/ui/Header";

export default function InnerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header variant="light" />
      {children}
    </>
  );
}