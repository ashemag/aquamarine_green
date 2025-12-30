export default function ContactUsPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-[#2d6a8a] mb-6">Contact Us</h1>

            <nav className="text-sm text-gray-500 mb-6">
                <a href="/secrets" className="hover:text-[#2d6a8a]">Home</a> » <span>Contact Us</span>
            </nav>

            <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-8">
                    Thank you for your interest in <strong>Aqua Marine Green</strong>. If you would like to contact us, please use the information below.
                </p>

                <div className="bg-gray-50 rounded-lg p-8">
                    <h2 className="text-xl font-bold text-[#2d6a8a] mb-4">Get In Touch</h2>

                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold text-gray-800">Company</h3>
                            <p>Aqua Marine Green</p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800">Location</h3>
                            <p>Long Beach Island, New Jersey</p>
                            <p>Beach Haven West Area</p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800">Services</h3>
                            <p>LBI Construction, Custom Homes, Modular Homes, Green Building</p>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-200">
                        <p className="text-sm text-gray-500 italic">
                            Note: This is an archived version of the original website. For current contact information, please visit the main website.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

