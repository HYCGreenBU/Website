import React from "react";

const QualityPage = () => {
  return (
    <div className="px-6 py-12 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Our Mission */}
        <section>
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Mission</h2>
          <p className="text-lg">
            Innovative, Customizable, and High-Quality Products and Services
          </p>
        </section>

        {/* Core Value */}
        <section>
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Core Value</h2>
          <p className="text-lg">
            Commitment to Engineering Excellence, Customer Focus, and
            Sustainability
          </p>
        </section>

        {/* Vision */}
        <section>
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Vision</h2>
          <p className="text-lg">
            To be the Leading Provider of Sustainable and Innovative Engineering
            Solutions
          </p>
        </section>

        {/* Quality Objective */}
        {/* <section>
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Quality Objective</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Attain a customer satisfaction rate of 75%.</li>
            <li>
              Launch at least one new innovative product or service per year that meets or exceeds customer expectations for quality and functionality.
            </li>
            <li>
              Implement annual refresher quality awareness training for all employees, with at least 95% attendance every year.
            </li>
          </ul>
        </section> */}

        {/* Quality Policy */}
        <section>
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Quality Policy
          </h2>
          <p className="text-lg">
            Excellent Products and Services throughout the Customer Journey.
          </p>
        </section>
      </div>
    </div>
  );
};

export default QualityPage;
