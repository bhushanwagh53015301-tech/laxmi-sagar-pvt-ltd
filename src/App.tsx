import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Preloader } from "@/components/Preloader";
import { PageTransition } from "@/components/PageTransition";
import { Toaster } from "@/components/ui/sonner";

export function AppLayout() {
  return (
    <div className="relative isolate">
      <div className="site-grid-overlay pointer-events-none fixed inset-0 z-[1]" aria-hidden="true" />
      <Preloader />
      <Header />
      <main className="relative z-10 min-h-screen">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
      <WhatsAppFab />
      <Toaster richColors position="top-right" />
    </div>
  );
}
