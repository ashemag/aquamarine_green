import Link from "next/link";

export default function ModularHomesPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-[#2d6a8a] mb-6">Modular Homes</h1>

            <nav className="text-sm text-gray-500 mb-6">
                <a href="/secrets" className="hover:text-[#2d6a8a]">Home</a> » <span>Modular Homes</span>
            </nav>

            <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-6">
                    Aqua Marine offers dozens of modular home floor plans that offer a variety of styles, sizes, and functions to meet your everyday living needs.
                </p>

                <h2 className="text-xl font-bold text-[#2d6a8a] mt-8 mb-4">When you choose Aqua Marine you have three options:</h2>

                <ol className="list-decimal pl-6 mb-6 space-y-2">
                    <li>Select one of our many Standard Modular Home Floor Plans</li>
                    <li>Customize one of our Standard Modular Home Floor Plans</li>
                    <li>Complete Custom Design – uniquely your own</li>
                </ol>

                <h2 className="text-xl font-bold text-[#2d6a8a] mt-8 mb-4">Experience Makes the Difference</h2>

                <p className="mb-6">
                    At Aqua Marine we have the experience and knowledge to help guide you through our modular home floor plans to find one that suits your living requirements and design preferences. Select from any of our standard plans or customize a floor plan of your own.
                </p>

                <div className="bg-gray-50 rounded-lg p-6 my-8 border-l-4 border-[#3a7ca5]">
                    <p className="italic">
                        Aqua Marine Green is the proud builder of choice for <strong>Westchester Modular Homes</strong> in the Long Beach Island/Beach Haven West area. Our co-partnership with Westchester Modular Homes along with Aqua Marine&apos;s on-site expertise optimizes the building experience for our customers. This allows our customers to work with a staff that combines design and engineering to fully implement a smart and energy efficient home to suit their lifestyle.
                    </p>
                </div>

                <Link
                    href="/secrets/projects"
                    className="inline-block bg-[#3a7ca5] text-white py-3 px-8 rounded-lg hover:bg-[#2d6a8a] transition-colors font-semibold"
                >
                    View Homes
                </Link>
            </div>
        </div>
    );
}

