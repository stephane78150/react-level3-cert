import classNames from "classnames";
import React from "react";

type RenderCountProps = {
    count: number;
    className?: string;
    color: 'info' | 'primary' | 'secondary' | 'warning' | 'danger' | 'sucesss' |'dark' |'light';
}

export const RenderCount: React.FC<RenderCountProps> = ({count, className, color}) => (
    <span className={classNames("badge rounded-pill", `bg-${color}`, className)} title="Renders count (Strict mode renders twice)">
        {count}
    </span>)