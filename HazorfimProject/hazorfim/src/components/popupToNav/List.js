import React from "react";
const List = (title, list) => {
    return (
        <>
        <a>{title}</a>
            <div className="list-container">
                {list.map((items, index) => (
                    <div className="column" key={index}>
                        <ul>
                            {list.map((item, subIndex) => (
                                <li key={subIndex}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    );
}
export default List;