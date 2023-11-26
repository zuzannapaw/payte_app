export const Box = (props) => {
  return (
    <div className="box">
      <div className="title-and-dots">
        <p>{props.title}</p>
        <div>...</div>
      </div>
     {props.children}
    </div>
  );
};
