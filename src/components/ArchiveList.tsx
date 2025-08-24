import { useContext } from "react";
import { MobileContext } from "../context/MobileContext";
import MainTitle from "./MainTitle";
import NotesList from "./NotesList";
import type { Note } from "../utils/useData";
import type { View } from "../constants/mobileViews";

// TEMPORARY FILTER NOTES WILL BE MADE DYNAMIC
const archivedNotes: Note[] = [
  {
    id: "8",
    title: "Meal Prep Ideas",
    tags: ["Cooking", "Health", "Recipes"],
    content:
      "Weekly Meal Prep Plan:\n\nBreakfast Options:\n- Overnight oats\n- Egg muffins\n- Smoothie packs\n\nLunch Containers:\n- Greek chicken bowl\n- Buddha bowls\n- Tuna pasta salad\n\nSnacks:\n- Cut vegetables\n- Mixed nuts\n- Greek yogurt parfait\n\nPrep Time: Sunday 2-4pm\nStorage: Glass containers\nLasts: 4-5 days",
    lastEdited: "2024-10-12T09:45:15Z",
    isArchived: false,
  },
  {
    id: "9",
    title: "Reading List",
    tags: ["Personal", "Dev"],
    content:
      "Current Reading Queue:\n\n1. Technical Books\n- Clean Architecture by Robert Martin\n- Designing Data-Intensive Applications\n- TypeScript Design Patterns\n\n2. Personal Development\n- Deep Work by Cal Newport\n- Atomic Habits\n- The Psychology of Money\n\nCurrently Reading: Clean Architecture\nNext Up: Deep Work\n\nGoal: One book per month",
    lastEdited: "2024-10-05T12:20:30Z",
    isArchived: false,
  },
  {
    id: "10",
    title: "Fitness Goals 2025",
    tags: ["Fitness", "Health", "Personal"],
    content:
      "2025 Fitness Objectives:\n\n1. Strength Goals\n- Bench press: 225 lbs\n- Squat: 315 lbs\n- Deadlift: 405 lbs\n\n2. Cardio Goals\n- Run half marathon\n- 5k under 25 minutes\n\n3. Habits\n- Gym 4x per week\n- Daily 10k steps\n- Sleep 7+ hours\n\nTrack all workouts in Strong app",
    lastEdited: "2024-09-22T07:30:00Z",
    isArchived: false,
  },
];

const dummyDataObj = {
  data: archivedNotes,
  error: null,
  isLoading: false,
};

type Props = {
  setActiveView: React.Dispatch<React.SetStateAction<View>>;
};

const ArchiveList = ({ setActiveView }: Props) => {
  const { isDesktop } = useContext(MobileContext);
  return (
    <>
      {!isDesktop && (
        <>
          <div className="mobile-layout-main-heading">
            <MainTitle title="Archived Notes" />
            <p>
              All your archived notes are stored here. You can restore or delete
              them anytime.
            </p>
          </div>
          <NotesList dataObj={dummyDataObj} setActiveView={setActiveView} />
        </>
      )}
    </>
  );
};

export default ArchiveList;
