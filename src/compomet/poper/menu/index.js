import Tippy from "@tippyjs/react/headless";
import Button from "../../Button/index";
import "tippy.js/dist/tippy.css"; // Import CSS của Tippy
import "tippy.js/animations/shift-away.css";
import Wrapper from "../Wrapper";
import MenuItem from "../menuItem";

function Menu({ children, items = [] }) {

    const renderItem = () => {
        return (
            items.map((item, index) => (
                <MenuItem key={index} data={item} />
            ))
        )
    }

    return (
        <div>
            <Tippy
                trigger="click"
                interactive
                placement="bottom"
                render={(attrs) => (
                    <div className="" tabIndex="-1" {...attrs}>
                        <Wrapper>
                            <Button >
                                {renderItem()}
                            </Button>
                        </Wrapper>
                    </div>
                )}
            >
                {children}
            </Tippy>
        </div>
    );
}

export default Menu;
