const Click = () => {

    const handleClick = (e) => {
        e.preventDefault()
        alert('Clicked!')
    }

    return <div>
        <button className="btn" onClick={handleClick}>Click Here</button>
    </div>;
};

export default Click;
