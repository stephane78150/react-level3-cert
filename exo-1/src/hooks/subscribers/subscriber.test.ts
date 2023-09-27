import { beforeEach, describe, expect, test, vi } from 'vitest'
import * as SUT from './subscribers';

describe('subscriber tracking', () => {
  beforeEach(() => {
    SUT.clearAllSubscriptions();
  })
  test('should notify function when subscribed', () => {
    const someKey = 'someKey';
    const callback = vi.fn();   
    SUT.subscribeWithCleanup(someKey)(callback);
    SUT.notifyExistingSubscriber(someKey);   
    expect(callback).toHaveBeenCalled();
  })
  test('should no longer notify when un-subscribed', () => {
    const someKey = 'someKey';
    const callback = vi.fn();   
    const cleanup = SUT.subscribeWithCleanup(someKey)(callback)
    cleanup();
    SUT.notifyExistingSubscriber(someKey);   
    expect(callback).not.toHaveBeenCalled();
  })
  test('unsubscribing twice should not crash', () => {
    const someKey = 'someKey';
    const callback = vi.fn();   
    const cleanup = SUT.subscribeWithCleanup(someKey)(callback)
    cleanup();
    cleanup();
    SUT.notifyExistingSubscriber(someKey);   
    expect(callback).not.toHaveBeenCalled();
  })
  test('subscribing twice should ignore second subcribption', () => {
    const someKey = 'someKey';
    const callback = vi.fn();   
    const cleanup = SUT.subscribeWithCleanup(someKey)(callback)
    const cleanupAgain = SUT.subscribeWithCleanup(someKey)(callback)
    SUT.notifyExistingSubscriber(someKey);   
    expect(callback).toHaveBeenCalledTimes(1);
    callback.mockClear();
    
    cleanup();
    cleanupAgain();
    
    
  })
  test('unsubscribing without prior subscribtion should do nothing', () => {
    const someKey = 'someKey';
    const callback = vi.fn();   
    SUT.removeSubscriber(someKey)(callback)
    SUT.notifyExistingSubscriber(someKey);   
    expect(callback).not.toHaveBeenCalled();
  })
  test('complex scenario', () => {
    // Both key subscribed
    const someKey = 'someKey';
    const renderCallback = vi.fn();   
    const anotherKey = 'anotherKey';        
    const someCleanup = SUT.subscribeWithCleanup(someKey)(renderCallback);
    const anotherCleanup = SUT.subscribeWithCleanup(anotherKey)(renderCallback);
    SUT.notifyExistingSubscriber(someKey);   
    SUT.notifyExistingSubscriber(anotherKey);   
    expect(renderCallback).toHaveBeenCalledTimes(2);
    renderCallback.mockClear();

    // Only one key subscription left
    someCleanup();
    SUT.notifyExistingSubscriber(someKey);   
    SUT.notifyExistingSubscriber(anotherKey);   
    expect(renderCallback).toHaveBeenCalledTimes(1);
    renderCallback.mockClear();

    // No more subscription
    anotherCleanup();
    SUT.notifyExistingSubscriber(someKey);   
    SUT.notifyExistingSubscriber(anotherKey);   
    expect(renderCallback).toHaveBeenCalledTimes(0);
    renderCallback.mockClear();
  })
})


