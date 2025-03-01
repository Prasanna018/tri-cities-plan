import React from 'react'


const data = [
    {
        measure: "Number of Fatalities",
        average: "3,808.2"
    },
    {
        measure: "Rate of Fatalities (per 100M VMT)",
        average: "1.216"
    },
    {
        measure: "Number of Serious Injuries",
        average: "15,156.2"
    },
    {
        measure: "Rate of Serious Injuries (per 100M VMT)",
        average: "4.904"
    },
    {
        measure: "Number of Non-Motorized Fatalities and Non-Motorized Severe Injuries",
        average: "4,131.7"
    }
];

function Safety() {
    return (
        <div className='w-full'>
            <div className='py-4'>
                <h1 className='text-2xl font-bold'> Transportation Safety</h1>
                <p className='py-2 text-start'>On October 22, 2024, the Policy Committee elected to support the 2025 Statewide Safety
                    Performance Targets for xxx and set TCAMPO-specific targets for xyz. Please see the table
                    below for the set targets.</p>
            </div>


            <div className="w-full max-w-3xl mx-auto bg-transparent shadow-lg py-4 ">

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse table-fixed">
                        <thead>
                            <tr className="bg-green-700 text-white">
                                <th className="p-4 text-left border-2 border-white w-2/3">
                                    Performance Measure
                                </th>
                                <th className="p-4 text-right border-2 border-white w-1/3">
                                    5-Yr Rolling Average for 2023
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-white divide-y-4">
                            {data.map((row, index) => (
                                <tr
                                    key={index}
                                    className='bg-transparent'
                                >
                                    <td className="p-4 border-2 border-white text-left">
                                        {row.measure}
                                    </td>
                                    <td className="p-4 border-2 border-white text-right font-medium">
                                        {row.average}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    )
}

export default Safety
