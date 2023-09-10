import Button from "../../Button";

function MenuItem({ data }) {
    return (
        <Button to={data.to} onClick={data.onClick}>
            <div className="flex  hover:bg-[#ccc] w-full justify-start pl-[20px] border-b py-[10px] ">
                <div className="mr-[10px]"> {data.icon}</div>
                <div> {data.title}</div>
            </div>


        </Button>
    );
}

export default MenuItem;