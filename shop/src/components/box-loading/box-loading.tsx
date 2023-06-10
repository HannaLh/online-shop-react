import React, {useRef, useEffect, useState} from 'react';
import './box-loading.scss';
import type {ReactElement} from 'react';


type Props = {
    loading: boolean,
    children: ReactElement,
};

export const BoxLoading = ({loading, children}: Props) => {
    const [boxHeight, setBoxHeight] = useState(0);
    const boxLoading = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const boxLoadingElem = boxLoading.current;

        if (boxLoadingElem && loading) {
            const clientHeight = document.documentElement.clientHeight;
            const {top, bottom} = boxLoadingElem.getBoundingClientRect();
            const boxHgh = bottom - top;

            setBoxHeight(boxHgh > clientHeight ? clientHeight - top : boxHgh);
        }
    }, [loading]);

    return (
        <div className="box-loading" ref={boxLoading}>
            {loading && (
                <div className="box-loading__load">
                    <div style={{height: boxHeight}}/>
                </div>
            )}
            {children}
        </div>
    );
};
