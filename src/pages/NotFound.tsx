import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <Helmet>
        <title>Pagina Niet Gevonden | Tophuis Design Hub</title>
        <meta name="description" content="De gevraagde pagina kon niet worden gevonden. Keer terug naar de homepage." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="flex min-h-[60vh] items-center justify-center bg-muted">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">Oops! Pagina niet gevonden</p>
          <a href="/" className="text-primary underline hover:text-primary/90">
            Terug naar Home
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
