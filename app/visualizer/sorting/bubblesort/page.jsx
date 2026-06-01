import Animation from "@/app/visualizer/sorting/bubblesort/animation";
import Content from "@/app/visualizer/sorting/bubblesort/content";
import Quiz from "@/app/visualizer/sorting/bubblesort/quiz";
import Code from "@/app/visualizer/sorting/bubblesort/codeBlock";
import ExploreOther from "@/app/components/ui/exploreOther";
import ModuleCard from "@/app/components/ui/ModuleCard";
import TrackVisit from "@/app/components/ui/TrackVisit";
import VisualizerPageLayout, { createVisualizerPaths } from "@/app/visualizer/components/VisualizerPageLayout";
import { MODULE_MAPS } from "@/lib/modulesMap";

export const metadata = {
  title: "Bubble Sort Algorithm | Step-by-Step Animation",
  description: "Visualize Bubble Sort in action with interactive animations.",
  robots: "index, follow",
  openGraph: { images: [{ url: "/og/sorting/bubbleSort.png", width: 1200, height: 630, alt: "Bubble Sort" }] },
};

export default function Page() {
  return (
    <>
      <TrackVisit name="Bubble Sort" path="/visualizer/array/bubblesort" category="Array" />
      <VisualizerPageLayout
        paths={createVisualizerPaths("Sorting", "Bubble Sort")}
        title="Bubble Sort"
        animation={<Animation />}
        content={<Content />}
        code={<Code />}
        quiz={<Quiz />}
        moduleCard={<ModuleCard moduleId={MODULE_MAPS.bubbleSort} description="Mark Bubble Sort as done and view it on your dashboard" initialDone={false} />}
        exploreOther={<ExploreOther title="Explore Sorting Algorithms" links={[
          { text: "Selection Sort", url: "/visualizer/array/selectionsort" },
          { text: "Insertion Sort", url: "/visualizer/array/insertionsort" },
          { text: "Merge Sort", url: "/visualizer/array/mergesort" },
          { text: "Quick Sort", url: "/visualizer/array/quicksort" },
          { text: "Comparison Mode", url: "/visualizer/array/comparison" },
          { text: "Counting Sort", url: "/visualizer/array/countingsort" },
          { text: "Heap Sort", url: "/visualizer/array/heapsort" },
        ]} />}
      />
    </>
  );
}
