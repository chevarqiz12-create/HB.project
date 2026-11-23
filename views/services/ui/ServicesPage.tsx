
import { ContactsMap } from "@/widgets/contacts-map";
import { Questions } from "@/widgets/questions";

export function ServicesPage() {
  return (
    <main>
      <div className="h-20 bg-neutral-100" /> 
      <ContactsMap className="bg-white" />
      <Questions />
    </main>
  );
}