import Image from "next/image";

const greenFeatures = [
    "Passive solar design",
    "Low-Emissivity glass",
    "Natural ventilation",
    "Drought-tolerant landscape",
    "Reclaimed wood floors",
    "Energy efficient windows",
    "Smart Home System",
    "Low no VOC paints and stains",
    "ENERGY STAR windows and doors",
    "ENERGY STAR appliances",
    "ENERGY STAR lighting",
    "Tankless water heater",
    "Cabinetry from regionally harvested wood",
    "Renewable resources",
    "High-efficiency HVAC system",
    "High-efficiency windows and doors",
    "Eco-friendly, disaster resistant roofing",
    "High-efficiency plumbing system",
    "Mold-resistant, paper-free wallboard",
    "High-efficiency, impact-resistant windows",
    "Tongue and groove subfloor for extra support",
    "Rainwater harvesting",
    "Graywater system",
    "Spray foam insulation",
    "CFL (compact fluorescent lamp) lighting",
    "Radiant floor",
    "Photovoltaic solar system",
    "Environmentally sensitive landscaping",
    "Steel framing",
    "Concrete slab floor",
    "Dual-flush toilets",
];

export default function InTheNewsPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-[#2d6a8a] mb-6">In The News</h1>

            <nav className="text-sm text-gray-500 mb-6">
                <a href="/secrets" className="hover:text-[#2d6a8a]">Home</a> » <span>In The News</span>
            </nav>

            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                    {/* News Article */}
                    <article className="border-b border-gray-200 pb-8 mb-8">
                        <h2 className="text-2xl font-bold text-[#2d6a8a] mb-2">
                            House Destined For Landfill Finds New Home In Recycling Project
                        </h2>

                        <div className="text-sm text-gray-500 mb-4">
                            <span>Tags: Aqua Marine, Recycling</span>
                            <span className="mx-2">|</span>
                            <span>Posted: April 13, 2011</span>
                        </div>

                        <div className="flex flex-wrap gap-4 mb-6">
                            <Image
                                src="/secrets-images/8002BayTerrace.jpg"
                                alt="8002 Bay Terrace in Harvey Cedars"
                                width={150}
                                height={150}
                                className="rounded-lg shadow-md"
                            />
                            <Image
                                src="/secrets-images/MarinerBarge4.10.jpg"
                                alt="Mariner Barge"
                                width={150}
                                height={150}
                                className="rounded-lg shadow-md"
                            />
                        </div>

                        <div className="prose prose-lg max-w-none text-gray-700">
                            <p className="mb-4">
                                <strong>Harvey Cedars, NJ – April 10, 2011</strong> Aqua Marine Green in collaboration with Aqua Marine Construction will be saving a home in Harvey Cedars that was scheduled to be demolished to a new location in Beach Haven West on Monday, April 11, 2011.
                            </p>

                            <p className="mb-4">
                                The 15-year-old contemporary located at 8002 Bay Terrace in Harvey Cedars was taken off its pilings last week. The home will be loaded on a barge between 10-11am, April 11th and then float down the Bay by Noon, wind permitting, to its new location at 17 Harry Drive in Beach Haven West.
                            </p>

                            <p className="mb-4">
                                The less than 2000 square foot home will be retrofitted &ldquo;green&rdquo; making the concept of affordable energy efficient living and sustainable development a reality. The recycled home will be a showcase for alternative energy and eco-conscious design. A strong emphasis is placed on using &ldquo;Made in the USA&rdquo; products.
                            </p>

                            <p className="text-sm text-gray-600 italic">
                                Home in Harvey Cedars saved from landfill to be moved by Barge to new location. Mariner&apos;s Marina Barge gets ready to load home in Harvey Cedars on Monday, April 11.
                            </p>
                        </div>
                    </article>
                </div>

                {/* Sidebar */}
                <div className="md:w-1/3">
                    <div className="bg-gray-50 rounded-lg p-6">
                        <h2 className="text-lg font-bold text-[#2d6a8a] mb-4">Green Aspects</h2>
                        <ul className="text-sm text-gray-700 space-y-1">
                            {greenFeatures.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

