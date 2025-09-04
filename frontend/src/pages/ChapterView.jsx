import { chaptersData } from "../data/chapters";

const ChapterView = ({ chapter, setSelectedChapter }) => {
  const currentIndex = chaptersData.findIndex((c) => c.id === chapter.id);
  const prevChapter = currentIndex > 0 ? chaptersData[currentIndex - 1] : null;
  const nextChapter = currentIndex < chaptersData.length - 1 ? chaptersData[currentIndex + 1] : null;

  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 relative overflow-hidden">
      {/* Decorative gradient top bar */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-t-2xl"></div>

      <h2 className="text-3xl md:text-4xl font-bold text-orange-700">{chapter.title}</h2>
      <p className="text-lg text-gray-600 italic mt-1">{chapter.subtitle}</p>
      <p className="mt-6 text-gray-700 leading-relaxed">{chapter.summary}</p>

      {/* Navigation buttons */}
      <div className="mt-8 flex justify-between items-center gap-2">
        <button
          onClick={() => prevChapter && setSelectedChapter(prevChapter)}
          className={`px-4 py-2 rounded-lg transition-all text-sm md:text-base whitespace-nowrap ${
            prevChapter
              ? "bg-orange-500 text-white hover:bg-orange-600"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
          disabled={!prevChapter}
        >
          ← Previous Chapter
        </button>

        <span className="text-gray-500 font-medium text-sm md:text-base">
          Chapter {chapter.id} / {chaptersData.length}
        </span>

        <button
          onClick={() => nextChapter && setSelectedChapter(nextChapter)}
          className={`px-4 py-2 rounded-lg transition-all text-sm md:text-base whitespace-nowrap ${
            nextChapter
              ? "bg-orange-500 text-white hover:bg-orange-600"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
          disabled={!nextChapter}
        >
          Next Chapter →
        </button>
      </div>
    </div>
  );
};

export default ChapterView;
