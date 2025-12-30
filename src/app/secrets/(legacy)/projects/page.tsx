import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
    const projects = [
        {
            title: "aquamarine-green.net",
            subtitle: "Visit Legacy Website",
            image: "/secrets-images/aqua-logo.png",
            href: "https://aquamarine-green.net",
            external: true,
            description: "View the original Aqua Marine Green website",
        },
        {
            title: "Beach Haven West",
            subtitle: "Photo Gallery",
            image: "/secrets-images/Aqua_Gallery_Pics_1.jpg",
            href: "/secrets/projects/beach-haven-west",
            external: false,
            description: "Coastal deck project in New York",
        },
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold text-[#2d6a8a] mb-6">Projects</h1>

            <nav className="text-sm text-gray-500 mb-6">
                <a href="/secrets" className="hover:text-[#2d6a8a]">Home</a> » <span>Projects</span>
            </nav>

            <p className="text-gray-600 mb-8">
                Select a project to explore our work or visit our legacy website.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                {projects.map((project, index) => (
                    <Link
                        key={index}
                        href={project.href}
                        target={project.external ? "_blank" : undefined}
                        rel={project.external ? "noopener noreferrer" : undefined}
                        className="group block"
                    >
                        <div className="relative overflow-hidden rounded-lg shadow-lg border-2 border-transparent hover:border-[#3a7ca5] transition-all duration-300">
                            <div className="aspect-[4/3] relative bg-gradient-to-br from-[#3a7ca5] to-[#2d6a8a] flex items-center justify-center">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={300}
                                    height={225}
                                    className={`object-cover group-hover:scale-105 transition-transform duration-300 ${project.external ? "w-3/4 h-auto" : "w-full h-full absolute inset-0"
                                        }`}
                                />
                                {project.external && (
                                    <div className="absolute top-3 right-3 bg-white/90 rounded-full p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#2d6a8a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                            <div className="p-4 bg-white">
                                <h3 className="font-bold text-lg text-[#2d6a8a] group-hover:text-[#1e4a63]">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-[#3a7ca5] font-medium">
                                    {project.subtitle}
                                </p>
                                <p className="text-xs text-gray-500 mt-2">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-12 text-center">
                <p className="text-gray-600">
                    View our portfolio of completed projects across Long Beach Island and the surrounding areas.
                </p>
                <Link
                    href="/secrets/contact-us"
                    className="inline-block mt-4 bg-[#3a7ca5] text-white py-2 px-6 rounded-lg hover:bg-[#2d6a8a] transition-colors"
                >
                    Contact Us for More Information
                </Link>
            </div>
        </div>
    );
}

