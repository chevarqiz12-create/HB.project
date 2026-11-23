
import { ContactsMap } from "@/widgets/contacts-map";
import { Questions } from "@/widgets/questions";

export function ContactsPage() {
  return (
    <main>
      <ContactsMap  className="bg-white" />
      <Questions />
    </main>
  );
}