
import { FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";
import { CONTACTS, MAP_EMBED_URL } from "@/shared/config/contacts";
import { cn } from "@/shared/lib/cn";

function ContactItem({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-4">
      <span className="mt-1 text-2xl text-brand-to">{icon}</span>
      <div>
        <p className="text-lg">{label}</p>
        <div className="mt-1 text-neutral-800">{children}</div>
      </div>
    </li>
  );
}

export function ContactsMap({ className }: { className?: string }) {
  return (
    <section id="contacts" className={cn("bg-neutral-100", className)}>
      <div className="grid lg:grid-cols-2">
        <div className="px-4 py-12 md:px-10 lg:py-20 lg:pl-[max(2.5rem,calc((100vw-1440px)/2+2.5rem))] lg:pr-10">
          <h2 className="text-3xl font-bold lg:text-4xl">Где мы находимся?</h2>

          <ul className="mt-10 flex flex-col gap-8">
            <ContactItem icon={<FiMapPin />} label="Наш адрес">
              {CONTACTS.address}
            </ContactItem>
            <ContactItem icon={<FiPhoneCall />} label="Телефон">
              <a href={`tel:${CONTACTS.phone.replace(/[^\d+]/g, "")}`} className="hover:underline">
                {CONTACTS.phone}
              </a>
            </ContactItem>
            <ContactItem icon={<FiMail />} label="Эл. адрес">
              <a href={`mailto:${CONTACTS.email}`} className="hover:underline">
                {CONTACTS.email}
              </a>
            </ContactItem>
          </ul>
        </div>

        <div className="min-h-[320px] lg:min-h-[460px]">
          <iframe
            src={MAP_EMBED_URL}
            title="Карта: где мы находимся"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="size-full border-0 grayscale"
          />
        </div>
      </div>
    </section>
  );
}