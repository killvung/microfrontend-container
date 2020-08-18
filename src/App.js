import React from 'react';
const Images = React.lazy(() => import("images_remote/App"));

const App = () => (
    <div>
        <React.Suspense fallback="Loading Images">
            <Images />
        </React.Suspense>
    </div>
)

export default App;