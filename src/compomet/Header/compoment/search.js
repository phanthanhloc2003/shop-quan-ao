import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
import Tippy from "@tippyjs/react/headless";
import WrapperSearch from "../../poper/wrapperSearch";

function Search({ onChange, onClickSearch }) {
    const [values, setValues] = useState("");
    const [isListVisible, setIsListVisible] = useState(false);

    const [searchHistory, setSearchHistory] = useState([]);
    const wrapperRef = useRef(null);
    const [showSearch, setShowSearch] = useState([])

    useEffect(() => {
        const searchHistoryFromLocalStorage = JSON.parse(localStorage.getItem("searchHistory")) || [];
        const reverseSearch = searchHistoryFromLocalStorage.reverse();
        setShowSearch(reverseSearch.slice(0, 5))

        setSearchHistory(searchHistoryFromLocalStorage);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsListVisible(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const handleChange = (event) => {
        const { value } = event.target;
        setValues(value);

        setIsListVisible(true);
    };

    const handleSearch = (item) => {
        setIsListVisible(false);

        if (onChange) onChange(item);
    };

    const onHandleSearch = () => {
        const updatedSearchHistory = [...searchHistory, values];
        setSearchHistory(updatedSearchHistory);
        localStorage.setItem("searchHistory", JSON.stringify(updatedSearchHistory));
        onClickSearch(values);
    }

    return (
        <Tippy
            visible={values.length === 0 ? false : isListVisible}
            interactive
            placement="bottom-start"
            render={(attrs) => (
                <div className="" tabIndex="-1" {...attrs} ref={wrapperRef}>
                    <WrapperSearch>
                        <div>
                            <div className="flex items-center">
                                <a className="flex items-center font-light">
                                    <svg
                                        className="w-[1rem] h-[1rem] text-[#ee4d2d] mr-[5px] ml-[15px] "
                                        enableBackground="new 0 0 15 15"
                                        viewBox="0 0 15 15"
                                        x="0"
                                        y="0"
                                        strokeWidth="0"
                                    >
                                        <path d="m13 1.9c-.2-.5-.8-1-1.4-1h-8.4c-.6.1-1.2.5-1.4 1l-1.4 4.3c0 .8.3 1.6.9 2.1v4.8c0 .6.5 1 1.1 1h10.2c.6 0 1.1-.5 1.1-1v-4.6c.6-.4.9-1.2.9-2.3zm-11.4 3.4 1-3c .1-.2.4-.4.6-.4h8.3c.3 0 .5.2.6.4l1 3zm .6 3.5h.4c.7 0 1.4-.3 1.8-.8.4.5.9.8 1.5.8.7 0 1.3-.5 1.5-.8.2.3.8.8 1.5.8.6 0 1.1-.3 1.5-.8.4.5 1.1.8 1.7.8h.4v3.9c0 .1 0 .2-.1.3s-.2.1-.3.1h-9.5c-.1 0-.2 0-.3-.1s-.1-.2-.1-.3zm8.8-1.7h-1v .1s0 .3-.2.6c-.2.1-.5.2-.9.2-.3 0-.6-.1-.8-.3-.2-.3-.2-.6-.2-.6v-.1h-1v .1s0 .3-.2.5c-.2.3-.5.4-.8.4-1 0-1-.8-1-.8h-1c0 .8-.7.8-1.3.8s-1.1-1-1.2-1.7h12.1c0 .2-.1.9-.5 1.4-.2.2-.5.3-.8.3-1.2 0-1.2-.8-1.2-.9z"></path>
                                    </svg>
                                    Tìm shop "{values}"
                                </a>
                            </div>


                            <div >

                                <ul className=" py-[5px]">
                                    {showSearch.map((searchItem, index) => (
                                        <li onClick={() => handleSearch(searchItem)} key={index} className="pl-[15px] font-light text-[#212121] hover:cursor-pointer hover:bg-[#f5f5f5] py-[10px]">
                                            {searchItem}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </WrapperSearch>
                </div>
            )}
        >
            <div className="flex bg-[white] py-[5px] mx-[20px] justify-between px-[10px] rounded-[5px] ">
                <input
                    className="flex-1 pl-[10px]  outline-none"
                    placeholder="tìm kiếm sản phẩm..."
                    value={values}
                    onChange={handleChange}
                />

                <button
                    className="bg-[#fb5533] text-[white] px-[15px] h-[34px] ml-[10px]  rounded-[5px] "
                    onClick={onHandleSearch}
                >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </Tippy>
    );
}

export default Search;
