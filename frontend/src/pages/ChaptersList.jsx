const ChaptersList = ({ chapters, setSelectedChapter }) => {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        📜 All Chapters
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {chapters.map((chapter) => (
          <div
            key={chapter.id}
            onClick={() => setSelectedChapter(chapter)}
            className="group p-6 bg-white shadow-md rounded-2xl cursor-pointer hover:shadow-xl hover:scale-105 transition transform duration-300"
          >
            <h3 className="text-xl font-semibold text-orange-600 group-hover:text-orange-700">
              {chapter.title}
            </h3>
            <p className="text-gray-600">{chapter.subtitle}</p>
            <p className="mt-3 text-sm text-gray-500">{chapter.verseCount} Verses</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChaptersList;
