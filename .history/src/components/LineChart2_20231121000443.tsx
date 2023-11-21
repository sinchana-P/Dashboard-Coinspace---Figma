import React from 'react'
import Line from "./Line";

const LineChart2 = () => {
  return (
    <div>
        <h2>Line Chart 2</h2>
        <div>
            <div>
                {components.map(([label, Comp]) => {
                    return (
                        <div key={label + ""}>
                            <h1>{label}</h1>
                            <div>
                            <Comp />
                            </div>
                        </div>
                    );
                })}
                <div style={{ height: "50rem" }} />
            </div>
        </div>
    </div>
  )
}

export default LineChart2