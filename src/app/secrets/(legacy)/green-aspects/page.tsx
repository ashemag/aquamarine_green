export default function GreenAspectsPage() {
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

    return (
        <div>
            <h1 className="text-3xl font-bold text-[#2d6a8a] mb-6">Green Aspects</h1>

            <nav className="text-sm text-gray-500 mb-6">
                <a href="/secrets" className="hover:text-[#2d6a8a]">Home</a> » <span>Green Aspects</span>
            </nav>

            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3 prose prose-lg max-w-none text-gray-700">
                    <blockquote className="border-l-4 border-[#3a7ca5] pl-4 italic text-xl mb-6">
                        <p className="font-semibold">&ldquo;It&apos;s not easy being green&rdquo;</p>
                        <p className="font-semibold">— Kermit the Frog, 1969</p>
                    </blockquote>

                    <p className="mb-4">
                        The more we learn about conserving energy and resources, the better we can create a sustainable living space without sacrificing our lifestyle and home security.
                    </p>

                    <p className="mb-6">
                        Today the shades of green are unlimited. Houses can have a few basic green features or can be built nearly totally self-sustaining — even off the energy grid altogether.
                    </p>

                    <h2 className="text-xl font-bold text-[#2d6a8a] mt-8 mb-4">Six Key Aspects of Green Building</h2>

                    <p className="mb-4">
                        Six important areas of green building have been identified by the NAHB&apos;s National Green Building Standard. Taken individually, you can see that these are really common sense approaches utilizing best-practices, efficient use of materials and a long-range view of energy efficiency.
                    </p>

                    <h3 className="text-lg font-bold text-[#2d6a8a] mt-6 mb-3">Energy Efficiency</h3>
                    <p className="mb-4">
                        One of the most important areas is the overall building envelope. By tightening this up and minimizing air infiltration you can control your air changes and even route them through a heat exchanger to capture any heat lost through ventilation in the winter or to cool incoming air in the summer.
                    </p>
                    <p className="mb-4">
                        Increasing the amount of insulation is an easy way to improve your energy efficiency. It&apos;s not enough to simply build to code. By increasing energy efficiency by at least 15% beyond what is recommended by the IRC you receive the Energy Star designation from the Federal government. There are also many rebates and tax credits available through this program.
                    </p>

                    <h3 className="text-lg font-bold text-[#2d6a8a] mt-6 mb-3">Lot Preparation and Design</h3>
                    <p className="mb-4">
                        Lot preparation and design includes controlling rainwater drainage to prevent erosion and mold development. It&apos;s also possible to direct rainwater towards gardens or plantings and thereby save water by not having to water your garden. Careful site preparation can reduce the impact of your home on the surroundings.
                    </p>

                    <h3 className="text-lg font-bold text-[#2d6a8a] mt-6 mb-3">Water Efficiency/Conservation</h3>
                    <p className="mb-4">
                        Excessive usage of water is typical of the average American household but it is possible to dramatically reduce water usage without even missing it. Not only does this save future resources, it also means saving money on your water bill and allows septic systems to remain healthier for a longer time.
                    </p>
                    <p className="mb-4">
                        Low-flow shower heads and dual flush toilets are simply an easy selection when it&apos;s time to outfit your home, as are front-loading washers. The washers can also be stacked with a dryer to save space.
                    </p>

                    <h3 className="text-lg font-bold text-[#2d6a8a] mt-6 mb-3">Occupancy Comfort and Indoor Environmental Quality</h3>
                    <p className="mb-4">
                        With houses being tightened up to prevent air infiltration, it also means that the air inside the house has a greater impact on our health since it&apos;s not being exchanged as often. This makes it even more critical to utilize latex paints with low VOCs (volatile organic compounds). A couple of paints with low or no VOCs are EcoSpec by Benjamin Moore and YOLO Colorhouse. It&apos;s a good idea to let carpets gas off for a day or two outside before they are installed in the house. Managing moisture inside the house can reduce mold and mildew issues and increase the comfort level.
                    </p>

                    <h3 className="text-lg font-bold text-[#2d6a8a] mt-6 mb-3">Resource Efficiency</h3>
                    <p className="mb-4">
                        Careful framing saves money by not needing to buy as much lumber and also by not having to pay to have it hauled away. Reducing waste saves landfill space. Best of all, by recycling material you are saving money on purchasing and waste.
                    </p>

                    <h3 className="text-lg font-bold text-[#2d6a8a] mt-6 mb-3">Operation, Maintenance and Education</h3>
                    <p className="mb-4">
                        It&apos;s important to educate homeowners on the best way to preserve and operate their homes in an efficient and careful manner. Long-term maintenance issues are addressed and the longevity of the home is ensured.
                    </p>

                    <p className="mt-6">
                        These six areas of green building have been identified as the most critical areas to be addressed in the design and building process. By following the green building guidelines you can not only improve your lifestyle with a healthier, more efficient house, you also save money in the long run and preserve resources for future generations.
                    </p>
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

