import { Link } from "react-router-dom";

function Button({ children, to, onClick, href }) {
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


    return (
        <Comp className="w-full  " {...props}>
            <span>{children}</span>

        </Comp>
    );
}
export default Button;
