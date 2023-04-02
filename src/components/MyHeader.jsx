const MyHeader = ({logo, high_rating, romance, music}) => {
    return (
    <header>
        <div className="head_logo"> {logo} </div>
        <div className="head_high_rating"> {high_rating} </div>
        <div className="head_romance"> {romance} </div>
        <div className="head_music"> {music} </div>
    </header>
    )}

export default MyHeader;