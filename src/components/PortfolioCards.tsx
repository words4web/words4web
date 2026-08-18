import type { PortfolioCardsProps } from "../types/portfolio";
import { WebsiteCard } from "./WebsiteCard";
import { StandardCard } from "./StandardCard";
import { BrochureCard } from "./BrochureCard";
import { CatalogCard } from "./CatalogCard";
import { LogoCard } from "./LogoCard";
import { MobileFrameCard } from "./MobileFrameCard";
import { BannerCard } from "./BannerCard";
import { AmazonCard } from "./AmazonCard";
import { cn } from "@/src/lib/utils";

interface ExtendedPortfolioCardsProps extends PortfolioCardsProps {
  isMasonry?: boolean;
}

export function PortfolioCards({
  filteredItems,
  activeTab,
  activeSubTab,
  isMasonry = false,
}: ExtendedPortfolioCardsProps) {
  const isWebsite = activeTab === "Website Design";
  const isBrochure = activeTab === "Brochure";
  const isCatalog = activeTab === "Catalog";
  const isLogo = activeTab === "Logos";
  const isTata = activeTab === "For TATA Consumers Pvt. Ltd.";
  const isAmazon = activeTab === "Amazon Marketing";
  const isMobileApp = activeTab === "Mobile App Development";
  const isPackaging = activeTab === "Packaging";

  const isSocial = activeTab === "Social Media Marketing";
  const isSocialMobile =
    isSocial && activeSubTab !== "Flyers" && activeSubTab !== "Banners";
  const isSocialFlyer = isSocial && activeSubTab === "Flyers";
  const isSocialBanner = isSocial && activeSubTab === "Banners";

  const getGridClasses = () => {
    if (isLogo || isSocialMobile || isTata) {
      return "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4";
    }
    if (isAmazon) {
      return "grid-cols-1 sm:grid-cols-2";
    }
    if (isMobileApp) {
      return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    }
    if (
      isWebsite ||
      isBrochure ||
      isCatalog ||
      isSocialFlyer ||
      isSocialBanner ||
      isPackaging
    ) {
      return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    }
    return "grid-cols-1 md:grid-cols-2";
  };

  const renderCard = (item: any) => {
    const cat = item?.category;
    let cardElement;

    if (cat === "Website Design") {
      cardElement = <WebsiteCard item={item} />;
    } else if (cat === "Brochure") {
      cardElement = <BrochureCard item={item} />;
    } else if (cat === "Catalog") {
      cardElement = <CatalogCard item={item} />;
    } else if (cat === "Logos") {
      cardElement = <LogoCard item={item} />;
    } else if (
      cat === "Social Media Marketing" ||
      cat === "For TATA Consumers Pvt. Ltd."
    ) {
      if (item?.subCategory === "Flyers") {
        cardElement = <MobileFrameCard item={item} forcePortrait />;
      } else if (item?.subCategory === "Banners") {
        cardElement = <BannerCard item={item} />;
      } else {
        cardElement = <MobileFrameCard item={item} />;
      }
    } else if (cat === "Mobile App Development") {
      cardElement = <MobileFrameCard item={item} forcePortrait />;
    } else if (cat === "Amazon Marketing" || cat === "Packaging") {
      cardElement = <AmazonCard item={item} />;
    } else {
      cardElement = <StandardCard item={item} />;
    }

    if (isMasonry) {
      const displayCategory =
        cat === "Social Media Marketing" && item?.subCategory
          ? `Social (${item.subCategory})`
          : cat === "For TATA Consumers Pvt. Ltd."
            ? "TATA Consumer"
            : cat;

      return (
        <div
          key={item?.id}
          className="relative group/badge w-full flex justify-center">
          {cardElement}
          <div className="absolute top-3 left-4 z-[25] bg-black/60 backdrop-blur-md text-white/95 border border-white/10 px-2.5 py-0.5 rounded-full text-[9px] uppercase font-extrabold tracking-widest pointer-events-none group-hover/badge:bg-[var(--primary)] transition-colors duration-300">
            {displayCategory}
          </div>
        </div>
      );
    }

    return (
      <div key={item?.id} className="w-full flex justify-center">
        {cardElement}
      </div>
    );
  };

  if (isMasonry) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto w-full px-4 justify-items-center">
        {filteredItems?.map(renderCard)}
        {(!filteredItems || filteredItems?.length === 0) && (
          <div className="py-16 text-center text-[var(--text-secondary)] text-lg w-full col-span-full">
            No projects in this category yet. Stay tuned!
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "grid gap-10 max-w-[1200px] mx-auto w-full px-4 justify-items-center",
        getGridClasses(),
      )}>
      {filteredItems?.map(renderCard)}

      {(!filteredItems || filteredItems?.length === 0) && (
        <div className="col-span-full py-16 text-center text-[var(--text-secondary)] text-lg">
          No projects in this category yet. Stay tuned!
        </div>
      )}
    </div>
  );
}
