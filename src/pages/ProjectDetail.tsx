import { useEffect, useMemo, useRef, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { getProjectById } from "@/data/projects";

const drawingLabels = ["Site Plan", "Ground Floor Plan", "First Floor Plan", "Section A", "Section B"];

const getBreadcrumbCategory = (category: string) => {
  const normalizedCategory = category.toLowerCase();

  if (normalizedCategory.includes("urban")) {
    return "Urbanism";
  }

  if (normalizedCategory.includes("landscape")) {
    return "Landscape";
  }

  if (normalizedCategory.includes("conservation")) {
    return "Conservation";
  }

  if (normalizedCategory.includes("research")) {
    return "Research Paper";
  }

  return "Architecture";
};

const getBreadcrumbHref = (category: string) => {
  const normalizedCategory = category.toLowerCase();

  if (normalizedCategory.includes("urban")) {
    return "/projects/urbanism";
  }

  if (normalizedCategory.includes("landscape")) {
    return "/projects/landscape";
  }

  if (normalizedCategory.includes("conservation")) {
    return "/projects/conservation";
  }

  if (normalizedCategory.includes("research")) {
    return "/research";
  }

  return "/projects/architecture";
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = getProjectById(id || "");
  const galleryImages = useMemo(() => (project?.images ?? []).filter(Boolean), [project?.images]);
  const descriptionParagraphs = project?.description.split("\n\n").filter(Boolean) ?? [];
  const breadcrumbCategory = project ? getBreadcrumbCategory(project.category) : "Architecture";
  const breadcrumbHref = project ? getBreadcrumbHref(project.category) : "/projects/architecture";
  const breadcrumbTitle = project ? `${project.title} at ${project.location.split(",")[0]}` : "";
  const drawingsTrackRef = useRef<HTMLDivElement | null>(null);
  const autoScrollFrameRef = useRef<number | null>(null);
  const autoScrollDelayRef = useRef<number | null>(null);
  const isHoveringRef = useRef(false);
  const [activeDrawingIndex, setActiveDrawingIndex] = useState(0);

  const projectDrawings = useMemo(
    () =>
      galleryImages.slice(0, drawingLabels.length).map((image, index) => ({
        image,
        label: drawingLabels[index],
      })),
    [galleryImages]
  );

  const scrollToDrawing = (index: number) => {
    const track = drawingsTrackRef.current;
    const items = track?.querySelectorAll<HTMLElement>("[data-drawing-slide]");

    if (!track || !items?.length) {
      return;
    }

    const boundedIndex = ((index % projectDrawings.length) + projectDrawings.length) % projectDrawings.length;
    items[boundedIndex]?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    setActiveDrawingIndex(boundedIndex);
  };

  useEffect(() => {
    const track = drawingsTrackRef.current;
    if (!track || projectDrawings.length <= 1) {
      return;
    }

    const slideWidth = () => track.clientWidth || 1;
    const loopBoundary = () => slideWidth() * projectDrawings.length;

    const step = () => {
      if (isHoveringRef.current) {
        autoScrollFrameRef.current = window.requestAnimationFrame(step);
        return;
      }

      track.scrollLeft += Math.max(slideWidth() / 420, 0.8);

      if (track.scrollLeft >= loopBoundary()) {
        track.scrollLeft = track.scrollLeft - loopBoundary();
      }

      autoScrollFrameRef.current = window.requestAnimationFrame(step);
    };

    autoScrollDelayRef.current = window.setTimeout(() => {
      autoScrollFrameRef.current = window.requestAnimationFrame(step);
    }, 1800);

    return () => {
      if (autoScrollDelayRef.current) {
        window.clearTimeout(autoScrollDelayRef.current);
      }
      if (autoScrollFrameRef.current) {
        window.cancelAnimationFrame(autoScrollFrameRef.current);
      }
    };
  }, [projectDrawings.length]);

  useEffect(() => {
    const track = drawingsTrackRef.current;
    if (!track) {
      return;
    }

    const handleScroll = () => {
      const slideWidth = track.clientWidth || 1;
      const nextIndex = Math.round(track.scrollLeft / slideWidth) % Math.max(projectDrawings.length, 1);
      setActiveDrawingIndex(nextIndex);

      if (projectDrawings.length > 0 && track.scrollLeft >= slideWidth * projectDrawings.length) {
        track.scrollLeft -= slideWidth * projectDrawings.length;
      }
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => track.removeEventListener("scroll", handleScroll);
  }, [projectDrawings.length]);

  const infoItems = [
    { label: "Year", value: project?.year ?? "—" },
    {
      label: "Client",
      value: project?.info?.find((item) => item.label === "Client")?.value ?? "—",
    },
    { label: "Typology", value: project?.category ?? "—" },
    {
      label: "Area",
      value:
        project?.info?.find((item) => item.label === "Area")?.value ??
        project?.builtUpArea ??
        project?.siteArea ??
        "—",
    },
    {
      label: "Status",
      value: project?.info?.find((item) => item.label === "Status")?.value ?? "—",
    },
  ];

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-5 lg:pt-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="animate-fade-in max-w-5xl">
            <p className="mb-3 text-xs font-normal tracking-[0.18em] text-muted-foreground sm:text-sm">
              <Link to={breadcrumbHref} className="font-normal text-muted-foreground transition-colors hover:text-foreground">
                {breadcrumbCategory}
              </Link>
              <span className="px-2 text-muted-foreground/50">|</span>
              <span className="text-sm font-semibold tracking-normal text-foreground sm:text-base">
                {breadcrumbTitle}
              </span>
            </p>

            <h1 className="font-serif text-heading-1 text-left text-foreground">
              {project.title}
            </h1>

            <div className="mt-6 border border-border bg-white p-6 sm:p-8">
              <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
                {infoItems.map((item) => (
                  <div key={item.label}>
                    <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {item.label}
                    </dt>
                    <dd className="mt-2 text-sm leading-6 text-foreground sm:text-base">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {descriptionParagraphs.length > 0 && (
              <div className="mt-8 max-w-4xl space-y-6 text-left text-[1rem] leading-7 text-foreground sm:text-[1.05rem]">
                <p>{descriptionParagraphs[0]}</p>
              </div>
            )}

            {galleryImages.length > 0 && (
              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {galleryImages.map((image, index) => (
                  <div key={`${project.id}-image-${index}`} className="overflow-hidden border border-border bg-white">
                    <img
                      src={image}
                      alt={`${project.title} image ${index + 1}`}
                      className="aspect-[4/3] h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            {descriptionParagraphs.length > 1 && (
              <div className="mt-10 max-w-4xl space-y-6 text-left text-[1rem] leading-7 text-foreground sm:text-[1.05rem]">
                {descriptionParagraphs.slice(1).map((paragraph, index) => (
                  <p key={`${project.id}-paragraph-${index}`}>{paragraph}</p>
                ))}
              </div>
            )}

            {projectDrawings.length > 0 && (
              <section className="mt-14 relative left-1/2 w-screen -translate-x-1/2">
                <div className="mx-auto max-w-7xl px-6 lg:px-12">
                  <h2 className="font-serif text-heading-2 text-left text-foreground">Project Drawings</h2>
                </div>

                <div
                  className="mt-6 overflow-x-auto scroll-smooth"
                  style={{ scrollBehavior: "smooth" }}
                  ref={drawingsTrackRef}
                  onMouseEnter={() => {
                    isHoveringRef.current = true;
                  }}
                  onMouseLeave={() => {
                    isHoveringRef.current = false;
                  }}
                >
                  <div className="flex w-max gap-6 px-6 pb-3 lg:px-12">
                    {[...projectDrawings, ...projectDrawings].map((drawing, index) => (
                      <article
                        key={`${project.id}-drawing-${index}`}
                        data-drawing-slide
                        className="w-[92vw] max-w-[1200px] flex-none snap-center sm:w-[88vw] lg:w-[94vw]"
                      >
                        <div className="mx-auto flex min-h-[52vh] items-center justify-center bg-white px-2 py-2 sm:min-h-[60vh] lg:min-h-[68vh]">
                          <img
                            src={drawing.image}
                            alt={`${project.title} - ${drawing.label}`}
                            className="h-auto w-full max-h-[66vh] object-contain"
                            draggable={false}
                          />
                        </div>
                        <p className="mt-4 text-left text-xs uppercase tracking-[0.18em] text-muted-foreground">
                          {drawing.label}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="mx-auto mt-5 flex max-w-7xl items-center justify-between gap-4 px-6 lg:px-12">
                  <button
                    type="button"
                    onClick={() => scrollToDrawing(activeDrawingIndex - 1)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-foreground transition-colors hover:bg-muted"
                    aria-label="Previous drawing"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {projectDrawings.map((drawing, index) => (
                      <button
                        key={`${project.id}-indicator-${drawing.label}`}
                        type="button"
                        onClick={() => scrollToDrawing(index)}
                        className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                          activeDrawingIndex === index ? "bg-foreground" : "bg-foreground/25"
                        }`}
                        aria-label={`Go to ${drawing.label}`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => scrollToDrawing(activeDrawingIndex + 1)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-foreground transition-colors hover:bg-muted"
                    aria-label="Next drawing"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </section>
            )}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProjectDetail;
