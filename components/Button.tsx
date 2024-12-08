type ButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
    disabled: boolean;
}

export const Button = (props: ButtonProps) => {
    return (
        <button className="bg-gray-400 p-2 rounded-lg hover:bg-gray-300" disabled={props.disabled} onClick={props.onClick}>
            {props.children}
        </button>
    );
};