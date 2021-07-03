import ListItem from "./ListItem";
import './ScrollView.css';

const ScrollView = () => {

    return (
        <div className="scroll-view">
            <ListItem foodName="Pizza" calories="56"/>
            <ListItem foodName="Burger" calories="69"/>
            <ListItem foodName="Browne" calories="180"/>
            <ListItem foodName="Fried Rice" calories="90"/>
            <ListItem foodName="Lassania" calories="100"/>
            <ListItem foodName="Pani Puri" calories="10"/>
            <ListItem foodName="Hello" calories="77"/>
            <ListItem foodName="Pizza" calories="56"/>
            <ListItem foodName="Burger" calories="69"/>
            <ListItem foodName="Browne" calories="180"/>
            <ListItem foodName="Fried Rice" calories="90"/>
            <ListItem foodName="Lassania" calories="100"/>
            <ListItem foodName="Pani Puri" calories="10"/>
            <ListItem foodName="Hello" calories="77"/>
        </div>
    )
};

export default ScrollView;