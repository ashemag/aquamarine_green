import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
    const galleries = [
        {
            title: "Custom Built Homes Gallery",
            image: "/secrets-images/Aqua_Gallery_Pics_1.jpg",
            href: "/secrets/projects/custom-built-homes-gallery",
        },
        {
            title: "Modular Homes Gallery",
            image: "/secrets-images/Aqua_Gallery_Pics_2.jpg",
            href: "/secrets/projects/modular-homes-gallery",
        },
        {
            title: "House Raising/Moving Gallery",
            image: "/secrets-images/Aqua_Gallery_Pics_3.jpg",
            href: "/secrets/projects/house-raising-moving-gallery",
        },
    ];

    return (
        <div>
            <div className="page_no_caption">
                <h1 className="text-3xl font-bold text-[#2d6a8a] mb-4">Projects</h1>
            </div>

            <nav className="text-sm text-gray-500 mb-6">
                <Link href="/secrets" className="hover:text-[#2d6a8a]">Home</Link>
                {" » "}
                <span className="text-gray-700">Projects</span>
            </nav>

            <div className="flex flex-wrap gap-10 justify-center">
                {galleries.map((gallery, index) => (
                    <Link
                        key={index}
                        href={gallery.href}
                        className="block hover:opacity-90 transition-opacity"
                    >
                        <Image
                            src={gallery.image}
                            alt={gallery.title}
                            width={267}
                            height={269}
                            className="border border-gray-200"
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}
