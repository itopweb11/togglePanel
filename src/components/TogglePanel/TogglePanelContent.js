import {TabPane} from "reactstrap";
import {array} from "prop-types";

const TogglePanelContent = ({data}) => {
    return data.map(item => {
        const {id, component} = item;
        const TogglePanelContentComponent = component;

        return (
            <TabPane key={id} tabId={id}>
                <TogglePanelContentComponent />
            </TabPane>
        )
    })
}

TogglePanelContent.propTypes = {
    data: array
}

TogglePanelContent.defaultProps = {
    data: []
}

export default TogglePanelContent;