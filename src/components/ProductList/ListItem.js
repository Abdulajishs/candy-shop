
import CandyList from "./CandyList";

const ListItem = (props) => {

    return (
        <div>
            <h2>List of Candies</h2>
            <ul>
                {props.items.map((item) => (
                    <CandyList item={item} />
                ))}
            </ul>
        </div>
    )

}

export default ListItem;
