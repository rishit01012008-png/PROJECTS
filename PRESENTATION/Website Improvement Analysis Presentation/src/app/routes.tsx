import { createBrowserRouter } from "react-router";
import { PresentationLayout } from "./components/PresentationLayout";
import { CoverSlide } from "./components/slides/CoverSlide";
import { ExecutiveSummarySlide } from "./components/slides/ExecutiveSummarySlide";
import { NavigationSlide } from "./components/slides/NavigationSlide";
import { HeroSlide } from "./components/slides/HeroSlide";
import { ContentSlide } from "./components/slides/ContentSlide";
import { UXSlide } from "./components/slides/UXSlide";
import { AccessibilitySlide } from "./components/slides/AccessibilitySlide";
import { RecommendationsSlide } from "./components/slides/RecommendationsSlide";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: PresentationLayout,
    children: [
      { index: true, Component: CoverSlide },
      { path: "executive-summary", Component: ExecutiveSummarySlide },
      { path: "navigation-analysis", Component: NavigationSlide },
      { path: "hero-analysis", Component: HeroSlide },
      { path: "content-projects", Component: ContentSlide },
      { path: "ux-improvements", Component: UXSlide },
      { path: "accessibility-mobile", Component: AccessibilitySlide },
      { path: "recommendations", Component: RecommendationsSlide },
    ],
  },
]);