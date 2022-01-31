import {useState} from "react";
import {array} from 'prop-types';
import TogglePanelNav from "./TogglePanelNav";
import {Nav, TabContent} from "reactstrap";
import TogglePanelContent from "./TogglePanelContent";

const TogglePanel = ({data}) => {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <div className="mt-5">
            <Nav tabs>
                <TogglePanelNav data={data} activeTab={activeTab} setActiveTab={setActiveTab} />
            </Nav>
            <TabContent activeTab={activeTab} className="p-3 border border-top-0">
                <TogglePanelContent  data={data} />
            </TabContent>
        </div>
    )
}

TogglePanel.propTypes = {
    data: array.isRequired
}

TogglePanel.defaultProps = {
    data: []
}

export default TogglePanel;