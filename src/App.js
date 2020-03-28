import React from 'react';
import BarChart from './components/bar-chart';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
    const [data, setData] = useState([
        { value: 370, month: 'Jan' },
        { value: 70, month: 'Feb' },
        { value: 350, month: 'Oct' },
        { value: 600, month: 'Nov' },
        { value: 250, month: 'Jan3' },
        { value: 50, month: 'Jan1' },
        { value: 70, month: 'Feb2' },
        { value: 350, month: 'Oct3' },
        { value: 600, month: 'Nov4' },
        { value: 325, month: 'Jan5' }
    ]);

    useEffect(() => {
        setTimeout(() => {
            const d = [...data];
            d[1].value += 150;
            setData(d);
        }, 1000);
    }, [data]);

    return (
        <div>
            <BarChart data={data} title="Total earning per month by L.E" />
        </div>
    );
}

export default App;
