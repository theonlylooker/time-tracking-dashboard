export interface Timeframe{
    current: number,
    previous: number
}

export interface TimeframeGroup{
    daily: Timeframe,
    weekly: Timeframe,
    monthly: Timeframe,
}

export interface Tracking{
    title: string,
    timeframes: TimeframeGroup,
}

export interface FetchData{
    id: number,
    name: string,
    tracking: Tracking[],
}

export interface ProfileProps{
    name: string,
    img: string,
    handleType: (type:TimeFrameGroupKey)=>void,
}

export interface TrackingCardProps{
    className?: string,
    img: string,
    type: string,
    timeframe: Timeframe,
    timeframeType: string,
}

export type TimeFrameGroupKey = keyof TimeframeGroup;