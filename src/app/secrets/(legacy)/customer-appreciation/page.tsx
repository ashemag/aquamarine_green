export default function CustomerAppreciationPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-[#2d6a8a] mb-6">Customer Appreciation</h1>

            <nav className="text-sm text-gray-500 mb-6">
                <a href="/secrets" className="hover:text-[#2d6a8a]">Home</a> » <span>Customer Appreciation</span>
            </nav>

            <div className="prose prose-lg max-w-none text-gray-700">
                <blockquote className="bg-gray-50 border-l-4 border-[#3a7ca5] p-6 rounded-r-lg mb-8">
                    <p className="italic font-semibold text-lg mb-2">
                        &ldquo;We loved Bob&apos;s work. Beautiful, precise workmanship.
                    </p>
                    <p className="italic font-semibold text-lg mb-4">
                        He also came up with great solutions for issues we had been experiencing with our house.&rdquo;
                    </p>
                    <cite className="text-gray-600 not-italic">
                        – Jan and Tony Porter, Beach Haven West
                    </cite>
                </blockquote>

                <hr className="my-8 border-gray-300" />

                <p className="mb-4">
                    We at <strong>Aqua Marine Green</strong> know that our client is a well-educated savvy consumer. We want them to make the best decisions for their family and lifestyle. Our job is to educate our clients on what products and methods are available in the marketplace today. Each project is custom tailored to the specifications of each client. Cost effectiveness, energy efficiency and quality of life are seriously taken into consideration.
                </p>

                <p className="mb-4">
                    Our relationship with our customers includes being perceptive. We want their home to reflect their lifestyle, their passions, their aspirations and needs. After all, we are creating their living space to keeping in mind their welfare as well as their comfort and security.
                </p>
            </div>
        </div>
    );
}

