import styleCard from './main/main.module.scss';

const tagColors = {
    'html': styleCard.red,
    'css': styleCard.blue,
    'js': styleCard.sand,
    'php': styleCard.purple
}

const Card = ({title, image, content, tags, published}) => {

    return (
        <div className={styleCard.card}>
            <figure className={styleCard.cardImage}>
                <img src={image || "/cardimage.png"} alt={title || "pic dimension placeholder"}/>
            </figure>
            <div className={styleCard.cardDesc}>
                <h3>{title || "Title Placeholder"}</h3>
                <p>{content || "Content Placeholder"}</p>
                <div className={styleCard.tags}>
                    {tags && tags.map((tag, index) => 
                        <span key={`tag${title}${index}`} className={tagColors[tag] || styleCard.default}>
                            {tag}
                        </span>
                    )}
                </div>
                {/* <button className={styleCard.readMore}>leggi di più</button> */}
            </div>
        </div>
    )
}

export default Card;