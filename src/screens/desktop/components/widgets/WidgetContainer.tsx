import React from "react";
import GridLayout from "react-grid-layout";
import "./style/widget-container.css"

export class WidgetContainer extends React.Component {
    render() {
        // layout is an array of objects, see the demo for more complete usage
        const layout = [
            { i: "matchHistory", x: 0, y: 0, w: 1, h: 2, static: true },
            { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
            { i: "c", x: 4, y: 0, w: 1, h: 2 }
        ];
        return (
            <GridLayout
                className="layout"
                layout={layout}
                cols={12}
                rowHeight={30}
                width={1200}
            >
                <div key="MatchHistory" className="widget">a</div>
                <div key="b" className="widget">b</div>
                <div key="c" className="widget">c</div>
            </GridLayout>
        );
    }
}