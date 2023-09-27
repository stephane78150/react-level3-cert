let subscribersPerKey: Record<string, (()=> void)[]> = {};

export const addSubscriber = (key: string) => (onNotify: () => void) =>  {
    const previouslySubscribed = subscribersPerKey[key] ?? [];
    if (!previouslySubscribed.includes(onNotify)) {
        subscribersPerKey[key] = [...previouslySubscribed, onNotify];
    }
}

export const removeSubscriber = (key: string) => (onNotify: () => void) => {
    subscribersPerKey[key] = (subscribersPerKey[key] ?? []).filter(c => c !== onNotify);
}

export const clearAllSubscriptions = () => {
    subscribersPerKey = {};
}

export const subscribeWithCleanup = (key: string) => (onNotify: () => void) =>  {
   addSubscriber(key)(onNotify);
   return () => removeSubscriber(key)(onNotify);
}

export function notifyExistingSubscriber(key: string) {
    const subs = subscribersPerKey[key] ?? [];
    console.log("For this key", key, "we need to notify", subs.length, "subscribers");
    subs.forEach(callback => callback());
}

