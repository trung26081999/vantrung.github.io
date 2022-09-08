import "./style.css"

export const CardTitle =()=>{
    return <div className="card">
        <img src="assets/images/pic.png" className="img" alt="" />
        <div className="container">
        <h1 className="card-title">Title</h1>
        <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star checked"  />
        <span className="fa fa-star" /> <span>4.5 (413)</span>
        <p className="title">Secondary Text</p>
        <p className="sub-title">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni maiores expedita illo voluptatem laboriosam pariatur non repellat numquam! Sed provident dolores at rem quidem aliquam consectetur ullam deleniti laudantium natus!</p>
        </div>
        <hr />
        <p className="Sub__title">Subtitle</p>
        <button className="btn">Item 1</button>
        <button className="btn">Item 2</button>
        <button className="btn">Item 3</button>
        <button className="btn">Item 4</button>
        <p className="action">Action 1</p>
        
    </div>
}