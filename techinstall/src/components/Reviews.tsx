"use client"; 

import React, { useEffect } from 'react';

export default function Reviews() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://static.elfsight.com/platform/platform.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="container-fluid w-full col-12 flex flex-row justify-center mt-10 text-center overflow-hidden">
            <div className="flex" style={{ flexDirection: 'column', marginTop: '2vh' }}>
                <strong className="text-5xl font-bold mb-5 display-4">What our customers say</strong>
                <div
                    className="elfsight-app-1c5d6da6-4fbf-4e85-b81c-7eeb8dca0423"
                    data-elfsight-app-lazy
                ></div>
            </div>
        </div>
    );
}


// <!-- Elfsight Google Reviews | Untitled Google Reviews -->
// <script src="https://static.elfsight.com/platform/platform.js" async></script>
// <div class="elfsight-app-1c5d6da6-4fbf-4e85-b81c-7eeb8dca0423" data-elfsight-app-lazy></div>