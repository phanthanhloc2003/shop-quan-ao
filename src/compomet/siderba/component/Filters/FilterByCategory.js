function FiltersByCategory({ selectedFilter, onChange }) {

    return (
        <div>
            <ul>
                <li
                    onClick={() => onChange(0)}
                    className={`hover:text-[#EE4D2D] py-[8px] hover:cursor-pointer hover:transform hover:translate-x-2 ${selectedFilter === 0 ? "text-[#EE4D2D]" : ""
                        }`}
                    data-value={0}
                >
                    Tất cả
                </li>
                <li
                    onClick={() => onChange(1)}
                    className={`hover:text-[#EE4D2D] py-[8px] hover:cursor-pointer  hover:transform hover:translate-x-2 ${selectedFilter === 1 ? "text-[#EE4D2D]" : ""
                        }`}
                    data-value={1}
                >
                    Thời trang
                </li>
                <li
                    onClick={() => onChange(2)}
                    className={`hover:text-[#EE4D2D] py-[8px]  hover:cursor-pointer hover:transform hover:translate-x-2 ${selectedFilter === 2 ? "text-[#EE4D2D]" : ""
                        }`}
                    data-value={1}
                >
                    Điện thoại
                </li>
                <li
                    onClick={() => onChange(3)}
                    className={`hover:text-[#EE4D2D] py-[8px]  hover:cursor-pointer hover:transform hover:translate-x-2 ${selectedFilter === 3 ? "text-[#EE4D2D]" : ""
                        }`}
                    data-value={1}
                >
                    macbook
                </li>
                <li
                    onClick={() => onChange(4)}
                    className={`hover:text-[#EE4D2D] py-[8px] hover:cursor-pointer  hover:transform hover:translate-x-2 ${selectedFilter === 4 ? "text-[#EE4D2D]" : ""
                        }`}
                    data-value={1}
                >
                    Chuột
                </li>
                <li
                    onClick={() => onChange(5)}
                    className={`hover:text-[#EE4D2D] py-[8px] hover:cursor-pointer hover:transform hover:translate-x-2 ${selectedFilter === 5 ? "text-[#EE4D2D]" : ""
                        }`}
                    data-value={5}
                >
                    Bàn phím
                </li>
                <li
                    onClick={() => onChange(6)}
                    className={`hover:text-[#EE4D2D] py-[8px] hover:cursor-pointer hover:transform hover:translate-x-2 ${selectedFilter === 6 ? "text-[#EE4D2D]" : ""
                        }`}
                    data-value={1}
                >
                    áp lưng
                </li>
            </ul>
        </div >
    );
}

export default FiltersByCategory;
