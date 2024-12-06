type TitleProps = {
    children: React.ReactNode;
}

export const Title = (props: TitleProps) => {
    return (
        <h1 className={"font-bold text-3xl pb-4"}>{props.children}</h1>
    )
}