"use client"
import React, { useEffect, useRef } from 'react'

function Test() {
    const first = useRef<SVGSVGElement>(null)
    useEffect(() => {
        if (!first.current) return
        first.current.animate([
            { fill: 'rgb(78, 70, 105)' },
            { fill: 'rgb(201, 162, 99)' },
            { fill: 'rgb(204, 175, 129)' },
            { fill: 'rgb(191, 97, 34)' },
            { fill: 'rgb(102, 69, 19)' },
            { fill: 'rgb(168, 102, 50)' },
        ], {
            duration: 1500,
            iterations: Infinity,
            direction: 'alternate-reverse'
        });
    }, [])

    return (
        <div className='w-full h-full flex justify-around items-center bg-gradient-to-l from-slate-950 via-amber-950 to-black'>
            <svg ref={first} className='w-1/3' xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 3406.5972 5000" version="1.1" viewBox="0 0 3406.6 5e3"> <path d="m741.22 2286.7c-173.95-6.0105-335.21-110.64-491.66-252.57 72.856-78.382 86.549-185.19 67.435-307.75l555.42-315.11c48.252-208.09 197.78-278.01 404.61-269.74 42.652-106.4 106.56-205.81 188.82-299.17-465.49 108.3-727.32 292.51-731.98 572.58l-666.97 332.96c-63.479 31.69-86.15 111.03-48.935 171.44 29.209 47.41 57.867 91.543 85.69 130.71-4.0791 130.73 37.605 218.09 131.19 256.25 53.27 117.99 144.58 184.51 294.01 172.37 14.584-1.1846 28.969-4.0315 43.138-7.6855 55.655-14.353 130.64-4.96 209.69 9.4216 74.432-107.55 157.81-210.95 250.12-310.2-96.534 72.524-193.31 119.84-290.58 116.48zm-505.15-161.23c181.46 126.29 355.03 228.26 511.28 276.79-197.36 22.51-363.94-86.158-511.28-276.79z" /> <path d="m1571.3 89.504c-308.06 108.51-27.587 542.55-199.85 678.03 471.13-95.022 27.893-326.75 199.85-678.03z" /> <path d="m1507.5 996.81c224.67-82.268 342.9-268.33 279.55-631.44 194.03 345.83 208.39 640.76-80.922 849.68 111.09 29.599 202.73-16.377 270.97-153.26l40.461 203.53c297.94-692.74-326.14-833.74-163.07-1265.3-388.67 307.75-13.487 376.41-346.98 996.81z" /> <path d="m1009.7 2527c161.84-231.73 239.1-159.51 358.02-204.76 389.9-148.36 437.97-561.75 107.9-762.63 305.3 684.16-495.34 532.12-465.91 967.39z" /> <path d="m1266 3517.7c483.69-785.31 393.58-958.19 343.92-1112.7-16.298 243.95-83.49 426.87-201.39 548.98 57.166-177 41.86-325.37-41.381-446.91 47.818 506.68-299.78 696.11-393.12 1222.2-62.826 354.12-57.465 768.62 341.63 1204.5-155.45-264.93-346.08-934.87-49.657-1416.1z" /> <path d="m2617.8 2673.5c110.35-226.21 55.787-1012.1-362.31-1421.7 355.31 789.6 305.52 1375.3-132.42 1765.6 245.78-376.18 291.98-741.39 114.03-1094.3 57.013 991.29-413.81 1061.2-809.53 1943.4 478.48-575.04 909.89-618.29 1190.2-1193z" /> <path d="m2542.4 3605.9c539.09-404.5 588.42-798.51 560.66-1294.6-28.429-508.05-305.36-1025.9-902.74-1375.8 770.28 753.11 842.91 1660.3 224.37 2310-486.05 510.55-1493.4 726.46-849.68 1754.5-213.34-622.55 359.87-938.22 967.39-1394.1z" /> <path d="m3285.4 2447.3c178.4 423.92 73.597 1073.4-607.83 1378.4-579.33 259.32-923.57 549.64-1014.3 972.9 237.77-364.14 594.7-603.62 1003.2-821.17 678.64-361.39 905.18-967.54 618.87-1530.2z" /> </svg>
        </div>
    )
}

export default Test