import { LinearProgress } from '@mui/material';
import Router from 'next/router';
import React from 'react';

export default function TransitionProgress() {
    const [progress, setProgress] = React.useState(false);

    const setEnabled = React.useCallback(() => setProgress(true), []);
    const setDisabled = React.useCallback(() => setProgress(false), []);

    React.useEffect(() => {
        Router.events.on('routeChangeStart', setEnabled);
        Router.events.on('routeChangeComplete', setDisabled);
        Router.events.on('routeChangeError', setDisabled);

        return () => {
            Router.events.off('routeChangeStart', setEnabled);
            Router.events.off('routeChangeComplete', setDisabled);
            Router.events.off('routeChangeError', setDisabled);
        };
    }, [setEnabled, setDisabled]);

    return progress ? <div style={{ position: 'fixed', top: 0, left: 0, right: 0 }}><LinearProgress /></div> : null;
};