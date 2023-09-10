import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Typography } from '@mui/material';
import FiltersByCategory from './Filters/FilterByCategory';
import FiltersByPrice from './Filters/FilterByPrice';

function ProductFilters({ filters, onChange }) {

    const handlePriceChange = (values) => {
        onChange(values)
    }

    return (

        <div className=' '>
            <div className='flex py-[10px] border-b-2 border-[#F2F2F2] pl-[20px] '>
                <FormatListBulletedIcon />
                <Typography>Danh Mục</Typography>
            </div>
            <div className='pl-[20px] mt-[10px]'>
                <FiltersByCategory selectedFilter={filters} onChange={onChange} />
                <FiltersByPrice onChange={handlePriceChange} />


            </div>



        </div>

    );
}

export default ProductFilters;
