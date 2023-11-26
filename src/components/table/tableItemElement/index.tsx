export const TableItemElement = (props)=>{
    return(
        <div className="table-item-element">
            <p className="label">{props.label}</p>
            <p className="content">{props.content}</p>
        </div>
    )
}