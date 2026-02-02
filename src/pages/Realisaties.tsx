import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { X, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import galleryKitchen from "@/assets/gallery-kitchen.jpg";
import galleryBathroom from "@/assets/gallery-bathroom.jpg";
import galleryRoofing from "@/assets/gallery-roofing.jpg";
import galleryLiving from "@/assets/gallery-living.jpg";

export default function Realisaties() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState(t("Alle", "All"));

  const projects = [
    {
      id: 1,
      title: t("Keukenrenovatie Lievegem", "Kitchen Renovation Lievegem"),
      category: t("Keuken", "Kitchen"),
      image: galleryKitchen,
      description: t(
        "Complete keukenrenovatie met nieuwe kasten, werkbladen en vloer.",
        "Complete kitchen renovation with new cabinets, countertops and floor."
      ),
    },
    {
      id: 2,
      title: t("Moderne Badkamer Gent", "Modern Bathroom Ghent"),
      category: t("Badkamer", "Bathroom"),
      image: galleryBathroom,
      description: t(
        "Luxe badkamerrenovatie met inloopdouche en modern sanitair.",
        "Luxury bathroom renovation with walk-in shower and modern fixtures."
      ),
    },
    {
      id: 3,
      title: t("Dakrenovatie Eeklo", "Roof Renovation Eeklo"),
      category: t("Dakwerken", "Roofing"),
      image: galleryRoofing,
      description: t(
        "Volledige dakvernieuwing met nieuwe pannen en isolatie.",
        "Complete roof renewal with new tiles and insulation."
      ),
    },
    {
      id: 4,
      title: t("Woonkamer Transformatie", "Living Room Transformation"),
      category: t("Interieur", "Interior"),
      image: galleryLiving,
      description: t(
        "Nieuwe parketvloer en schilderwerken voor een frisse look.",
        "New parquet floor and painting for a fresh look."
      ),
    },
    {
      id: 5,
      title: t("Badkamer Renovatie Aalst", "Bathroom Renovation Aalst"),
      category: t("Badkamer", "Bathroom"),
      image: galleryBathroom,
      description: t(
        "Compacte badkamer optimaal ingericht met kwaliteitsafwerking.",
        "Compact bathroom optimally designed with quality finishing."
      ),
    },
    {
      id: 6,
      title: t("Dakproject Deinze", "Roof Project Deinze"),
      category: t("Dakwerken", "Roofing"),
      image: galleryRoofing,
      description: t(
        "Nieuwe dakbedekking met dakramen voor extra licht.",
        "New roofing with skylights for extra light."
      ),
    },
  ];

  const categories = [
    t("Alle", "All"),
    t("Keuken", "Kitchen"),
    t("Badkamer", "Bathroom"),
    t("Dakwerken", "Roofing"),
    t("Interieur", "Interior"),
  ];

  const [lightboxImage, setLightboxImage] = useState<typeof projects[0] | null>(null);

  const filteredProjects =
    selectedCategory === t("Alle", "All")
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container-wide text-center">
          <h1 className="text-primary-foreground mb-4">
            {t("Onze Realisaties", "Our Projects")}
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-primary-foreground/80">
            {t(
              "Bekijk een selectie van onze afgeronde projecten. Elk project weerspiegelt onze toewijding aan kwaliteit en vakmanschap.",
              "View a selection of our completed projects. Each project reflects our dedication to quality and craftsmanship."
            )}
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container-wide">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded font-heading font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-background text-muted-foreground hover:bg-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer"
                onClick={() => setLightboxImage(project)}
              >
                <div className="relative overflow-hidden rounded shadow-architect">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                      <p className="text-sm text-secondary font-medium mb-1">
                        {project.category}
                      </p>
                      <h3 className="text-lg font-heading font-semibold text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-primary/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground hover:text-secondary transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage.image}
              alt={lightboxImage.title}
              className="w-full h-auto max-h-[70vh] object-contain rounded"
            />
            <div className="mt-4 text-primary-foreground text-center">
              <p className="text-secondary font-medium mb-1">
                {lightboxImage.category}
              </p>
              <h3 className="text-2xl font-heading font-semibold">
                {lightboxImage.title}
              </h3>
              <p className="mt-2 text-primary-foreground/80">
                {lightboxImage.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="section-padding bg-blueprint-light">
        <div className="container-wide text-center">
          <h2 className="mb-4">
            {t("Uw Project Als Volgende?", "Your Project Next?")}
          </h2>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            {t(
              "Laat u inspireren door ons werk en ontdek wat wij voor uw woning kunnen betekenen.",
              "Be inspired by our work and discover what we can do for your home."
            )}
          </p>
          <Button variant="blueprint" size="xl" asChild>
            <Link to="/contact">
              {t("Start Uw Project", "Start Your Project")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
