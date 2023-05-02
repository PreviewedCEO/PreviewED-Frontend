import React, { useState } from "react";

function Companies(props) {
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Companies</h2>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-200 text-gray-600">
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Website</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Phone</th>
          </tr>
        </thead>
        <tbody>
          {props.companies.map((company) => (
            <tr
              key={company.id}
              onClick={() => handleCompanyClick(company)}
              className={`${
                selectedCompany && selectedCompany.id === company.id
                  ? "bg-blue-200"
                  : ""
              } hover:bg-gray-200 cursor-pointer`}
            >
              <td className="py-2 px-4">{company.name}</td>
              <td className="py-2 px-4">{company.website}</td>
              <td className="py-2 px-4">{company.email}</td>
              <td className="py-2 px-4">{company.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedCompany && (
        <div className="mt-4 border rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">{selectedCompany.name}</h3>
          <p className="text-gray-600">{selectedCompany.description}</p>
        </div>
      )}
    </div>
  );
}

export default Companies;
