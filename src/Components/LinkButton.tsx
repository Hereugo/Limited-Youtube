import '../Styles/LinkButton.css';

const LinkButton = ({
    url = "", 
    className = "", 
    text = "", 
    icon = <></>,
}: {
    url: string,
    className?: string,
    text?: string, 
    icon?: any
}) => {
    return (
        <a target="_blank" rel="noreferrer" href={url}>
            <button className={ `button ${className}`}>
                {icon}
                {text}                
            </button>
        </a>
    );
}

export default LinkButton