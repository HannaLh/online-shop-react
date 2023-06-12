import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton:React.FC = (props) => (
    <ContentLoader 
        speed={2}
        width={390}
        height={390}
        viewBox="0 0 390 390"
        backgroundColor="#fbfded"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="577" cy="526" r="15" /> 
        <rect x="91" y="329" rx="8" ry="8" width="167" height="22" /> 
        <rect x="172" y="365" rx="16" ry="16" width="118" height="27" /> 
        <rect x="76" y="2" rx="2" ry="2" width="310" height="309" /> 
        <circle cx="582" cy="539" r="11" /> 
        <rect x="301" y="328" rx="8" ry="8" width="59" height="21" /> 
        <rect x="495" y="533" rx="2" ry="2" width="143" height="22" /> 
        <circle cx="585" cy="534" r="7" /> 
        <circle cx="591" cy="534" r="3" />
    </ContentLoader>
);

export default Skeleton;
