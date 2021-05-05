import React from 'react';

export default function Button (propos)  {
        return (
            <div>
                <a href={propos.link} className={propos.class}>{propos.name}</a>
            </div>
        );
}