
import { Header } from "@/widgets/header/ui/Header";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header variant="dark" />
      {children}
    </>
  );
}