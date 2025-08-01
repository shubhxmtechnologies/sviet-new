import Link from "next/link"
import { bannerContent } from "./top-banner-data"
export function TopBanner() {
  return (
    <div className="bg-[#007bff]  py-2 text-center text-sm text-white overflow-hidden">
      <div className="whitespace-nowrap  marquee-animation inline-block py-0.5">
        {" "}
        {/* Changed class name */}
        {/* Duplicate content for seamless looping */}
        {bannerContent.map((item, i) => (
          <span key={`first-${i}`} className="px-8 font-medium">
            {item.text}{" "}
            <Link href={item.linkHref} className="text-yellow-300 hover:underline">
              {item.linkText}
            </Link>
          </span>
        ))}
        {bannerContent.map((item, i) => (
          <span key={`second-${i}`} className="px-8">
            {item.text}{" "}
            <Link href={item.linkHref} className="text-yellow-300 hover:underline">
              {item.linkText}
            </Link>
          </span>
        ))}
      </div>
    </div>
  )
}
