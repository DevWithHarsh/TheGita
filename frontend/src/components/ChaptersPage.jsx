import { useState } from "react";
import { chaptersData } from "../data/chapters";
import ChaptersList from "../pages/ChaptersList";
import ChapterView from "../pages/ChapterView";

const ChaptersPage = () => {
  const [selectedChapter, setSelectedChapter] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {!selectedChapter ? (
          // Chapter List View
          <ChaptersList chapters={chaptersData} setSelectedChapter={setSelectedChapter} />
        ) : (
          // Chapter Detail View
          <div>
            <button
              onClick={() => setSelectedChapter(null)}
              className="mb-6 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
            >
              ← Back to All Chapters
            </button>
            <ChapterView chapter={selectedChapter} setSelectedChapter={setSelectedChapter} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChaptersPage;
