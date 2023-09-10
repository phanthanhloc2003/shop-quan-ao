import { Link } from "react-router-dom";

function Button({ children, to, onClick, href, primary }) {
    let Comp = "button";
    const props = {
        onClick,
    }

    if (to) {
        props.to = to;
        Comp = Link
    }
    else if (href) {
        props.href = href;
        Comp = "a"
    }
    const classNames = `w-full ${primary ? 'hover:text-[#ccc] text-[#333] ' : ''}`;

    return (
        <Comp className={classNames}{...props}>
            <span>{children}</span>

        </Comp>
    );
}
export default Button;
