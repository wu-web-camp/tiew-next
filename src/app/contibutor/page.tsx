import { readdir, readFile } from "fs/promises";
import { join } from "path";
import { Contributor } from "@/types/contributor";

async function getContributors(): Promise<Contributor[]> {
  "use server";

  try {
    const contributeDir = join(process.cwd(), "contribute");
    const files = await readdir(contributeDir);

    const contributors: Contributor[] = [];

    for (const file of files) {
      if (file.endsWith(".md")) {
        const name = file.replace(".md", "");
        const filePath = join(contributeDir, file);

        try {
          const content = await readFile(filePath, "utf-8");
          contributors.push({
            name,
            filename: file,
            content: content.trim(),
          });
        } catch {
          // If file can't be read, still add the contributor with just the name
          contributors.push({
            name,
            filename: file,
          });
        }
      }
    }

    // Sort contributors alphabetically by name
    return contributors.sort((a, b) => a.name.localeCompare(b.name));
  } catch (error) {
    console.error("Error reading contributors:", error);
    return [];
  }
}

export default async function ContributorPage() {
  const contributors = await getContributors();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#A54141]/10 to-[#A54141]/5 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#A54141] mb-4">
            Contributors
          </h1>
          <p className="text-lg text-gray-600">
            Meet the amazing people who contributed to this project
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {contributors.map((contributor) => (
            <div
              key={contributor.filename}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#A54141] to-[#8B3636] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">
                    {contributor.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 capitalize">
                  {contributor.name}
                </h3>
                {contributor.content && (
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {contributor.content}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {contributors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No contributors found</p>
          </div>
        )}
      </div>
    </div>
  );
}
