type TitleProps = {
    children: React.ReactNode;
    className: string
}

export const Title = (props: TitleProps) => {
    return (
        <h1 className={props.className + " font-bold text-3xl pb-4"}>{props.children}</h1>
    )
}