type AssetMap = Record<string, string>;

export type LocalAssetItem = {
  src: string;
  relativePath: string;
  category: string;
  subPath: string;
  filename: string;
};

const RAW_ASSETS = import.meta.glob(
  [
    "/src/assets/**/*.{jpg,jpeg,png,webp,bmp,JPG,JPEG,PNG,WEBP,BMP}",
    "@/assets/**/*.{jpg,jpeg,png,webp,bmp,JPG,JPEG,PNG,WEBP,BMP}",
  ],
  { eager: true, import: "default" },
) as AssetMap;

export const LOCAL_ASSETS: LocalAssetItem[] = Object.entries(RAW_ASSETS)
  .map(([path, src]) => {
    const normalized = path.replace(/\\/g, "/");
    const marker = "/assets/";
    const markerIndex = normalized.lastIndexOf(marker);
    const relativePath = markerIndex >= 0 ? normalized.slice(markerIndex + marker.length) : normalized;
    const parts = relativePath.split("/");
    const category = parts[0] || "Other";
    const filename = parts[parts.length - 1] || "image";
    const subPath = parts.slice(1, -1).join(" / ");
    return { src, relativePath, category, subPath, filename };
  })
  .sort((a, b) => a.relativePath.localeCompare(b.relativePath));

export function assetsFromCategory(category: string) {
  return LOCAL_ASSETS.filter((item) => item.category === category);
}

export function groupBySubPath(items: LocalAssetItem[]) {
  return items.reduce<Record<string, LocalAssetItem[]>>((acc, item) => {
    const key = item.subPath || "General";
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});
}

