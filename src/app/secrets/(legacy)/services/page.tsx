import Image from "next/image";

export default function ServicesPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-[#2d6a8a] mb-6">Services</h1>

            <nav className="text-sm text-gray-500 mb-6">
                <a href="/secrets" className="hover:text-[#2d6a8a]">Home</a> » <span>Services</span>
            </nav>

            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                    <h2 className="text-2xl font-bold text-[#2d6a8a] mb-4">Residential Homes</h2>

                    <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
                        <li>New Construction</li>
                        <li>Modular Custom Design</li>
                        <li>Custom Built (your plans or our architect)</li>
                        <li>Permit Process (building, soils, survey, site plan, etc.)</li>
                        <li>Contracting (project management)</li>
                        <li>Green Building</li>
                        <li>Energy Efficient</li>
                        <li>Solar Systems</li>
                        <li>Remodels</li>
                        <li>Energy Efficient Upgrades</li>
                        <li>Complete Update to Today&apos;s Building Codes</li>
                        <li>Whole house renovations or just room to room renovations</li>
                        <li>Entertainment rooms, game rooms, office, loft</li>
                        <li>Additions</li>
                        <li>Sunrooms</li>
                        <li>Enlarge Kitchen/Dining area</li>
                        <li>Entertaining area</li>
                        <li>Storage areas</li>
                        <li>Backup Generator systems</li>
                        <li>House Moves</li>
                        <li>Waterfront to Waterfront</li>
                        <li>By Barge</li>
                        <li>By roadway</li>
                        <li>House Raising</li>
                        <li>Level houses that have settled</li>
                        <li>Re-inforce structual beams or girders</li>
                        <li>Interior Alterations</li>
                        <li>Bathrooms</li>
                        <li>Kitchens</li>
                        <li>Focal Point of the house</li>
                        <li>Front Entrys</li>
                        <li>Finish Basements</li>
                        <li>Trim/Custom Millwork</li>
                        <li>Wall coverings</li>
                        <li>Flooring</li>
                        <li>Exterior Alterations</li>
                        <li>Outdoor Kitchens</li>
                        <li>Screen rooms</li>
                        <li>Covered Porches</li>
                        <li>Garage</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-[#2d6a8a] mb-4">Marine</h2>

                    <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
                        <li>Bulkheading</li>
                        <li>Docks</li>
                        <li>Floating</li>
                        <li>Gangways</li>
                        <li>Piers</li>
                        <li>Pilings</li>
                        <li>House Pilings</li>
                        <li>Dock/Tie Pilings</li>
                        <li>Jetting</li>
                        <li>Boat Lifts</li>
                        <li>Piling Lifts</li>
                        <li>Elevator Lifts</li>
                        <li>Davits</li>
                        <li>Sport Ports</li>
                        <li>Watercraft Lifts</li>
                        <li>Floating Docks</li>
                        <li>Breakwater</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-[#2d6a8a] mb-4">Commercial</h2>

                    <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
                        <li>New Construction</li>
                        <li>Storage Buildings</li>
                        <li>Retail Buildings</li>
                        <li>Garages</li>
                        <li>Remodels</li>
                        <li>Additions</li>
                        <li>Interior Alterations</li>
                    </ul>
                </div>

                {/* Images Sidebar */}
                <div className="md:w-1/3 space-y-4">
                    <Image
                        src="/secrets-images/1.jpg"
                        alt="Residential Construction"
                        width={300}
                        height={300}
                        className="rounded-lg shadow-md w-full"
                    />
                    <Image
                        src="/secrets-images/wallunit.jpg"
                        alt="Custom Millwork"
                        width={300}
                        height={300}
                        className="rounded-lg shadow-md w-full"
                    />
                    <Image
                        src="/secrets-images/4.jpg"
                        alt="Interior Work"
                        width={300}
                        height={300}
                        className="rounded-lg shadow-md w-full"
                    />
                    <Image
                        src="/secrets-images/3.jpg"
                        alt="Construction Project"
                        width={300}
                        height={300}
                        className="rounded-lg shadow-md w-full"
                    />
                    <Image
                        src="/secrets-images/2.jpg"
                        alt="Marine Construction"
                        width={300}
                        height={300}
                        className="rounded-lg shadow-md w-full"
                    />
                </div>
            </div>
        </div>
    );
}

