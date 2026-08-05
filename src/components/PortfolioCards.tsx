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

export function PortfolioCards({
  filteredItems,
  activeTab,
  activeSubTab,
}: PortfolioCardsProps) {
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

  return (
    <div
      className={cn(
        "grid gap-10 max-w-[1200px] mx-auto w-full px-4 justify-items-center",
        getGridClasses(),
      )}>
      {filteredItems?.map((item) => {
        if (isWebsite) {
          return <WebsiteCard key={item?.id} item={item} />;
        }
        if (isBrochure || isSocialFlyer) {
          return <BrochureCard key={item?.id} item={item} />;
        }
        if (isCatalog) {
          return <CatalogCard key={item?.id} item={item} />;
        }
        if (isLogo) {
          return <LogoCard key={item?.id} item={item} />;
        }
        if (isSocialMobile || isTata) {
          return <MobileFrameCard key={item?.id} item={item} />;
        }
        if (isMobileApp) {
          return <MobileFrameCard key={item?.id} item={item} forcePortrait />;
        }
        if (isAmazon || isPackaging) {
          return <AmazonCard key={item?.id} item={item} />;
        }
        if (isSocialBanner) {
          return <BannerCard key={item?.id} item={item} />;
        }
        return <StandardCard key={item?.id} item={item} />;
      })}

      {(!filteredItems || filteredItems?.length === 0) && (
        <div className="col-span-full py-16 text-center text-[var(--text-secondary)] text-lg">
          No projects in this category yet. Stay tuned!
        </div>
      )}
    </div>
  );
}
