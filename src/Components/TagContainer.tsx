import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import '../Styles/TagContainer.css';

import React from 'react';


type TagProps = {
    key: number, 
    label: string, 
    onClick: () => void
};
class Tag extends React.Component<TagProps> {
    render() {
        const { label, onClick } = this.props;

        return (
            <div className="tag">
                {label}
                <FontAwesomeIcon icon={faClose} data-item={label} className="close-icon" onClick={onClick}/>
            </div>
        );
    }
}

type TagContainerProps = { 
    id: "whitelist" | "blacklist", 
    onChange: (tags: string[], id: "whitelist" | "blacklist") => void 
    className?: string, 
    name?: string, 
    tags?: string[], 
};
type TagContainerState = { 
    tags: string[] 
};
class TagContainer extends React.Component<TagContainerProps, TagContainerState> {
    constructor (props: TagContainerProps) {
        super(props);

        this.state = {
            tags: [],
        };

        this.deleteTag = this.deleteTag.bind(this);
        this.addTag = this.addTag.bind(this);
    }

    componentDidMount() {
        this.setState({
            tags: this.props.tags || [],
        });
    }

    componentDidUpdate() {
        this.props.onChange(this.state.tags, this.props.id);
    }

    deleteTag(key: number): void {
        this.setState((prevState) => {
            let newTags = [...prevState.tags];
            newTags.splice(key, 1);
            return {
                tags: newTags
            };
        });
    }

    addTag(e: any) {
        let keyCode: string = e.key;
        let target = e.currentTarget;

        if (keyCode === "Enter") {
            let newTag = target.value;

            this.setState((prevState) => {
                let newTags = [...prevState.tags];
                newTags.push(newTag);
                return {
                    tags: newTags
                };
            });

            target.value = "";
        }
    }

    redirectFocus(e: any) {
        let target = e.currentTarget;
        let input = target.querySelector(".tag-input");

        if (e.target.classList.contains("tag-container"))
            input?.focus();
    }
    
    render() {
        const { className = "", id = "", name = ""} = this.props;

        let tagsComponents = this.state.tags.map((label: string, i: number) => {
            return <Tag key={i} label={label} onClick={() => this.deleteTag(i)}/>
        });

        return (
            <div id={id} className={`tags-input-field ${className}`} onClick={this.redirectFocus}>
                <label htmlFor="tag-container">{name}</label>
                <div className="tag-container">
                    {tagsComponents}
            
                    <input className="tag-input" type="text" onKeyDown={(e: any) => this.addTag(e)}/>
                </div>
            </div>
        );
    }
}

export default TagContainer;

