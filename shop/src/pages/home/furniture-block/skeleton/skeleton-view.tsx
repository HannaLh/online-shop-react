import React from 'react';
import ContentLoader from 'react-content-loader';

import './skeleton-view.scss';

const SKELETONS_COUNT = 4;

export const SkeletonView = () => (
    <div className="skeleton-view">
        {[...new Array(SKELETONS_COUNT)].map((_, index) => (
            <ContentLoader
                key={index}
                speed={2}
                width={240}
                height={310}
                viewBox="0 0 240 310"
                backgroundColor="#fbfded"
                foregroundColor="#ecebeb">
                <rect x="0" y="2" rx="2" ry="2" width="310" height="255"/>
                <rect x="0" y="285" rx="8" ry="8" width="150" height="25"/>
                <rect x="200" y="285" rx="16" ry="16" width="40" height="25"/>
            </ContentLoader>
        ))}
    </div>
);
