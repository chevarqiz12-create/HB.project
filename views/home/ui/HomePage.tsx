
import { Hero } from "@/widgets/hero/ui/Hero";
import { About } from "@/widgets/about/ui/Abuot";
import { ServicesPreview } from "@/widgets/service-preview/ui/ServicesPreview"
import { ShopPreview } from "@/widgets/shop-preview";
import { GalleryPreview } from "@/widgets/gallry-preview";
import { ContactsMap } from "@/widgets/contacts-map";
import { Questions } from "@/widgets/questions";
import { Header } from "@/widgets/header/ui/Header";
export function HomePage() {
    return (
        <>

            <main>
                <Header/>
                <Hero />
                <About />
                <ServicesPreview />
                <ShopPreview />
                <GalleryPreview />
                <ContactsMap />
                <Questions />

            </main>
        </>
    );
}