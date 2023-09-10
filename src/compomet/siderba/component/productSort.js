import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function ProductSort({ onSortChange }) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        onSortChange(newValue === 0 ? 'asc' : 'desc');
    };

    return (
        <div>
            <Tabs
                textColor="secondary"
                indicatorColor="secondary" value={value} onChange={handleChange} aria-label="disabled tabs example">
                <Tab label="Giá thấp tới cao" value={0} />
                <Tab label="Giá cao tới thấp" value={1} />
            </Tabs>
        </div>
    );
}

export default ProductSort;
