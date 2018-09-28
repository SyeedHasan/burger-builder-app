
import React from 'react';

const layout = (props) => (
    <div>Toolbar, Sidebar, Backdrop</div> 
    <main>
        {props.children}
    </main>
);

export default layout