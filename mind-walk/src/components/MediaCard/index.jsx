export function MediaCard(props) {
    const { alt, image, text, title } = props.data;
    const reverseClass = props.reverseOrder ? 'flex-row-reverse' : '';

    return (
        <div className={`row align-items-center pt-4 ${reverseClass}`}>
            <div className="col-md-6 text-center mb-4">
                <div>
                    <img src={image} alt={alt} className="img-fluid mb-3 rounded"/>
                </div>
            </div>
            <div className="col-md-6 text-center mb-4 testimonial-box">
                <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}
